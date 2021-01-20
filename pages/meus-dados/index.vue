<template>
    <div v-if="$store.state.loggedIn" class="container mb-48">
        <Title text="MEUS DADOS"/>
        <Subtitle text="Aqui você pode ver e editar os dados de sua conta" />
        <div class="grid grid-cols-2 pb-48">
            <div >
                <div class="flex grid grid-cols-3">
                    <span class="font-bold">Nome:</span> <span> {{$store.state.user.name}} </span> <clickable class="w-32" link="/meus-dados/alterar-dados"> Alterar dados</clickable>
                </div>
                <div class="flex grid grid-cols-3">
                    <span class="font-bold">E-mail:</span> <span> {{$store.state.user.email}} </span> <clickable class="w-32" link="/meus-dados/alterar-dados"> Alterar dados</clickable>
                </div>
                <div class="flex grid grid-cols-3">
                    <span class="font-bold">Senha:</span> <span> ********* </span> <clickable class="w-32" link="/meus-dados/alterar-senha"> Alterar senha</clickable>
                </div>
            </div>
        </div>
        <form class="font-semibold">
            <div class="button w-32 cursor-pointer h-full flex items-center justify-center border-b-4 border-transparent hover:border-red-800 hover:font-bold hover:shadow-2xl" @click.prevent.stop="logout()">
                Sair da conta
            </div>
        </form>
        
  </div>
</template>

<script>
export default {
    data() {
        return {
        user: {
                name: "Marco",
                email: "teste@teste.com"
            }
        }
    },
    methods: {
        logout () {
            // remove userdata from session storage
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("loggedIn");

            // returns to homepage
            window.location.href = "/";
        }
    }

}
</script>

<style>

</style>