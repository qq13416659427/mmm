import VueRouter from 'vue-router'
import Vue from 'vue'
import login from '@/views/login/login'
import data from '@/views/Backgrounder/data'
import data_view from '@/views/Backgrounder/com/data_view'
import firm_list from '@/views/Backgrounder/com/firm_list'
import question_list from '@/views/Backgrounder/com/question_list'
import subject_list from '@/views/Backgrounder/com/subject_list'
import user_list from '@/views/Backgrounder/com/user_list'
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
        {
            path: '/data',
            component: data,
            children: [
                {
                    path: 'data_view',
                    component: data_view,
                },
                {
                    path: 'user_list',
                    component: user_list,
                },
                {
                    path: 'question_list',
                    component: question_list,
                },
                {
                    path: 'firm_list',
                    component: firm_list,
                },
                {
                    path: 'subject_list',
                    component: subject_list,
                },
            ]
        },

    ]
})

export default router;