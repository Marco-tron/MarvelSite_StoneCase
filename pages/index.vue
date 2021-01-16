<template>
  <div class="container">
        <div class="flex flex-col items-center text-center mb-4">
            <Title text="COMEÇE A PROCURAR"/>
            <Subtitle text="Quer encontrar aquele quadrinho inesquecível? Ou o personagem que você ama?"/>
        </div>
        <div class="flex flex-col md:flex-row justify-between my-4">
            <home-item v-for="item in items" :key="item.index" :title="item.title" :link="item.link" :image="item.image" />
        </div>
  </div>
</template>

<script>
import HomeItem from '~/components/HomeItem'
import items from '~/static/json/HomeItems.json'

export default {
    components: {
        HomeItem
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
