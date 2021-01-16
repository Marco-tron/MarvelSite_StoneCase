<template>
    <div class="see-more bg-gray-900 text-white rounded-tl-lg rounded-br-lg">
        <clickable :link="link" class="px-4 py-3">
            VER MAIS
        </clickable>
    </div>
</template>

<script>

export default {
    props: {
        link: {
            type: String,
            default: '#'
        },
    }
}
</script>
<style lang="scss">
    .see-more{
        width:110px;
    }
</style>