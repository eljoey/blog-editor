import axios from 'axios'

const baseUrl = 'https://jh-blog-api.herokuapp.com/login'

const login = async credentials => {
  const res = await axios.post(baseUrl, credentials)
  return res.data
}

export default { login }
