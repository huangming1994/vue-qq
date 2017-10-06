import Vue from 'vue'
import { login } from '../../api'

const state = {
  userInfo: {}
}

const mutations = {
  SET_USER_INFO(state, userInfo) {
    Vue.set(state, 'userInfo', userInfo)
  }
}

const actions = {
  SET_USER_INFO: async function({ commit }, { username, password }) {
    const userInfo = await login(username, password)
    commit('SET_USER_INFO', userInfo)
  }
}

export default {
  state,
  mutations,
  actions
}
