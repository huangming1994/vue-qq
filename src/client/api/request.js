import axios from 'axios'
import store from '../store'

export async function fetchAPI(url, params) {
  store.commit('START_LOADING')
  const response = await axios.post(url, params)
  setTimeout(() => store.commit('FINISH_LOADING'), 2000)
  return response.data
}
