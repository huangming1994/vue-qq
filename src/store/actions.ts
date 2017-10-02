import { ActionTree } from 'vuex'
import { State } from './state'

const actions: ActionTree<State, State> = {
  SET_ACCOUNT: ({ commit }, account: string) => commit('SET_ACCOUNT', account),
  SET_PASSWORD: ({ commit }, password: string) => commit('SET_PASSWORD', password)
}

export default actions
