import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    token: '',
    cartarry: JSON.parse(localStorage.getItem('cartarry')) || [], //储存添加的数据
  },
  mutations: {
    settoken(state, token) {
      state.token = token;
    },
    //添加商品到购物车
    addcart(state, tag) {
      //判断cartarry有没有这个商品 有就商品数量加一 没有就加入这个商品
      // 如果有会返回整个对象
      let goos = state.cartarry.find(v => v.name == tag.label)
      if (goos) {
        goos.conu += 1
      } else {
        state.cartarry.push({ name: tag.label, conu: 1 })
      }
    },
    //购物车减少添加
    removeCate(state, index) {
      if (state.cartarry[index].conu > 1) {
        state.cartarry[index].conu--
      } else {
        if (window.confirm('确认要移除商品吗？')) {
          state.cartarry.splice(index, 1)
        }
      }
    },
    addCates(state, index) {
      state.cartarry[index].conu++;
    },
    //清空购物车
    qinko(state) {
      if (window.confirm('确认要清空购物车吗？')) {
        state.cartarry=[];
      }

    }
  },
  actions: {
  },
  // 计算属性
  getters: {
    //写一个计算方法
    countsum: state => {
      let num = 0;
      state.cartarry.forEach(v => {
        num += v.conu
      })
      return num;
    }
  },
  modules: {

  }
})
// Vuex加本地存储加JavaScript加密escape()和unescape()数据持有化
// 监听每次调用mutations对象 然后我们可以处理 把数据存储到localStorage
store.subscribe((mutations, state) => {
  localStorage.setItem('cartarry', JSON.stringify(state.cartarry))
})
export default store
