import VueRouter from 'vue-router'
import Vue from 'vue'
import login from '@/views/login/login'

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: login
        },
        {
            path: '/',
            redirect: '/login',
        },

    ]
})

export default router;