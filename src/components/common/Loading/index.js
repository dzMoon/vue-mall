import LoadingComponent from './Loading.vue'

let LoadingTip = {
    installed: false,
    install(Vue) {
        if (LoadingTip.installed) return;
        Vue.prototype.$loading = (flag = true) => {
            if (flag === false) {
                if (document.querySelector('#vue-loading')) {
                    let tpl = document.querySelector('#vue-loading')
                    document.body.removeChild(tpl)
                }
                return;
            }
            // 如果页面有loading则不继续执行

            if (document.querySelector('#vue-loading')) return

            // 1、创建构造器，定义loading模板

            let Loading = Vue.extend(LoadingComponent)

            // 2、创建实例，挂载到文档以后的地方

            let tpl = new Loading().$mount().$el

            // 3、把创建的实例添加到body中

            document.body.appendChild(tpl)

            // 阻止遮罩滑动

            document.querySelector('#vue-loading').addEventListener('touchmove', function (e) {
                e.stopPropagation()
                e.preventDefault()
            })
            Loading.installed = true
        }

    }
}

export default LoadingTip
