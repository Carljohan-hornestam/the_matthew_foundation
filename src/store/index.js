import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSwedish: true
  },
  mutations:{
    setIsSwedish(state, value){
      state.isSwedish = value;
    }
  }
})