import Home from '../views/Home.vue'
import Manifect from '../views/Manifect.vue'

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/manifest',
        name: 'manifest',
        component: Manifect
    }
]