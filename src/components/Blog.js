import React, { useState, useEffect } from 'react'
import blogService from '../services/blogs'
import Comments from './Comments'

const Blog = props => {
  const [curBlog, setCurBlog] = useState({})

  const blogId = props.location.pathname.split('/blogs/')[1]

  useEffect(() => {
    async function getBlog() {
      const res = await blogService.getBlogId(blogId)
      setCurBlog(res)
    }
    getBlog()
  }, [blogId])

  const style = {
    display: 'flex',
    flexDirection: 'column'
  }

  const handleChange = e => {
    const value = e.target.value
    console.log(e.target.name)
    setCurBlog({
      ...curBlog,
      [e.target.name]: value
    })
  }

  return (
    <div style={style}>
      <input
        type="text"
        name="title"
        value={curBlog.title || ''}
        onChange={handleChange}
      />
      <textarea
        type="textarea"
        name="content"
        value={curBlog.content || ''}
        onChange={handleChange}
      />
      <Comments comments={curBlog.comments} />
    </div>
  )
}

export default Blog
