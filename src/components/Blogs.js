import React from 'react'
import { Switch, Route } from 'react-router-dom'
import EditBlog from './EditBlog'

const Blogs = ({ blogs }) => {
  return (
    <Switch>
      <Route to="/blogs/:id" component={EditBlog} />
    </Switch>
  )
}

export default Blogs
