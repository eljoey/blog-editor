import React, { useState } from 'react'
import { useField } from '../hooks/index'
import Input from './FormHelpers/Input'
import { withRouter } from 'react-router-dom'
import blogService from '../services/blogs'
import { Editor } from '@tinymce/tinymce-react'

require('dotenv').config()

const CreateBlog = props => {
  const [editorContent, setEditorContent] = useState('')
  const title = useField('text')
  const editorAPIKey = process.env.REACT_APP_EDITOR_API_KEY

  const handleSubmit = async e => {
    e.preventDefault()
    const blog = {
      title: title.value,
      content: editorContent,
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
      <Input {...title} placeholder="Add Title" />
      <Editor
        apiKey={editorAPIKey}
        init={{
          height: 500,
          menubar: false
        }}
        initialValue=""
        onEditorChange={setEditorContent}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default withRouter(CreateBlog)
