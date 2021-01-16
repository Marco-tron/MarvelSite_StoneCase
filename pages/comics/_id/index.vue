<template>
  <div class="container">
        <div class="grid w-full flex-wrap grid-cols-1  md:grid-cols-2  gap-10">
            <img class="w-full" :src="details.thumb" alt="">
            
            <div class="flex flex-col items-start text-left mb-4">
                <h1 class="text-4xl text-gray-900 font-bold">
                    {{details.title}}
                </h1>
                <div class="my-2">
                    <h2 class="text-xl text-gray-600">
                        DETALHES
                    </h2>
                    <div v-if="details.description" v-html="details.description"/>
                    <div v-else>
                        Desculpe, não há detalhes salvos para esta página
                    </div>
                </div>
                <div class="my-2">
                    <h2 class="text-xl text-gray-600">
                        {{details.list.title}}
                    </h2>
                    <div v-if="details.list">
                        <clickable v-for="item in details.list.items" :key="item.index" :link="item.link">
                            {{item.name}}
                        </clickable>
                    </div>
                    <div v-else>
                        Desculpe, não há detalhes salvos para esta página
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

import items from '~/static/json/HomeItems.json';
import Clickable from '~/components/general/Clickable'

export default {
    components: {
        Clickable,
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
        let details = {}

        //fetching characters or comics
                console.log(response);
        try {
            response = await $axios.$get(`https://gateway.marvel.com:443/v1/public/${call}/${id}?ts=${ts}&apikey=${publickey}&hash=${hash}`).then(res => res.data.results[0]);
            console.log(response);
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
                    console.log(id)
                    return {
                        name: i.name,
                        link: `/${listcall === "comics" ? listcall : "personagens"}/${id}`
                    };
                }),
                // checking if there are more comics related than the ones listed on the response
                seemore: response[listcall].available > response[listcall].items.length
            }
        }
        return {
            category,
            details
        };
    },
    data() {
        return {
            items
        }
    },
    methods: {
    }
}
</script>

<style lang="scss">

</style>