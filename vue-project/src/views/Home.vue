<template>
  <BaseWrapper>
    <CategorySelector />
    <ProductSlider title="დღის შეთავაზებები" :data="productList" link="#"/>

  </BaseWrapper>
</template>

<script>
import CategorySelector from '../components/category/CategorySelector.vue'
import BaseWrapper from '../components/layout/BaseWrapper.vue'
import ProductSlider from '../components/product/ProductSlider.vue'

export default {
  name: "HomePage",
  components: {
    BaseWrapper,
    CategorySelector,
    ProductSlider
  },
  data() {
    return {
      productList: [
        {
          id: 1,
          name: 'Baseus Transparent Key Phone Case Apple IPhone 11 Transparent',
          price: 29,
          discount: 34,
          installment: 4,
          image: 'https://adjarastoremedia.s3.amazonaws.com/media/__sized__/product/6953156211452-thumbnail-200x200-95.jpg'
        },
        {
          id: 2,
          name: 'Baseus Transparent Key Phone Case Apple IPhone 11 Transparent',
          price: 29,
          discount: 34,
          installment: 4,
          image: 'https://adjarastoremedia.s3.amazonaws.com/media/__sized__/product/6953156211452-thumbnail-200x200-95.jpg'
        },
        {
          id: 3,
          name: 'Baseus Transparent Key Phone Case Apple IPhone 11 Transparent',
          price: 29,
          discount: 34,
          installment: 4,
          image: 'https://adjarastoremedia.s3.amazonaws.com/media/__sized__/product/6953156211452-thumbnail-200x200-95.jpg'
        },
        {
          id: 4,
          name: 'Baseus Transparent Key Phone Case Apple IPhone 11 Transparent',
          price: 29,
          discount: 34,
          installment: 4,
          image: 'https://adjarastoremedia.s3.amazonaws.com/media/__sized__/product/6953156211452-thumbnail-200x200-95.jpg'
        },
        {
          id: 5,
          name: 'Baseus Transparent Key Phone Case Apple IPhone 11 Transparent',
          price: 29,
          discount: 34,
          installment: 4,
          image: 'https://adjarastoremedia.s3.amazonaws.com/media/__sized__/product/6953156211452-thumbnail-200x200-95.jpg'
        },
        {
          id: 6,
          name: 'Baseus Transparent Key Phone Case Apple IPhone 11 Transparent',
          price: 29,
          discount: 34,
          installment: 4,
          image: 'https://adjarastoremedia.s3.amazonaws.com/media/__sized__/product/6953156211452-thumbnail-200x200-95.jpg'
        },
        {
          id: 7,
          name: 'Baseus Transparent Key Phone Case Apple IPhone 11 Transparent',
          price: 29,
          discount: 34,
          installment: 4,
          image: 'https://adjarastoremedia.s3.amazonaws.com/media/__sized__/product/6953156211452-thumbnail-200x200-95.jpg'
        },
        {
          id: 8,
          name: 'Baseus Transparent Key Phone Case Apple IPhone 11 Transparent',
          price: 29,
          discount: 34,
          installment: 4,
          image: 'https://adjarastoremedia.s3.amazonaws.com/media/__sized__/product/6953156211452-thumbnail-200x200-95.jpg'
        },
        {
          id: 9,
          name: 'Baseus Transparent Key Phone Case Apple IPhone 11 Transparent',
          price: 29,
          discount: 34,
          installment: 4,
          image: 'https://adjarastoremedia.s3.amazonaws.com/media/__sized__/product/6953156211452-thumbnail-200x200-95.jpg'
        },
        {
          id: 10,
          name: 'Baseus Transparent Key Phone Case Apple IPhone 11 Transparent',
          price: 29,
          discount: 34,
          installment: 4,
          image: 'https://adjarastoremedia.s3.amazonaws.com/media/__sized__/product/6953156211452-thumbnail-200x200-95.jpg'
        },
      ]
    }
  }
}
</script>

<style scoped></style>
