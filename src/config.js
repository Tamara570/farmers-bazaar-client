let apiPath;
let tokenKey;

if (process.env.NODE_ENV === 'production') {
  apiPath = 'https://farmers-bazaar-server.herokuapp.com/'
  tokenKey = ''
} else {
  apiPath = 'http://localhost:8000/api'
  tokenKey = 'bazaar-dev-auth-token'
}

let API_ENDPOINT = apiPath;
let TOKEN_KEY = tokenKey;

export  {
  API_ENDPOINT,
  TOKEN_KEY
}