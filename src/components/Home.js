import React from 'react'
import { Link } from 'react-router-dom'
import Delete from './Delete'

const Home = ({ blogs }) => {
  const style = {
    display: 'flex'
  }

  const blogList = () => {
    if (blogs === undefined) {
      return <div>No Blogs!</div>
    } else {
      return blogs.map(blog => (
        <div style={style} key={blog._id}>
          <span>- </span>
          <Link to={`/blogs/${blog._id}`}>
            {' '}
            {blog.title} ({blog.comments.length} comments){' '}
          </Link>
          <Delete type={'blog'} id={blog._id} />
        </div>
      ))
    }
  }
  return (
    <>
      <h1>List of Blogs</h1>
      <div>{blogList()}</div>
    </>
  )
}

export default Home
