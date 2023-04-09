import Home from '../views/Home.vue'
import Manifect from '../views/Manifect.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Profile from '../views/Profile.vue'

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
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: {
            protected: true
        }
    }
]