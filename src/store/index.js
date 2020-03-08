import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false // 导航栏是否水平收起菜单
  },
  mutations: {
    SET_IS_COLLAPSE (state, value) {
      state.isCollapse = value
    }
  },
  actions: {
  },
  modules: {
  }
})
