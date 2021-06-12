import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartusb: [],
    sub: 10
  },
  mutations: {
    addCart(state, payload) {

      state.cartusb = payload
      console.log(state.cartusb)
    }
  },
  actions: {
  },
  modules: {
  },
  getters
})
