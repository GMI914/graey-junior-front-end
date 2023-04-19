<template>
  <BaseWrapper>

    <p>{{ data }}</p>
    <p>{{ avatar }}</p>

    <CategorySelector :data="categoryData" @selectCategory="selectCategory" />
    <ProductSlider title="დღის შეთავაზებები" :data="productData" link="#" />
  </BaseWrapper>
</template>

<script>
import CategorySelector from '../components/category/CategorySelector.vue'
import BaseWrapper from '../components/layout/BaseWrapper.vue'
import ProductSlider from '../components/product/ProductSlider.vue'
import { ajax, authAjax, apiUrls } from '../api/urls'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

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
      categoryData: []
    }
  },
  computed: {
    ...mapGetters({
      data: 'userData',
      avatar: 'userAvatar',
      productData: 'product/productList'
    }),
    ...mapState({
      stateUserData: 'userData'
    })
  },
  mounted() {
    // this.$store.state
    // this.$store.commit('mutation name', payload)
    // this.$store.dispatch('getUserData')
    this.$store.dispatch('product/getProductList')
    // this.$store.getters

    this.getUserData()

    // this.data
    // this.avatar

    this.getCategoryData()
    this.getProductData(this.$route.query)
  },
  methods: {
    ...mapMutations({
      setUserData: 'setUserData'
    }),
    ...mapActions({
      getUserData: 'getUserData'
    }),
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
