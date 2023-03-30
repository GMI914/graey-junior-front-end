<template>
    <div class="product-slider">
        <h3>
            {{ title }}
            <a v-if="link" :href="link">სრულად →</a>
        </h3>
        <Carousel class="product-slider-carousel" :items-to-show="6" :items-to-scroll="3">
            <Slide v-for="product in data" :key="product.id">
                <ProductCard :data="product" class="product-slider-card" />
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import ProductCard from './ProductCard.vue'

export default {
    name: "ProductSlider",
    components: {
        Carousel,
        Slide,
        Navigation,
        ProductCard
    },
    props: {
        title: {
            type: String,
            default: null
        },
        link: {
            type: String,
            default: null
        },
        data: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style>
.product-slider-carousel .carousel__prev,
.product-slider-carousel .carousel__next {
    border-radius: 50%;
    background-color: #ffffff;
    border: 1.5px solid rgb(236, 239, 241);
    box-shadow: rgb(212 215 217) 0px 4px 12px;
    height: 48px;
    width: 48px;
    color: black;
}


.product-slider-carousel .carousel__prev::before {
    content: '←';
    font-size: 70%;
}

.product-slider-carousel .carousel__next::before {
    content: '→';
    font-size: 70%;
}

.product-slider-carousel .carousel__prev:hover,
.product-slider-carousel .carousel__next:hover {
    background-color: #B4D984;
    color: #ffffff;
}

.product-slider-carousel .carousel__prev--disabled,
.product-slider-carousel .carousel__next--disabled,
.product-slider-carousel .carousel__icon {
    display: none;
}
</style>

<style scoped>
.product-slider {
    padding: 20px 0;
}

.product-slider h3 {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.4;
}

.product-slider h3 a {
    color: inherit;
    float: right;
    font-size: 16px;
    line-height: 45px;
    text-decoration: none;
}

.product-slider-card {
    width: 165px;
    height: 300px;
}

.product-slider-carousel {
    margin: 20px 0 0;
}
</style>