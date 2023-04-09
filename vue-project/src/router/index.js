import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import token from '../api/token'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to, from, next) => {

  if (to.meta.protected && !token.getToken()) {
    next({ name: 'login', query: { nextUrl: to.fullPath } })
  }
  
  next()
})

export default router
