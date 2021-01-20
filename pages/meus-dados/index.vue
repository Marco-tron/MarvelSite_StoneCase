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
    }

}
</script>

<style>

</style>