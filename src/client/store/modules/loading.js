import Vue from 'vue'
const state = {
  loadingQueue: 0
}

const getters = {
  loadingQueue: state => state.loadingQueue
}

const mutations = {
  START_LOADING(state) {
    Vue.set(state, 'loadingQueue', state.loadingQueue + 1)
  },
  FINISH_LOADING(state) {
    Vue.set(state, 'loadingQueue', Math.max(0, state.loadingQueue - 1))
  }
}

export default {
  state,
  getters,
  mutations
}
