<template>
  <div>
    <HeaderDefault :userData="userData" />
    <main>
      <RouterView :userData="userData" @updateUserData="getUser" @clearUserData="claerUser" />
    </main>
    <FooterDefault />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import { authAjax, apiUrls } from './api/urls'
import teken from './api/token'

export default {
  components: {
    RouterView,
    HeaderDefault: Header,
    FooterDefault: Footer
  },
  data() {
    return {
      userData: {}
    }
  },
  mounted() {
    if (teken.getToken() && this.$route.name !== 'logout') {
      this.getUser()
    }
  },
  methods: {
    getUser({
      route
    } = {}) {
      return authAjax()
        .get(apiUrls.userData)
        .then(response => {

          if (teken.getToken()) {
            this.userData = response.data
          }

          if (route) {
            this.$router.push(route)
          }
        })
        .catch(e => {
          teken.clearToken()
        })
    },
    claerUser({
      route
    } = {}) {
      this.userData = {}
      if (route) {
        this.$router.push(route)
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>