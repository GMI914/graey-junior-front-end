<template>
    <input :type="type" :placeholder="placeholder">
</template>

<script>
export default {
    name: 'SearchInput',
    // props: ['type']
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: null
        }
    }
}
</script>

<style scoped>
input {
    height: 48px;
    font-size: 14px;
    line-height: 48px;
    border: none;
    border-radius: 8px;
    padding: 0 10px;
}

input:focus-visible {
    outline: none;
}
</style>