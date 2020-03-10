import cookies from 'cookie_js'

export function getToken () {
  return cookies.get('token')
}

export function setToken (token) {
  cookies.set('token', token)
}

export function removeToken () {
  cookies.remove('token')
}

export function getUsername () {
  return cookies.get('username')
}

export function setUsername (username) {
  cookies.set('username', username)
}

export function removeUsername () {
  cookies.remove('username')
}
