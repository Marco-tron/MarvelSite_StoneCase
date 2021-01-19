<template>
    <div class="container">
        <Title text="Alterar dados"/>
        <Subtitle text="digite aqui o email e o nome novos que você deseja, espaços em branco não serão alterados" />
        <div class="grid grid-cols-2 pb-48">
            <div>
                <div class="flex">
                    <span class="font-bold">Nome:</span> <input v-model="user.name" type="text">
                </div>
                <div class="flex grid grid-cols-3">
                    <span class="font-bold">E-mail:</span> <input v-model="user.email" type="text">
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