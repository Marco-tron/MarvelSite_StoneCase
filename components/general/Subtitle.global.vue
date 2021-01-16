<template>
    <h2 class="text-xl text-gray-600">
        {{text}}
    </h2>
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