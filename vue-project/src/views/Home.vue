<template>
  <BaseWrapper>
    <CategorySelector :data="categoryData" @selectCategory="selectCategory" />
    <ProductSlider title="დღის შეთავაზებები" :data="productData" link="#" />
  </BaseWrapper>
</template>

<script>
import CategorySelector from '../components/category/CategorySelector.vue'
import BaseWrapper from '../components/layout/BaseWrapper.vue'
import ProductSlider from '../components/product/ProductSlider.vue'
import { ajax, authAjax, apiUrls } from '../api/urls'

export default {
  name: "HomePage",
  components: {
    BaseWrapper,
    CategorySelector,
    ProductSlider
  },
  props: {
    userData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      categoryData: [],
      productData: []
    }
  },
  mounted() {
    this.getCategoryData()
    this.getProductData(this.$route.query)
  },
  methods: {
    getCategoryData() {
      return ajax
        .get(apiUrls.productCategories)
        .then(response => {
          this.categoryData = response.data;
        })
    },
    getProductData(query = {}) {
      return authAjax()
        .get(apiUrls.productList, { params: query })
        .then(response => {
          this.productData = response.data.results;
        })
    },
    selectCategory(categrySlug) {
      const query = {
        category: categrySlug,
        sort_by: 'featured'
      }
      this.getProductData(query)
      this.$router.replace({ query: query })
    }
  }
}
</script>

<style scoped></style>
