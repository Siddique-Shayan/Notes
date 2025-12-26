import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContext)

  if(!user) return <h1 className='mx-auto w-[35%] bg-gray-900 px-4 py-3 rounded-lg'>No Active User</h1>
    
  return (
    <div className='mx-auto w-[35%] flex flex-col bg-gray-900 px-4 py-3 rounded-lg mb-5 text-center gap-3'>
      <h1>Welcome {user.username}👋👋</h1>
    </div>
  )
}

export default Profile