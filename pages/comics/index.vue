<template>
    <div class="container">
        <breadcrumbs :breadcrumbs="breadcrumbs" />
        <div class="flex flex-col lg:flex-row md:justify-between md:items-end">
            <div class="flex flex-col items-start text-left mb-4">
                <Title :text="category"/>
                <Subtitle :text="subtitle[category]"/>
            </div>
            <search-bar :find="find" class="my-4"/>
        </div>

        <div v-if="find" class="text-lg text-gray-600 my-4">
            Resultados de busca para "{{find}}" ...
        </div>
        <div v-if="related && $route.query.name" class="text-lg text-gray-600 my-4">
            {{category}} relacionados a "{{$route.query.name}}" ...
        </div>
        
        <div class="grid w-full flex-wrap grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div v-for="item in list" :key="item.index" class="bg-gray-900 rounded-tl-lg rounded-br-lg">
                <clickable :link="detailsLink(item.id)">
                    <div>
                        <div class="h-64 ">
                            <img :src="item.thumb" alt="" class="object-cover w-full h-full rounded-tl-lg">
                        </div>
                        <div class="flex flex-col justify-between h-32 bg-gray-900 px-4 pt-4 pb-1 text-white">
                            <h3 class="font-bold text-xl">
                                {{item.title}}
                            </h3>
                            <div class="font-semibold text-red-800 text-right">
                                VER MAIS
                            </div>
                        </div>
                    </div>
                </clickable>
            </div>
        </div>
        <paginate
            class="flex"
            v-model="page"
            :page-count="pages"
            :click-handler="loadPage"
            prev-text="<"
            next-text=">"
            container-class="paginate"
        />
    </div>
</template>

<script>
import items from '~/static/json/HomeItems.json';
import Paginate from '~/node_modules/vuejs-paginate/src/components/Paginate';
import SearchBar from '~/components/SearchBar';


export default {
    components: {
        Paginate,
        SearchBar
    },
    async asyncData({
        route,
        $axios,
        $config,
        query
    }) {
        var md5 = require("md5"); 
        // are you searching for comics or characters?
        const category = route.name.toUpperCase();
        const call = category === "COMICS" ? "comics" : "characters";

        // Marvel's API  private and public key
        const privatekey = $config.privateKey;
        const publickey = $config.publicKey;
        const ts = new Date().valueOf();
        // validations for Marvel's API
        const hash = md5(ts + privatekey + publickey);

        //pagination
        const limit = 20
        const page = query.page ? Number(query.page) : 1
        const offset = (page-1)*limit
        let pages = 0

        // search engine
        const find = query.find ? query.find : "";
        const related = query.related ? query.related : "";
        let findString = "";

        //breadcrumbs
        const breadcrumbs = [{
            name: route.name,
            link: route.path
        }]

        let relatedString ="";let response = null;
        let list = [];

        if (find) {
            findString = category === "COMICS" ? `&titleStartsWith=${find}` : `&nameStartsWith=${find}`
        };
        if (related) {
            relatedString = category === "COMICS" ? `&characters=${related}` : `&comics=${related}`
        };

        //fetching characters or comics
        try {
            response = await $axios.$get(`https://gateway.marvel.com:443/v1/public/${call}?ts=${ts}&apikey=${publickey}&hash=${hash}&limit=${limit}&offset=${offset + findString + relatedString}`);
            console.log(relatedString)

            // calculating total pages
            pages = Math.ceil(response.data.total/response.data.limit)
        } catch (e) {
            console.log(e);
        }
        console.log(`https://gateway.marvel.com:443/v1/public/${call}?ts=${ts}&apikey=${publickey}&hash=${hash}&limit=${limit}&offset=${offset + findString + relatedString}`);

        //formating response
        if (response) {
            list = response.data.results.map((i) => {
                // this checks if its a char or a comic if its a char it takes its name if its a comic it checks if it has the issue number if it has  it attributes its title if not, it also adds the issue number
                let title = i.name ? i.name : i.title.includes("#") ? i.title : i.title + " #" + i.issueNumber;

                // checking title length
                if (title.length > 32) title = title.slice(0,32) + "..."

                const thumb = i.thumbnail.path + "." + i.thumbnail.extension;
                const id = i.id;
                return {
                    id,
                    title,
                    thumb
                }
            })
        }
        return {
            category,
            list,
            pages,
            page,
            find,
            related,
            breadcrumbs
        };
    },
    data() {
        return {
            items,
            subtitle:{
                PERSONAGENS: "Os personagens mais incríveis da MARVEL estão logo abaixo",
                COMICS: "Os melhores comics da MARVEL estão aqui embaixo"
            }
        }
    },
    methods: {
        loadPage (page) {
            console.log(this.$route);
            // this code changes the page you're currently in if you have a find parameter it wil also add that
            window.location.href = `${this.$route.path}?page=${page}${this.$route.query.find ? '&find=' + this.$route.query.find : ''}${this.$route.query.related ? '&related=' + this.$route.query.related +'&name=' + this.$route.query.name : ''}`
        },
        detailsLink (id) {
            return this.$route.path + "/" + id
        }
    }
}
</script>

<style lang="scss">
.paginate{
    @apply my-4 justify-center p-4 bg-gray-300 rounded-tl-lg rounded-br-lg border border-2 border-gray-600 ;
    li{

        @apply bg-gray-900 text-white font-semibold h-10 w-10 m-2 flex items-center justify-center rounded-md border-transparent border-4 ;
        a{
            @apply flex items-center justify-center h-full w-full border-none ;
        }
        a:focus {
            outline:none;
        }
    }
    li:hover {
        @apply border-red-800 shadow-2xl ;
    }
    li:focus{
        @apply border-4 border-red-800 shadow-2xl ;
    }
    .disabled{
        @apply bg-gray-600 ;
    }
    .active{
        @apply border-4 border-red-800 shadow-2xl ;
    }

    .disabled:hover {
        @apply border-transparent cursor-default ;
    }
}
</style>