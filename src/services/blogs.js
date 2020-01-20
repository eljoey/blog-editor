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

const editBlog = async (id, editedBlog) => {
  const config = {
    headers: {
      Authorization: token,
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
  const updatedBlog = await axios.put(`${baseUrl}/${id}`, editedBlog, config)
  return updatedBlog.data
}

export default {
  setToken,
  getBlogs,
  getBlogId,
  editBlog
}
