import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false // 导航栏是否水平收起菜单
  },
  mutations: {
    SET_IS_COLLAPSE (state) {
      state.isCollapse = !state.isCollapse
      sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse))
    }
  },
  actions: {
  }
})
