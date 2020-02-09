import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import setaxios from './setaxios'
setaxios()

import Axios from 'axios'
//路由拦截 路由前值钩子
// to:哪里来,from：去哪里,next：继续往下执行
router.beforeEach((to, from, next) => {
  //无论刷新还是跳转都是先进入这里
  // 先把token存入vuex
  store.commit('settoken', localStorage.getItem('token'));
  // 判断有路由有没有设置meta.rediu
  if (to.meta.rediu) {
    //有则进入
    // 判断有有没有token
    if (store.state.token) {
      //如果存在跳转
      next();
    } else {
      //没有跳入登入页面 然后把当前要进入的路由也带过去
      alert('请登录后操作！')
      next({
        path: '/logo',
        //把路由带去
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next();
  }
});
Vue.prototype.$axios = Axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
