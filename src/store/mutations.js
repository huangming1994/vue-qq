import Vue from 'vue'

const mutations = {
  SET_ACCOUNT: (state, account) => Vue.set(state, 'account', account),
  SET_PASSWORD: (state, password) => Vue.set(state, 'password', password)
}

export default mutations
