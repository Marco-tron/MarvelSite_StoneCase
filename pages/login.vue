<template> 
    <div class="container grid grid-cols-2">
        <div>
            <user-input
                title="LOGIN"
                subtitle="Entre com seu email e senha"
                action="login"
                @SendData="login($event)"
            />
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
        }
    },
    methods: {
        login (e) {
            console.log("login",e);
        },
        signUp (e) {
            console.log("signUp",e);
        }
    }

}
</script>

<style>

</style>