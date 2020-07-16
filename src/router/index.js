import VueRouter from 'vue-router'
import Vue from 'vue'
import login from '@/views/login/login'
import data from '@/views/Backgrounder/data'
import data_view from '@/views/Backgrounder/com/data_view'
import firm_list from '@/views/Backgrounder/com/firm_list'
import question_list from '@/views/Backgrounder/com/question_list'
import subject_list from '@/views/Backgrounder/com/subject_list'
import user_list from '@/views/Backgrounder/com/user_list'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: login,
            meta: {
                title: "登陆"
            }
        },
        {
            path: '/',
            redirect: '/login',
            meta: {
                title: "登陆"
            }
        },
        {
            path: '/data',
            component: data,
            children: [
                {
                    path: '/',
                    redirect: 'data_view',
                    meta: {
                        title: "数据概览"
                    }
                },
                {
                    path: 'data_view',
                    component: data_view,
                    meta: {
                        title: "数据概览"
                    }
                },
                {
                    path: 'user_list',
                    component: user_list,
                    meta: {
                        title: "用户列表"
                    }
                },
                {
                    path: 'question_list',
                    component: question_list,
                    meta: {
                        title: "题库列表"
                    }
                },
                {
                    path: 'firm_list',
                    component: firm_list,
                    meta: {
                        title: "企业列表"
                    }
                },
                {
                    path: 'subject_list',
                    component: subject_list,
                    meta: {
                        title: "学科列表"
                    }
                },
            ]
        },

    ]
})
NProgress.configure({ showSpinner: false })
router.beforeEach((to, from, next) => {
    console.log('去哪', to);
    console.log('来自', from);
    NProgress.start();
    next();
})
router.afterEach((to) => {
    console.log('去哪', to);
    document.title = to.meta.title;
    NProgress.done();
})

export default router;