<template>
  <div>
        <header class="h-20 z-20 bg-gray-900 w-full text-white font-semibold flex justify-between text-xl">
            <div class="h-full flex justify-center">
                <clickable class="w-32 flex justify-center">
                    LOGIN
                </clickable>
                <span class="mx-1 flex items-center">|</span>
                <clickable class="w-32 flex justify-center">
                    CADASTRO
                </clickable>
            </div>
      </header>
      <nav class="h-10 z-10 w-full bg-gray-600 text-white flex justify-around shadow-xl">
            <clickable class="w-32 flex justify-center">
                COMICS
            </clickable>
            <clickable class="w-32 flex justify-center">
                PERSONAGENS
            </clickable>
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