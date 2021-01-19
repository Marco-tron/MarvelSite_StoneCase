<template>
  <div class="container">
      <Title text="MEUS DADOS"/>
      <Subtitle text="Aqui você pode ver e editar os dados de sua conta" />
      <div>
            <div>
                Nome: <span> {{user.name}} </span>
            </div>
            <div>
                email: <span> {{user.email}} </span>
            </div>
      </div>
      <div>
          Senha: <span> ********* </span>
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