import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        if(username.trim() === "" || password.trim() === ""){
            alert('Some values are missing');
            setUser("")
            setPassword("")
            return;
        };
        setUser({username,password})

    }

  return (
    <div className='mx-auto w-[35%] flex flex-col bg-gray-900 px-4 py-3 rounded-lg mb-5 text-center gap-3'>
      <h2 className='text-2xl text-blue-300'>Login</h2>
        <input
            className='p-2 focus:outline-none- focus:border-none'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text" 
            placeholder='username' 
        />
        <input 
            className='p-2 focus:outline-none- focus:border-none'
            value={password}
            type='password'
            placeholder='password' 
            onChange={(e) => setPassword(e.target.value)}
        />

        <button 
            className='bg-blue-800 px-2 py-1 rounded-lg cursor-pointer transition-all duration-500 hover:bg-blue-600'
            onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login