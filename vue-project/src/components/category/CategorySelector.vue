<template>
    <div class="category-selector">
        <div class="category-card">
            <span></span>
            <p>ყველა კატეგორიის ნახვა</p>
        </div>
        <Carousel class="category-selector-carousel" :items-to-show="6" :items-to-scroll="3">
            <Slide v-for="category in data" :key="category.title">
                <CategoryCard :data="category" @selectCategory="($event) => { $emit('selectCategory', $event) }" />
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
import CategoryCard from './CategoryCard.vue';

export default {
    name: "CategorySelector",
    components: {
        Carousel,
        Slide,
        Navigation,
        CategoryCard
    },
    props: {
        data: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style>
.category-selector-carousel .carousel__prev,
.category-selector-carousel .carousel__next {
    border-radius: 50%;
    background-color: #ffffff;
    border: 1.5px solid rgb(236, 239, 241);
    box-shadow: rgb(212 215 217) 0px 4px 12px;
    height: 48px;
    width: 48px;
}

.category-selector-carousel .carousel__prev--disabled,
.category-selector-carousel .carousel__next--disabled {
    display: none;
}
</style>

<style scoped>
.category-selector {
    display: flex;
    align-items: center;
    padding: 20px 0;
}

.category-card {
    height: 170px;
    width: 150px;
    background-color: rgb(0, 0, 0);
    border-radius: 8px;
    display: inline-block;
    color: #ffffff;
    margin: 0 10px 0 0;
}

.category-card span {
    display: block;
    background-color: #ffffff;
    margin: 24px auto 0;
    width: 30px;
    height: 30px;
}

.category-card p {
    margin: 24px 0 0;
    padding: 0px 12px;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
}

.category-selector-carousel {
    display: inline-block;
    width: calc(100% - 160px);
}
</style>