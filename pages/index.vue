<template>
  <div>
        <div class="flex flex-col items-center text-center my-4">
            <h1 class="text-4xl text-gray-900 font-bold">
                COMEÇE A PROCURAR
            </h1>
            <h2 class="text-xl text-gray-600">
                Quer encontrar aquele quadrinho inesquecível? Ou o personagem que você ama?
            </h2>
        </div>
        <div class="flex flex-col md:flex-row justify-between my-4">
            <home-item title="COMICS" link="/comics" image="marvel_comics.jpg" />
            <home-item title="PERSONAGENS" link="/personagens" image="marvel_characters.jpg" />
        </div>
  </div>
</template>

<script>
import HomeItem from '~/components/HomeItem'
export default {
    components: {
        HomeItem
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
