<template>
  <div class="absolute breadcrumbs">
        <span>
            <a class="hover:text-red-600 hover:font-bold disabled" href="/">
            Home
            </a>
        </span>
        <span v-for="item in breadcrumbs" :key="item.index">
            >
            <a v-if="isActive(item.index)" class="hover:text-red-600 hover:font-bold" :href="item.link">
            {{item.name}}
            </a>
            <span v-else class="text-gray-600">
                {{item.name}}
            </span>
        </span>
  </div>
</template>

<script>
export default {
    props: {
        breadcrumbs: {
            type: Array,
            required: true
        },
    },
    methods: {
        isActive(index) {
            return index < this.breadcrumbs.length
        }
    }
}
</script>

<style lang="scss" scoped>
    .breadcrumbs{
        top: 125px;
    }
</style>