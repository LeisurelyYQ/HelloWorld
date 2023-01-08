import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:{
      cityId: 440300,
      name: "深圳",
      pinyin: "shenzhen",
      isHot: 1
    }
  },
  getters: {
  },
  mutations: {
    changeCity(state,xcsq){
      state.city = xcsq
    }
  },
  actions: {
  },
  modules: {
  }
})
