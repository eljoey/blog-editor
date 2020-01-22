import React from 'react'
import blogService from '../services/blogs'

const Delete = ({ type, id }) => {
  const handleClick = async e => {
    e.preventDefault()
    if (type === 'blog') {
      await blogService.deleteBlog(id)
    } else {
      await blogService.deleteComment(id)
    }
  }

  const style = {
    paddingLeft: '25px'
  }

  return (
    <div style={style}>
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default Delete
