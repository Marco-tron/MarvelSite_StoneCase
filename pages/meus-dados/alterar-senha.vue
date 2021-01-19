<template>
    <div class="container">
        <Title text="Alterar Senha"/>
        <Subtitle text="digite sua senha antiga e sua nova senha abaixo" />
        <div class="grid grid-cols-2 pb-48">
            <div>
                <div class="flex">
                    <span class="font-bold">Senha antiga:</span> <input v-model="user.oldPassword" type="password">
                </div>
                <div class="flex grid grid-cols-3">
                    <span class="font-bold">Senha nova:</span> <input v-model="user.newPassword" type="password">
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
                oldPassword: "Marco",
                newPassword: "teste@teste.com"
            }
        }
    }

}
</script>

<style>

</style>