<template>
    <div class="base-wrapper">
        <slot />
    </div>
</template>

<script>
export default {
    name: "BaseWarpper"
}
</script>

<style scoped>
.base-wrapper {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 10px;
}
</style>