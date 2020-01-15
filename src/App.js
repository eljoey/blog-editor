import React, { useState, useEffect } from 'react'
import './App.css'
import Login from './components/Login'

function App() {
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      setUser(user)
    }
  }, [])

  const loginCheck = () => {
    if (user) {
      return <div>THeres a user</div>
    } else {
      return (
        <Login setUser={setUser} message={message} setMessage={setMessage} />
      )
    }
  }

  return <>{loginCheck()}</>
}

export default App
