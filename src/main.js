import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'

import Request from 'service/service' // axios 请求封装
import Loading from "@/components/common/Loading" // 等待框
import Toast from "@/components/common/Toast" // 等待框
import Alert from "@/components/common/Alert" // alert框
import Confirm from "@/components/common/Confirm" // confirm框
import Storage from '@/common/Storage' //h5本地存储功能
import filter from '@/common/filter' // 封装过滤器
import Ant from 'ant-design-vue'
import 'assets/css/antd.css'
import ThDesign from 'th-design-ui'

Vue.use(Loading) // 注册Loading组件
Vue.use(Alert) // 注册Alert组件
Vue.use(Toast) // 注册Toast组件
Vue.use(Confirm) // 注册Confirm组件
Vue.use(Request) // 注册axios请求方法
Vue.use(Storage) // 注册本地存储功能

Vue.use(ThDesign) // 注册 th-design-ui 组件库
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})





Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
