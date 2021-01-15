<template>
  <div class="container">
        <div class="flex flex-col items-start text-left mb-4">
            <h1 class="text-4xl text-gray-900 font-bold">
                {{category}}
            </h1>
            <h2 class="text-xl text-gray-600">
                Os personagens mais incríveis da MARVEL estão logo abaixo
            </h2>
        </div>
        <search-bar/>
        <div class="grid w-full flex-wrap grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div v-for="item in list" :key="item.index" class="bg-gray-900 rounded-tl-lg rounded-br-lg">
                <clickable>
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
import Clickable from '~/components/general/Clickable'
import Paginate from '~/node_modules/vuejs-paginate/src/components/Paginate'
import SearchBar from '~/components/SearchBar'


export default {
    components: {
        Clickable,
        Paginate,
        SearchBar
    },
    async asyncData({
        params,
        $axios,
        $config,
        query
    }) {
        var md5 = require("md5"); 
        // are you searching for comics or characters?
        const category = params.category.toUpperCase();
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

        let response = {};
        let list = [];

        //fetching characters or comics
        try {
            response = await $axios.$get(`https://gateway.marvel.com:443/v1/public/${call}?ts=${ts}&apikey=${publickey}&hash=${hash}&limit=${limit}&offset=${offset}`);
            console.log(response);

            // calculating total pages
            pages = Math.ceil(response.data.total/response.data.limit)
            console.log(pages);
        } catch (e) {
            console.log(e);
        }

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
            page
        };
    },
    data() {
        return {
            items
        }
    },
    methods: {
        loadPage (page) {
            console.log(this.$route);
            // this code changes the page you're currently in if you have a find parameter it wil also add that
            window.location.href = `${this.$route.path}?page=${page}${this.$route.query.find ? '&find=' + this.$route.query.find : ''}`
        }
    }
}
</script>

<style lang="scss">
.paginate{
    @apply my-4 justify-between ;
    li{

        @apply bg-gray-900 text-white font-semibold h-10 w-10 flex items-center justify-center rounded-md border-transparent border-4 ;
        a{
            @apply flex items-center justify-center h-full w-full border-none ;
        }
    }
    li:hover {
        @apply border-red-800 shadow-2xl ;
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