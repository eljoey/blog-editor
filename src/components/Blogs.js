import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Blog from './Blog'

const Blogs = () => {
  return (
    <Switch>
      <Route to="/blogs/:id" component={Blog} />
    </Switch>
  )
}

export default Blogs
