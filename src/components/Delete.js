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

  return (
    <div>
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default Delete
