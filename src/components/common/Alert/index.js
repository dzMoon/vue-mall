import AlertComponent from "./Alert.vue"
let Alert = {
    installed: false,
    install(Vue) {
        if(Alert.installed) return
        Vue.prototype.$alert = (mess, okFunc, okBtn) => {
            if (document.querySelector('#vue-alert')) return
            let AlertCom = Vue.extend(AlertComponent)
            let AlertComObj = new AlertCom()
            AlertComObj.message = mess;
            AlertComObj.show = true;
            AlertComObj['okFunc'] = okFunc;
            AlertComObj['okBtn'] = okBtn;
            let tpl = AlertComObj.$mount().$el;
            document.body.appendChild(tpl)
            Alert.installed = true
        }
    }
}
export default Alert
