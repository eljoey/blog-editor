import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Blogs from './Blogs'
import CreateBlog from './CreateBlog'

const Main = ({ blogs }) => {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <Home blogs={blogs} />} />
        <Route path="/blogs" render={() => <Blogs blogs={blogs} />} />
        <Route to="/create" component={CreateBlog} />
      </Switch>
    </main>
  )
}

export default Main
