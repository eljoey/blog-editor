import React, { useState, useEffect } from 'react'
import blogService from '../services/blogs'
import Comments from './Comments'
import Input from './FormHelpers/Input'
import TextArea from './FormHelpers/TextArea'
import { useField } from '../hooks/index'
import { withRouter } from 'react-router-dom'

const EditBlog = props => {
  const [curBlog, setCurBlog] = useState({})
  const title = useField('text')
  const content = useField('textarea')
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

  const handleSubmit = async e => {
    e.preventDefault()
    if (title.value === '') title.value = curBlog.title
    if (content.value === '') content.value = curBlog.content

    const editedBlog = {
      ...curBlog,
      title: title.value,
      content: content.value
    }

    const updatedBlog = await blogService.editBlog(blogId, editedBlog)

    const newBlog = {
      ...curBlog,
      title: updatedBlog.title,
      content: updatedBlog.content
    }

    setCurBlog(newBlog)

    props.history.push('/')
  }

  return (
    <div>
      <form style={style} onSubmit={handleSubmit}>
        <Input
          value={curBlog.title}
          type={title.type}
          onChange={title.onChange}
        />
        <TextArea value={curBlog.content} onChange={content.onChange} />

        <button type="submit">submit</button>
      </form>
      <Comments comments={curBlog.comments} />
    </div>
  )
}

export default withRouter(EditBlog)
