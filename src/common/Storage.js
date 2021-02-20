/**
 * 本地存储功能
 * */
export default {
    install(Vue) {
        /**
         * sesstionStroage 信息存储
         * @param key String
         * @param value String || Object || Array ||Number
         * */
        Vue.prototype.$setSStorage = (key, value) => {

        }
        /**
         * sesstionStroage 信息获取
         * @param key String
         * */
        Vue.prototype.$getSStorage = (key) => {

        }

        /**
         * sesstionStroage 信息清空
         * @param key String || ""
         * */
        Vue.prototype.$clearSStorage = (key) => {

        }

        /**
         * localStroage 信息存储
         * @param key String
         * @param value String || Object || Array ||Number
         * */
        Vue.prototype.$setLStorage = (key, value) => {

        }
        /**
         * localStroage 信息获取
         * @param key String
         * */
        Vue.prototype.$getLStorage = (key) => {

        }

        /**
         * localStroage 信息清空
         * @param key String || ""
         * */
        Vue.prototype.$clearLStorage = (key) => {

        }
    }
}
