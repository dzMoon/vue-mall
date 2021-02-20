import axios from 'axios'
import configuration from '@/configuration'
import Vue from 'vue'


axios.defaults.baseURL = configuration.global.serverPath //设置请求地址
axios.defaults.timeout = configuration.ajaxTimeout * 1000 // 设置超市时间

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
axios.defaults.headers.post['Accept'] = 'application/json, text/javascript'
axios.defaults.withCredentials = true // 默认携带cookies

let isLastReq;

/* 请求拦截器 */
axios.interceptors.response.use(res => {
    let response = res.data;
    let flag = configuration.filters.some(val => val.error_no === response.error_no)
    if (flag) {
        Vue.$router.replace({path: configuration.loginPage.name})
        return
    }
    if (!isLastReq) Vue.$loading.hide()
    return response
}, err => {
    if (!isLastReq) Vue.prototype.$loading.hide()
    Vue.prototype.$alert(err.message)
})

/* 响应拦截器*/
axios.interceptors.response.use(res => {
    let response = res.data;
    let flag = configuration.filters.some(val => val.error_no === response.error_no)
    if (flag) {
        /* 如果返回信息为登录拦截， 则跳转登录页面 */
        Vue.prototype.$loading.hide()
        Vue.prototype.$router.replace({path: configuration.loginPage.name})
        return
    }
    if(!isLastReq) Vue.prototype.$loading.hide()
    return response
}, err => {
    Vue.prototype.$loading.hide()
    if (err.message.include('timeout')) {
        Vue.prototype.$alert(configuration.timeoutMsg)
        return
    }
    Vue.prototype.$alert(err.timeoutMsg)
})
const Service = {
    installed: false,
    install(Vue) {
        if (Service.installed) return
        Vue.prototype.$request = (paraMap, ctrlParam) => {
            /**
             * 加密
             * */
            let params = Object.assign({}, paraMap)


            /**
             * 设置初始配置
             * */
            let ctrlParams = {isShowWait: true, isLastReq: true}
            ctrlParam && Object.assign(ctrlParam, ctrlParams)

            /**
             * 是否此次请求显示加载框
             * @params isShowWait默认true
             * */
            if (!ctrlParam || ctrlParam.isShowWait) Vue.prototype.$loading.show()

            /**
             * 是否此次请求结束仍显示加载框
             * @params isLastReq默认true
             * */
            /* 是否是最后一次请求 默认true，将isLastReq设为false*/
            isLastReq = ctrlParam && ctrlParam.isLastReq

            /**
             * 返回结果为promise对象，可直接使用
             * */
            return axios({
                method: 'post',
                params: params,
                url: configuration.global.serverPath
            })
        }
        Service.installed = true
    }
}
export default Service


