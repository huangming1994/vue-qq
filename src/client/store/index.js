import Vue from 'vue'
import Vuex from 'vuex'
import loginPage from './modules/loginPage'
import loading from './modules/loading'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const plugins = process.env.NODE_ENV !== 'production' ? [createLogger()] : []

export default new Vuex.Store({
  modules: {
    loginPage,
    loading
  },
  plugins
})
