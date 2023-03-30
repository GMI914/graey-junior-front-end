<template>
    <div class="product-card">
        <div class="product-image">
            <img :src="data.image" :alt="data.name">
            <span v-if="data.discount !== 0">-{{ data.discount }}%</span>
        </div>
        <p class="product-price">
            {{ discountedPrice }}₾
            <span v-if="data.discount !== 0">{{ data.price }}₾</span>
        </p>
        <span v-if="data.installment" class="installment">თვეში: {{ data.installment }}₾-დან</span>
        <p class="product-title">{{ data.name }}</p>
    </div>
</template>

<script>
export default {
    name: "ProductCard",
    props: {
        data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        discountedPrice() {
            return this.data.price * ((100 - this.data.discount) / 100)
        }
    }
}
</script>

<style scoped>
.product-card {
    cursor: pointer;
}

.product-image {
    width: 100%;
    height: 50%;
    position: relative;
}

.product-image img {
    object-fit: contain;
    object-position: center;
    width: 100%;
    height: 100%;
}

.product-image span {
    position: absolute;
    left: 0px;
    bottom: 8px;
    font-size: 12px;
    font-weight: 800;
    background: rgb(234, 86, 81);
    color: rgb(255, 255, 255);
    padding: 0px 6px;
    border-radius: 15px 15px 0px;
    line-height: 24px;
}

.product-price {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
}

.product-price span {
    margin: 0 0 0 10px;
    text-decoration: line-through;
    opacity: 0.7;
}

.installment {
    display: block;
    margin: 8px 0;
    font-size: 12px;
    color: rgb(176, 107, 86);
    text-align: left;
}

.product-title {
    line-height: 1.44;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    text-align: left;
}
</style>