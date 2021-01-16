<template>
    <form class @submit.prevent.stop="search">
        <input
            class="p-2 border-2 border-gray-600 rounded-tl-lg"
            v-model="find"
            :placeholder="placeholderText"
            type="text"
        >
        <button @click="search" class="bg-gray-600 p-2 border-2 border-gray-600 rounded-br-lg -ml-2 text-white">
            Buscar
        </button>
    </form>
</template>

<script>

export default {
    props: {
        find:{
            type: String,
            default: ""
        }
    },
    data () {
        return {
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

<style lang="scss" scoped>
form{
    input:focus {
        outline:none;
    }
    button:focus {
        outline:none;
    }
}

</style>