<template>
  <div>
        <header class="h-20 z-20 bg-gray-900 w-full text-white font-semibold flex justify-between text-xl">
            <div class="h-full flex justify-center">
                <Clickable class="w-32 flex justify-center">
                    LOGIN
                </Clickable>
                <span class="mx-1 flex items-center">|</span>
                <Clickable class="w-32 flex justify-center">
                    CADASTRO
                </Clickable>
            </div>
      </header>
      <nav class="h-10 z-10 w-full bg-gray-600 text-white flex justify-around shadow-xl">
            <Clickable class="w-32 flex justify-center">
                COMICS
            </Clickable>
            <Clickable class="w-32 flex justify-center">
                PERSONAGENS
            </Clickable>
      </nav>
  </div>
</template>

<script>
import Clickable from '~/components/general/Clickable'

export default {
    components: {
        Clickable
    }
}
</script>

<style>

</style>