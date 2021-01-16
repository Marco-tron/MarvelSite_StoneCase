<template>
    <a :href="link" class="flex flex-col items-center">
        <h3 class="text-2xl font-semibold">
            {{title}}
        </h3>
        <div class="image my-4">
            <img class="object-cover h-full" :src="`images/${image}`" alt="">
        </div>
        <see-more :link="link"/>
    </a>
</template>

<script>

import SeeMore from '~/components/general/SeeMore';

export default {
    components: {
        SeeMore
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