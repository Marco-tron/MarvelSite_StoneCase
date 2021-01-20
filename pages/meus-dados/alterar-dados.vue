<template>
    <div v-if="$store.state.loggedIn" class="container pb-56">
        <Title text="Alterar dados"/>
        <Subtitle text="digite aqui o email e o nome novos que você deseja, espaços em branco não serão alterados" />
        <div class="grid grid-cols-2 pb-48">
            <form>
                <div class="flex my-2">
                    <span class="font-bold mr-2">Nome:</span> <input class="input" v-model="user.name" type="text">
                </div>
                <div class="flex my-2">
                    <span class="font-bold mr-2">E-mail:</span> <input class="input" v-model="user.email" type="text">
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
                name: "",
                email: ""
            },
            message: {
            }
        }
    },
    methods: {
        async attData() {
            try {
                const response = await this.$axios.$put(`${this.$config.host}/users/att`, this.user, {
                    headers: { authorization: this.$store.state.token}
                });
                console.log(response);
                this.message =  {
                    text:"Atualizado com sucesso",
                    class: "text-blue-500",
                    show: true
                }
                sessionStorage.setItem("user", JSON.stringify(response.userUpdate));
            } catch(e){
                this.message =  {
                    text:"Erro ao atualizar",
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