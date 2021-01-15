<template>
    <div class="flex flex-col items-center ">
        <h3 class="text-2xl font-semibold">
            COMICS
        </h3>
        <img src="" alt="">
        <div class="bg-gray-900 text-white  rounded-tl-lg rounded-br-lg hover:rounded-none">
            <clickable class="px-4 py-3">
                VER TODOS
            </clickable>
        </div>
    </div>
</template>

<script>
import Clickable from './general/clickable.vue'

export default {
    components: {
        Clickable
    }
}
</script>

<style>

</style>