import React, { useState, useEffect } from 'react'
import './App.css'
import Login from './components/Login'
import Header from './components/Header'
import Main from './components/Main'
import blogService from './services/blogs'

function App() {
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [blogs])

  useEffect(() => {
    async function fetchBlogs() {
      const res = await blogService.getBlogs()
      setBlogs(res.blogs)
    }

    fetchBlogs()
  }, [user])

  const loginCheck = () => {
    if (user) {
      return (
        <>
          <Header />
          <Main blogs={blogs} />
        </>
      )
    } else {
      return (
        <Login setUser={setUser} message={message} setMessage={setMessage} />
      )
    }
  }

  return <>{loginCheck()}</>
}

export default App
