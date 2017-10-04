import Vue from 'vue'
import Vuex from 'vuex'
import loginPage from './modules/loginPage'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loginPage
  }
})
