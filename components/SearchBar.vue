<template>
    <form class @submit.prevent.stop="search">
        <input
            v-model="find"
            :placeholder="placeholderText"
            type="text">
        <button @click="search">
            <img src="" alt="">Buscar
        </button>
    </form>
</template>

<script>

export default {
    props: {
    
    },
    methods: {

    }
}
</script>

<style>

</style>