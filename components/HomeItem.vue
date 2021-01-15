<template>
    <a href="/comics" class="flex flex-col items-center ">
        <h3 class="text-2xl font-semibold">
            COMICS
        </h3>
        <div class="image">
            <img src="" alt="">
        </div>
        <div class="bg-gray-900 text-white  rounded-tl-lg rounded-br-lg">
            <clickable class="px-4 py-3">
                VER TODOS
            </clickable>
        </div>
    </a>
</template>

<script>
import Clickable from './general/clickable.vue'

export default {
    components: {
        Clickable
    }
}
</script>

<style scoped>
    .image{
        width: 900px;
        height: 900px;
    }
</style>