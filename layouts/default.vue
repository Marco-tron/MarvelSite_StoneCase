<template>
  <div>
    <marvel-header/>
    <nuxt />
    <div class="h-10 bg-gray-600 flex items-center justify-center text-white">
        <div v-html="attributionHTML"/>
    </div>
  </div>
</template>
<script>
import MarvelHeader from '@/components/Header';
import loginMixin from "@/mixins/login.js";

export default {
    components: {
        MarvelHeader
    },
    mixins: [loginMixin],
    data() {
        return{
            attributionHTML:""
        }
    },
    async mounted () {
        var md5 = require("md5"); 
        const privatekey = this.$config.privateKey;
        const publickey = this.$config.publicKey;
        const ts = new Date().valueOf();
        // validations for Marvel's API
        const hash = md5(ts + privatekey + publickey);

        try {
            this.attributionHTML = await this.$axios.$get(`https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${publickey}&hash=${hash}&limit=1`).then(res => res.attributionHTML);
        } catch(e) {
            console.log(e);
        }
        
    }
};

</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap);
html {
  font-family: "Lato", sans-serif !important;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
/* container to place the main content of the site */
.container {
    @media screen and (max-width: 1024px) {
        padding: 0 1rem;
    }
    min-height: 650px;
    @apply mx-auto my-20 ;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
form{
  input:focus {
    outline:none;
  }
  button:focus {
    outline:none;
  }
}
.input {
    @apply px-1 ml-1 border-2 border-gray-600 rounded-tl-lg rounded-br-lg ;
}
.button {
    @apply py-2 px-3 bg-gray-600 font-bold rounded-tl-lg rounded-br-lg text-white ;
}
</style>
