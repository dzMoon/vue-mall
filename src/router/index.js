import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import configuration from '@/configuration'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('views/Home/Home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/Login/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/* 页面跳转前*/
router.beforeEach((to, from, next) => {
  next();
  // ...
})
/* 页面跳转后 */
router.afterEach((to, from) => {
  // ...
})
export default router
