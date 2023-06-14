const TOKEN_KEY = 'aaaaa'

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}
const setToken = (token) => {
  return localStorage.setItem(TOKEN_KEY, token)
}
const clearToken = () => {
  return localStorage.removeItem(TOKEN_KEY)
}

// const getToken = () => localStorage.getItem(TOKEN_KEY)
// const setToken = token => localStorage.setItem(TOKEN_KEY, token)
// const clearToken = () => localStorage.removeItem(TOKEN_KEY)


export { getToken, setToken, clearToken }