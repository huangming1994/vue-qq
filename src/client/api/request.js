export function request (commit, requestPromise) {
  commit('START_LOADING')
  return requestPromise
  .then(() => setTimeout(() => commit('FINISH_LOADING'), 2000))
}
