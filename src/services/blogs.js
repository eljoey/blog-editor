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
      Authorization: token
    }
  }
  const updatedBlog = await axios.put(`${baseUrl}/${id}`, editedBlog, config)
  return updatedBlog.data
}

const createBlog = async blog => {
  const config = {
    headers: {
      Authorization: token
    }
  }

  const createdBlog = await axios.post(`${baseUrl}/create`, blog, config)
  return createdBlog.data
}

export default {
  setToken,
  getBlogs,
  getBlogId,
  editBlog,
  createBlog
}
