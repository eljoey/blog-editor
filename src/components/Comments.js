import React from 'react'
import Delete from './Delete'

const Comments = ({ comments }) => {
  const style = {
    display: 'flex'
  }

  const renderComments = () => {
    if (!comments) {
      return <div>There are no comments</div>
    } else {
      return comments.map(comment => {
        return (
          <div style={style} key={comment._id}>
            <div>{comment.text}</div>
            <Delete type={'comment'} id={comment._id} />
          </div>
        )
      })
    }
  }

  return <div>{renderComments()}</div>
}

export default Comments
