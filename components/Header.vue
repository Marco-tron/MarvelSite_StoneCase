<template>
  <div>
      <header class="h-20 bg-gray-900 w-full text-white font-semibold flex justify-between text-xl">
          <div class="h-full  flex justify-center">
            <Clickable class="w-32 flex justify-center">
                LOGIN
            </Clickable>
            <span class="mx-1 flex items-center">|</span>
            <Clickable class="w-32 flex justify-center">
                CADASTRO
            </Clickable>
          </div>
      </header>
      <nav>

      </nav>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Clickable from '~/components/general/Clickable'

export default {
  components: {
    Logo,
    Clickable
  }
}
</script>

<style>

</style>