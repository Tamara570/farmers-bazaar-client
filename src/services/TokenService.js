import { TOKEN_KEY } from '../config'


const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(TOKEN_KEY, token)
  },
  getAuthToken() {
    return window.localStorage.getItem(TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
}

export default TokenService