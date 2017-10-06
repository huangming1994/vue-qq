import { fetchAPI } from './request'

export async function login(username, password) {
  const result = await fetchAPI('/api/login', { username, password })
  return result
}

export async function regist(username, password) {
  const result = await fetchAPI('/api/regist', { username, password })
  return result
}
