import axios from 'axios'
import { gettoken, removetoken } from './login'
import router from '@/router/index'
let _axios = axios.create({
    baseURL: process.env.VUE_APP_USER,
    withCredentials: true,
})
_axios.interceptors.response.use(function (config) {
    console.log(config);
    if (config.data.code == 206) {
        alert('请先登录');
        removetoken();
        router.push('/login');
    }
    return config.data;
}, function (err) {
    return Promise.reject(err);
})
function plogin(obj) {
    return _axios({
        url: '/login',
        method: 'post',
        data: {
            phone: obj.phone,
            password: obj.password,
            code: obj.code
        }
    })
}
function SMS_verification(obj) {
    return _axios({
        url: '/sendsms',
        method: 'post',
        data: {
            code: obj.code,
            phone: obj.phone
        },
    })
}
function register(obj) {
    return _axios({
        url: '/register',
        method: 'post',
        data: {
            username: obj.username,
            phone: obj.phone,
            email: obj.email,
            avatar: obj.avatar,
            rcode: obj.rcode,
            password: obj.password
        },
    })
}
function user_data() {
    return _axios({
        url: '/info',
        headers: { token: gettoken() }
    })
}

function getsubjectlist(obj) {
    return _axios({
        url: '/subject/list',
        headers: { token: gettoken() },
        params: {
            name: obj.name,
            page: obj.page,
            limit: obj.limit,
            rid: obj.rid,
            username: obj.username,
            status: obj.status
        }
    })
}
export { plogin, SMS_verification, register, user_data, getsubjectlist }