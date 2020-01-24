import React, { useState, useEffect } from 'react'
import blogService from '../services/blogs'
import Comments from './Comments'
import Input from './FormHelpers/Input'
import { useField } from '../hooks/index'
import { withRouter } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react'

require('dotenv').config()

const EditBlog = props => {
  const [curBlog, setCurBlog] = useState({})
  const [editorContent, setEditorContent] = useState('')

  // custom text input hook
  const title = useField('text')

  const editorAPIKey = process.env.REACT_APP_EDITOR_API_KEY
  const blogId = props.location.pathname.split('/blogs/')[1]

  useEffect(() => {
    async function getBlog() {
      const res = await blogService.getBlogId(blogId)
      setCurBlog(res)
    }
    getBlog()
  }, [blogId])

  // updates editor with blog content
  useEffect(() => {
    setEditorContent(curBlog.content)
  }, [curBlog])

  const handleSubmit = async e => {
    e.preventDefault()
    if (title.value === '') title.value = curBlog.title

    const editedBlog = {
      ...curBlog,
      title: title.value,
      content: editorContent
    }

    await blogService.editBlog(blogId, editedBlog)

    props.history.push('/')
  }

  const style = {
    display: 'flex',
    flexDirection: 'column'
  }

  return (
    <div>
      <form style={style} onSubmit={handleSubmit}>
        <Input
          value={curBlog.title}
          type={title.type}
          onChange={title.onChange}
        />
        <Editor
          apiKey={editorAPIKey}
          initialValue={editorContent}
          init={{
            height: 500,
            menubar: false
          }}
          onEditorChange={setEditorContent}
        />
        <button type="submit">submit</button>
      </form>
      <Comments comments={curBlog.comments} />
    </div>
  )
}

export default withRouter(EditBlog)
