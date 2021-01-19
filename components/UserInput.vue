<template>
    <form class="">
        <Title :text="title" />
        <Subtitle :text="subtitle" />
        <div v-for="item in items" :key="item.index" class="my-3" >
            {{item.name}}
            <span><input v-model="item.model" class="px-1 ml-1 border-2 border-gray-600 rounded-tl-lg rounded-br-lg" type="text"></span>
        </div>
        <button class="py-2 px-3 bg-gray-600 font-bold rounded-tl-lg rounded-br-lg text-white" @click.prevent.stop="SendData()">
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
        SendData () {
            const data = {};
            // mapping the data to send for login or sign in
            this.items.map((i) => {
                data[i.name] = i.model;
            });
            // emmiting evvent with user data
            this.$emit("SendData", data)
        }
    },

}
</script>

<style>

</style>