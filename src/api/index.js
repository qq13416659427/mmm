import axios from 'axios'

function plogin() {
    return axios({

    })
}
function SMS_verification() {
    return axios({
        url: process.env.VUE_APP_USER + '/captcha?type=sendsms'
    })
}
export { plogin, SMS_verification }