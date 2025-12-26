import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <div className='mt-10 p-2'>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App