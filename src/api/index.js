import axios from 'axios'
let _axios = axios.create({
    baseURL: process.env.VUE_APP_USER,
    withCredentials: true,
})
_axios.interceptors.response.use(function (config) {
    console.log(config);
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
export { plogin, SMS_verification, register }