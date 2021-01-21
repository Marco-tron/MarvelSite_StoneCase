<template>
    <a :href="link" class="flex-col flex  items-center">
        <h3 class="text-2xl font-semibold">
            {{title}}
        </h3>
        <div class="image my-4">
            <img class="object-cover h-full" :src="`images/${image}`" alt="">
        </div>
        <see-more v-if="!loading" :link="link"/>
    </a>
</template>

<script>

import SeeMore from '~/components/general/SeeMore';

export default {
    components: {
        SeeMore
    },
    data () {
        return {
            loading: true
        }
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
    },
    mounted() {
        this.loading = false;
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