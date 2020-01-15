import axios from 'axios'

const baseUrl = 'https://jh-blog-api.herokuapp.com/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

export default {
  setToken
}
