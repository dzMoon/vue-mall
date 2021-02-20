import ConfirmComponent from "./Confirm.vue"

let Confirm = {
    installed: false,
    install(Vue) {
        if (Confirm.installed) return
        Vue.prototype.$confirm = (mess, okFunc, cancelFunc, okBtn, cancelBtn,) => {
            if (document.querySelector('#vue-confirm')) return
            let ConfirmCom = Vue.extend(ConfirmComponent)
            let ConfirmComObj = new ConfirmCom()
            ConfirmComObj.message = mess;
            ConfirmComObj.show = true;
            ConfirmComObj['okBtn'] = okBtn;
            ConfirmComObj['cancelBtn'] = cancelBtn;
            ConfirmComObj['okFunc'] = okFunc;
            ConfirmComObj['cancelFunc'] = cancelFunc;

            let tpl = ConfirmComObj.$mount().$el;
            document.body.appendChild(tpl)
            Confirm.installed = true
        }
    }
}
export default Confirm
