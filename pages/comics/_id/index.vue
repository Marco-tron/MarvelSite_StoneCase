<template>
  <div class="container">
        <div class="grid w-full flex-wrap grid-cols-1  md:grid-cols-2  gap-10">
            <img src="" alt="">
            
            <div class="flex flex-col items-start text-left mb-4">
                <h1 class="text-4xl text-gray-900 font-bold">
                    {{category}}
                </h1>
                <div>
                    <h2>
                        DETALHES
                    </h2>
                    <div>

                    </div>
                </div>
                <div>
                    <h2>
                        COMICS RELACIONADAS
                    </h2>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
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
        const call = category === "COMICS" ? "comics" : "characters";

        // Marvel's API  private and public key
        const privatekey = $config.privateKey;
        const publickey = $config.publicKey;
        const ts = new Date().valueOf();
        // validations for Marvel's API
        const hash = md5(ts + privatekey + publickey);

        let response = {};
        let list = [];

        //fetching characters or comics
        try {
            response = await $axios.$get(`https://gateway.marvel.com:443/v1/public/${call}/${id}?ts=${ts}&apikey=${publickey}&hash=${hash}`);
            console.log(response);
        } catch (e) {
            console.log(e);
        }

        //formating response
        if (response) {
            list = response.data.results.map((i) => {
                // this checks if its a char or a comic if its a char it takes its name if its a comic it checks if it has the issue number if it has  it attributes its title if not, it also adds the issue number
                let title = i.name ? i.name : i.title.includes("#") ? i.title : i.title + " #" + i.issueNumber;

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
            find
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