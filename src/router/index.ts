import { createRouter, createWebHistory } from 'vue-router'
import login from '@/components/Login.vue'
import NotFound from '@/components/NotFound.vue'
import register from '@/components/Register.vue'

const routes = [
    {
        path: '/',
        component: login
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/register',
        component: register
    },{
        path:"/:path(.*)",
        component:NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router