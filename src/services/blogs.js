import axios from 'axios'

const baseUrl = 'https://jh-blog-api.herokuapp.com/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getBlogs = async () => {
  const blogs = await axios.get(baseUrl)
  return blogs.data
}

const getBlogId = async id => {
  const blog = await axios.get(`${baseUrl}/${id}`)
  return blog.data
}

export default {
  setToken,
  getBlogs,
  getBlogId
}
