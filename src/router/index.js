import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../views/home/home')
const profile = () => import('../views/profile/profile')
// const category = () => import('../views/category/category')
const hotss = () => import('../views/hotss/hotss')
// const detail = () => import('../views/detail/detail')
Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/hotss',
        component: hotss
    },
    {
        path: '/profile/:mvid',
        component: profile
    },
    //   {
    //     path: '/category',:mvid
    //     component: category
    //   },
    //   {
    //     path: '/cart',
    //     component: cart
    //   },
    //   {
    //     path: '/detail/:iid',
    //     component: detail
    //   }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router