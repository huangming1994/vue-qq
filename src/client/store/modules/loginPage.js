import Vue from 'vue'
import { login } from '../../api'

const state = {
  userInfo: {}
}

const mutations = {
  SET_USER_INFO (state, userInfo) {
    Vue.set(state, 'userInfo', userInfo)
  }
}

const actions = {
  SET_USER_INFO ({ commit }, { username, password }) {
    login(username, password)
    .then(userInfo => commit('SET_USER_INFO', userInfo))
  }
}

export default {
  state,
  mutations,
  actions
}
