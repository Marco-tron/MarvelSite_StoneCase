<template> 
    <div class="container grid grid-cols-2">
        <div>
            <user-input
                title="LOGIN"
                subtitle="Entre com seu email e senha"
                action="login"
                @SendData="login($event)"
            />
            <div v-if="loginmessage.show" :class="loginmessage.class">
                {{loginmessage.text}}
            </div>
            <div class="flex text-gray-600 text-2xl justify-between items-center">
                <span class="h-1 w-1/2 bg-gray-600" />
                <span class="mx-4">
                    ou
                </span>
                <span class="h-1 w-1/2 bg-gray-600" />
            </div>
            <user-input
                title="CADASTRO"
                subtitle="Cadastre um email e senha para utilizar mais funcionalidades de nosso site"
                action="cadastre-se"
                @SendData="signUp($event)"
            />
            <div v-if="signmessage.show" :class="signmessage.class">
                {{signmessage.text}}
            </div>
        </div>
    </div>
</template>

<script>
import UserInput from "~/components/UserInput.vue";
export default {
    components: {
        UserInput
    },
    data() {
        return {
            signmessage: {},
            loginmessage: {}
        }
    },
    methods: {
        // function to make login
        async login (e) {
            try {
                console.log("signUp",e);
                const response = await this.$axios.$post(`${this.$config.host}/users/login`, e);
                console.log(response);
                sessionStorage.setItem("token", response.token);
                sessionStorage.setItem("user", JSON.stringify(response.user));
                sessionStorage.setItem("loggedIn", "true");

                window.location.href = "/"

            } catch(e){
                this.loginmessage =  {
                    text:"Senha ou E-mail inválidos",
                    class: "text-red-500",
                    show: true
                }
                console.log(e,)
            }
        },
        // function to register user
        async signUp (e) {
            try {
                console.log("signUp",e);
                const response = await this.$axios.$post(`${this.$config.host}/users/signup`, e);
                console.log(response);
                this.signmessage =  {
                    text:"Usuário criado com sucesso",
                    class: "text-blue-500",
                    show: true
                }
            } catch(e){
                this.signmessage =  {
                    text:"Insira valores válidos",
                    class: "text-red-500",
                    show: true
                }
                console.log(e,)
            }
            
        }
    }

}
</script>

<style>

</style>