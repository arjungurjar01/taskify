import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

function Header() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <header className='bg-gradient-to-r from-blue-500 to-blue-600 shadow-md'>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-white'>Task Management App</h1>
        <div className='flex items-center space-x-4'>
          <span className='text-white'>Hello, {currentUser.firstName}!</span>
          <button 
            onClick={logout} 
            className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out'
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

