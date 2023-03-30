<template>
    <a :href="data.link || '#'" class="card" :class="{ 'short': type === 'short' }">
        <p>{{ data.title }}</p>
        <img :src="data.image" :alt="data.title">
    </a>
</template>

<script>
export default {
    name: "CategoryCard",
    props: {
        data: {
            type: Object,
            default() {
                return {}
            }
        },
        type: {
            type: String,
            default: "tall"
        }
    }
}
</script>

<style scoped>
.card {
    height: 170px;
    width: 150px;
    background-color: rgb(234, 234, 234);
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: black;
}

.card p {
    margin: 24px 0 0;
    padding: 0px 12px;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
}

.card img {
    position: absolute;
    bottom: 0;
    right: 0;
    max-height: 100px;
}
</style>