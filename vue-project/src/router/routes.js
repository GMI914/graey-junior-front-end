import Home from '../views/Home.vue'
import Manifect from '../views/Manifect.vue'
import Register from '../views/Register.vue'

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
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
]