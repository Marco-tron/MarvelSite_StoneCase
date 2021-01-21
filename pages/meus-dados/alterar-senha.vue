<template>
    <div v-if="$store.state.loggedIn" class="container pb-56">
        <Title text="Alterar Senha"/>
        <Subtitle text="digite sua senha antiga e sua nova senha abaixo" />
        <div class="grid grid-cols-2 pb-48">
            <form>
                <div class="grid grid-cols-3 my-2">
                    <span class="font-bold mr-2">Senha antiga:</span> <input class="input" v-model="user.oldPassword" type="text">
                </div>
                <div class="grid grid-cols-3 my-2">
                    <span class="font-bold mr-2">Senha nova:</span> <input class="input" v-model="user.password" type="text">
                </div>
                <button class="button" @click.prevent.stop="attData()">
                    ATUALIZAR
                </button>
                <div v-if="message.show" :class="message.class">
                    {{message.text}}
                </div>
            </form>
            
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                oldPassword: "",
                password: ""
            },
            message: {
            }
        }
    },
    methods: {
        async attData() {
            try {
                const response = await this.$axios.$put(`${this.$config.host}/users/newPassword`, this.user, {
                    headers: { authorization: this.$store.state.token}
                });
                this.message =  {
                    text:"Senha atualizado com sucesso",
                    class: "text-blue-500",
                    show: true
                }
            } catch(e){
                this.message =  {
                    text:"Houve um problema ao atualizar apague e tente novamente",
                    class: "text-red-500",
                    show: true
                }
                console.log(e)
            }
        }
    }
}
</script>

<style>

</style>