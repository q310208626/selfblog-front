import { createRouter, createWebHistory } from 'vue-router'
import login from '@/components/Login.vue'
import notFound from '@/components/NotFound.vue'
import register from '@/components/Register.vue'
import home from '@/components/Home.vue'
import articleDetails from '@/components/ArticleDetails.vue'


const routes = [
    {
        path: '/',
        component: login
    },
    {
        path: '/login',
        name: 'Login',
        component: login
    },
    {
        path: '/register',
        name: 'Register',
        component: register
    },
    {
        path: '/home',
        name: 'Home',
        component: home
    },
    {
        path:'/articleDetails',
        name:'ArticleDetails',
        component:articleDetails
    }
    , {
        path: "/:path(.*)",
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router