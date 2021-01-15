<template>
    <span class="cursor-pointer h-full flex items-center border-b-4 border-transparent hover:border-red-800 hover:font-bold hover:shadow-2xl">
        <a :href="link">
            <slot/>
        </a>
    </span>
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

<style>

</style>