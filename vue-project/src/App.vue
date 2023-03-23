<template>
  <div>
    <HeaderDefault />
    <main>
      <RouterView />
    </main>
    <FooterDefault />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  components: {
    RouterView,
    HeaderDefault: Header,
    FooterDefault: Footer
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>