import ToastComponent from "./Toast";

const Toast = {
    installed: false,
    install(Vue) {
        if(Toast.installed) return
        Vue.prototype.$toast = (message='', timeout=2000) => {
            if(document.querySelector("#vue-toast")) return
            const ToastVue = Vue.extend(ToastComponent) //生成vue对象
            const toastVue = new ToastVue()
            const tpl = toastVue.$mount().$el // 生成dom对象
            toastVue.message = message
            document.body.appendChild(tpl)
            setTimeout( () => {
                document.body.removeChild(document.querySelector("#vue-toast"))
            }, timeout)
        }
        Toast.installed = false
    }
}
export default Toast
