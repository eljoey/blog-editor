import React from 'react'

const Comments = ({ comments }) => {
  const renderComments = () => {
    if (!comments) {
      return <div>There are no comments</div>
    } else {
      return comments.map(comment => {
        return <div key={comment._id}>{comment.text}</div>
      })
    }
  }

  return <div>{renderComments()}</div>
}

export default Comments
