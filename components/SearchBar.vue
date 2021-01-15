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
    data () {
        return {
            find: "",
            placeholderText: "Busque aqui"
        }
    },
    methods: {
        //takes you to the route to find the required char or comic
        search () {
            window.location.href = `${this.$route.path}?find=${this.find}`
        }
    }
}
</script>

<style>

</style>