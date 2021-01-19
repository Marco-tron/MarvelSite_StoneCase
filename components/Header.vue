<template>
  <div>
        <header class="h-20 z-20 bg-gray-900 w-full text-white font-semibold flex justify-between text-xl">
            <div class="h-full flex justify-center">
                <clickable link="/login" class="px-4 flex justify-center">
                    LOGIN
                </clickable>
                <span class="my-4 bg-white bar"/>
                <clickable link="/login" class="px-4 flex justify-center">
                    CADASTRO
                </clickable>
            </div>
            <div v-if="loggedIn">
                <clickable link="/favoritos" class="px-4 flex justify-center">
                    FAVORITOS
                </clickable>
            </div>
      </header>
      <nav class="h-10 z-10 w-full bg-gray-600 text-white flex justify-around shadow-xl"> 
            <clickable v-for="item in items" :key="item.index" :link="item.link" class="w-32 flex justify-center">
                {{item.title}} 
            </clickable>
      </nav>
  </div>
</template>

<script>
import items from '~/static/json/HomeItems.json'

export default {
    components: {
    },
    data() {
        return {
            items,
            loggedIn: true
        }
    }
}
</script>

<style scoped>
 .bar{
     width: 2px;
 }
</style>