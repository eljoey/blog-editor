import React from 'react'
import { useField } from '../hooks/index'
import Input from './FormHelpers/Input'
import TextArea from './FormHelpers/TextArea'
import { withRouter } from 'react-router-dom'
import blogService from '../services/blogs'

const CreateBlog = props => {
  const title = useField('text')
  const content = useField('textarea')

  const handleSubmit = async e => {
    e.preventDefault()
    const blog = {
      title: title.value,
      content: content.value,
      timestamp: Date.now()
    }

    await blogService.createBlog(blog)

    props.history.push('/')
  }

  const style = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '75%'
  }

  return (
    <form style={style} onSubmit={handleSubmit}>
      <Input {...title} />
      <TextArea {...content} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default withRouter(CreateBlog)
