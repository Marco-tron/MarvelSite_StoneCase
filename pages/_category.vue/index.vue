<template>
  <div class="container">
        <div class="flex flex-col items-start text-left mb-4">
            <h1 class="text-4xl text-gray-900 font-bold">
                PERSONAGENS
            </h1>
            <h2 class="text-xl text-gray-600">
                Os personagens mais incríveis da MARVEL estão logo abaixo
            </h2>
        </div>
        <div>
            {{category}}
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
        $axios
    }) {
        const category = params.category;
        
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