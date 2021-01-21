<template>
  <div class="container">
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <div class="grid w-full flex-wrap grid-cols-1  md:grid-cols-2  gap-10">
            <img class="w-full" :src="details.thumb" alt="">
            
            <div class="flex flex-col items-start text-left mb-4">
                <Title :text="details.title"/>
                <div v-if="$store.state.loggedIn">
                    <input type="checkbox" id="favorite" v-model="favorite" @change="UpdateFav($event)">
                    <label for="favorite">FAVORITO</label>
                </div>
                <div class="my-2">
                    <Subtitle text="DETALHES"/>
                    <div v-if="details.description" v-html="details.description"/>
                    <div v-else>
                        Desculpe, não há detalhes salvos para esta página
                    </div>
                </div>
                <div class="my-2">
                    <Subtitle :text="details.list.title"/>
                    <div v-if="details.list && details.list.items">
                        <clickable v-for="item in details.list.items" :key="item.index" :link="item.link">
                            {{item.name}}
                        </clickable>
                    </div>
                    <see-more v-if="details.list.seemore" :link="details.list.seemoreLink" />
                </div>
            </div>
        </div>
  </div>
</template>

<script>

import items from '~/static/json/HomeItems.json';
import SeeMore from '~/components/general/SeeMore';

export default {
    components: {
        SeeMore
    },
    async asyncData({
        params,
        route,
        $axios,
        $config,
        query
    }) {
        var md5 = require("md5"); 
        // is it a comic or character page?
        const category = route.name.toUpperCase();
        const id = params.id;
        const call = category.includes("COMICS") ? "comics" : "characters";
        const listcall = category.includes("COMICS") ? "characters" : "comics";

        // Marvel's API  private and public key
        const privatekey = $config.privateKey;
        const publickey = $config.publicKey;
        const ts = new Date().valueOf();
        // validations for Marvel's API
        const hash = md5(ts + privatekey + publickey);

        let response = null;
        let details = {
            title: "",
            id: "",
            description: "",
            list: {},
            seemore: false
        }

        //fetching characters or comics
        try {
            response = await $axios.$get(`https://gateway.marvel.com:443/v1/public/${call}/${id}?ts=${ts}&apikey=${publickey}&hash=${hash}`).then(res => res.data.results[0]);
        } catch (e) {
            console.log(e);
        }

        //formating response
        if (response) {
            
            // this checks if its a char or a comic if its a char it takes its name if its a comic it checks if it has the issue number if it has  it attributes its title if not, it also adds the issue number
            details.title = response.name ? response.name : response.title.includes("#") ? response.title : response.title + " #" + response.issueNumber;

            details.thumb = response.thumbnail.path + "." + response.thumbnail.extension;
            details.id = response.id;
            details.description = response.description
            // making a list of comics or chars depending on the page, with their name and link
            details.list= {
                title: call === "comics" ? "PERSONAGENS RELACIONADOS" : "COMICS RELACIONADAS",
                
                items: response[listcall].items.map((i)=>{
                    //regex to extract the id from the uri call
                    const re = listcall === "comics" ? new RegExp(/\/comics\/(.*)/) : new RegExp(/characters\/(.*)/);
                    // the regex response is an array where the first one is a full match and the second corresponds only to the group specified and that's our id we want
                    let id = i.resourceURI.match(re)[1];
                    return {
                        name: i.name,
                        link: `/${listcall === "comics" ? listcall : "personagens"}/${id}`
                    };
                }),
                // checking if there are more comics related than the ones listed on the response
                seemore: response[listcall].available > response[listcall].items.length,
                // link to see all related items
                seemoreLink: `/${listcall === "comics" ? listcall : "personagens"}?related=${response.id}&name="${details.title}"`
            }
        }

        //breadcrumbs
        const breadcrumbs =[
            {
                name: call,
                link: "/" + call,
                index: 1
            },
            {
                name: details.title,
                link: route.path,
                index: 2
            }
        ]
        return {
            category,
            details,
            breadcrumbs,
            favorite: false,
            call
        };
    },
    async mounted () {
        try {
                // fetches the list of favorites items
            const token = sessionStorage.getItem("token")
            
            const favorites = await this.$axios.$get(`${this.$config.host}/users/favorites`,{
                headers: { authorization: token}
            });
            //sets checked value true or false
            this.favorite = favorites.find(element => element.marvelid === this.details.id && element.category === this.call);
            console.log(e);
        } catch (e){
            console.log(e);
        }
        
    },
    data() {
        return {
            items
        }
    },
    methods: {
        // function to update favorite on database
        async UpdateFav (e) {
            // send new favorite to database
            if (this.favorite) {
                try {
                    const fav = {
                        title: this.details.title,
                        thumb: this.details.thumb,
                        marvelid: this.details.id,
                        category: this.call
                    } 
                    const newFav = await this.$axios.$post(`${this.$config.host}/users/favorites`,fav,{
                        headers: { authorization: this.$store.state.token}
                    });
                } catch(e) {
                    console.log(e);
                }
            // remove favorite from database
            } else {
                try {
                    const newFav = await this.$axios.$delete(`${this.$config.host}/users/favorites/${this.call}/${this.details.id}`,{
                        headers: { authorization: this.$store.state.token}
                    });
                } catch(e) {
                    console.log(e);
                }
            }
        }
    }
}
</script>

<style lang="scss">

</style>