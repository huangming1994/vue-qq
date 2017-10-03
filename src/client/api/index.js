import axios from 'axios'

export function login (account, password) {
  axios.post('/api/login', { account, password })
  .then(res => res.data)
}

export function regist (account, password) {
  axios.post('/api/regist', { account, password })
  .then(res => res.data)
}
