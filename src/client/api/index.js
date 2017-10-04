import axios from 'axios'

export function login (username, password) {
  return axios.post('/api/login', { username, password })
  .then(res => res.data)
}

export function regist (username, password) {
  return axios.post('/api/regist', { username, password })
  .then(res => res.data)
}
