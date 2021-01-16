<template>
    <h1 class="text-4xl text-gray-900 font-bold">
        {{text}}
    </h1>
</template>

<script>

export default {
    props: {
        text: {
            type: String,
            default: ''
        },
    }
}
</script>