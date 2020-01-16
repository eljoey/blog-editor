import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({ blogs }) => {
  const blogList = () => {
    if (blogs === undefined) {
      return <div>No Blogs!</div>
    } else {
      return blogs.map(blog => (
        <div>
          <span>- </span>
          <Link to={`/blogs/${blog._id}`}>
            {' '}
            {blog.title} ({blog.comments.length} comments){' '}
          </Link>
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
