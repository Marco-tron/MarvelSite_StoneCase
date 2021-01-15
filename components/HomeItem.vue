<template>
    <a :href="link" class="flex flex-col items-center">
        <h3 class="text-2xl font-semibold">
            {{title}}
        </h3>
        <div class="image my-4">
            <img class="object-cover h-full" :src="`images/${image}`" alt="">
        </div>
        <div class="bg-gray-900 text-white  rounded-tl-lg rounded-br-lg">
            <clickable :link="link" class="px-4 py-3">
                VER TODOS
            </clickable>
        </div>
    </a>
</template>

<script>
import Clickable from '~/components/general/Clickable'


export default {
    components: {
        Clickable
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
    }
}
</script>

<style lang="scss" scoped>
    .image{
        width: 260px;
        height: 260px;
         @media screen and (min-width: 360px) {
            width: 320px;
            height: 320px;
        }
        @media screen and (min-width: 640px) {
            width: 480px;
            height: 480px;
        }
    }
</style>