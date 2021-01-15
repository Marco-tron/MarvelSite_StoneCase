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
        <div>
            
        </div>
  </div>
</template>

<script>
import items from '~/static/json/HomeItems.json';

export default {
    components: {
    },
    async asyncData({
        params,
        $axios,
        $config
    }) {
        var md5 = require("md5"); 
        // are you searching for comics or characters?
        const category = params.category.toUpperCase();

        // Marvel's API  private and public key
        const privatekey = $config.privateKey;
        const publickey = $config.publicKey;
        const ts = new Date().valueOf();
        // validations for Marvel's API
        const hash = md5(ts + privatekey + publickey);

        let response = [];
        try {
            response = await $axios.$get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publickey}&hash=${hash}`);
            console.log(items);
        } catch (e) {
            console.log(e);
        }
        
        return {
            category
        };
    },
    data() {
        return {
            items
        }
    }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>