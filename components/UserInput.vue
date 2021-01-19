<template>
    <form class="">
        <Title :text="title" />
        <Subtitle :text="subtitle" />
        <div v-for="item in items" :key="item.index" class="my-3" >
            {{item.name}}
            <span><input v-model="item.model" class="px-1 ml-1 border-2 border-gray-600 rounded-tl-lg rounded-br-lg" type="text"></span>
        </div>
        <button @click.prevent.stop="SendData()">
            {{action}}
        </button>
    </form>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        subtitle: {
            type: String,
            default: ""
        },
        action: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            items: [
            {
                name: "E-mail",
                model: ""
            },
            {
                name: "Senha",
                model: ""
            }
        ]
        }
    },
    methods: {
        
    },

}
</script>

<style>

</style>