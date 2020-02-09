import Vue from 'vue'
import VueRouter from 'vue-router'
import Logo from '../views/Logo.vue'
const Register = () => import('../views/Register.vue')
const Index = () => import('../views/Index.vue')
const Taber = () => import('../components/Taber.vue')
const Cart = () => import('../components/Cart.vue')
const Classfig = () => import('../components/Classfig.vue')
const Wode = () => import('../components/Wode.vue')
const Seek = () => import('../components/Seek.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Taber
  },
  {
    path: '/taber',
    name: 'taber',
    component: Taber,
    children: [
      {
        path: '/taber/index',
        name: 'index',
        component: Index
      }, {
        path: '/taber/cart',
        name: 'cart',
        meta: {
          rediu: true
        },//当有这个字段的时候，就认定是要有登录权限的
        component: Cart
      }, {
        path: '/taber/seek',
        name: 'seek',
        component: Seek
      }, {
        path: '/taber/classfig',
        name: 'classfig',
        component: Classfig
      }, {
        path: '/taber/wode',
        name: 'wode',
        meta: {
          rediu: true
        },//当有这个字段的时候，就认定是要有登录权限的
        component: Wode
      }, ,
      {
        path: '/logo',
        name: 'logo',
        component: Logo
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
