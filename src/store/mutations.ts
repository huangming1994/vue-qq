import Vue from 'vue'
import { MutationTree } from 'vuex'
import { State } from './state'

const mutations: MutationTree<State> = {
  SET_ACCOUNT: (state: State, account: string) => Vue.set(state, 'account', account),
  SET_PASSWORD: (state: State, password: string) => Vue.set(state, 'password', password)
}

export default mutations
