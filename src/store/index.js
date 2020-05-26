import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSwedish: true,
    showMobileNav: false
  },
  mutations:{
    setIsSwedish(state, value){
      state.isSwedish = value;
    },
    mobileNavToggle(state){
      if(state.showMobileNav == false) {
        state.showMobileNav = true;
      } else {
        state.showMobileNav = false;
    }
  }
  }
})