import React from 'react'
import profile from '../../images/profile.png'
const Header = () => {
  return (
    <>
    <header className='flex justify-between items-center p-4border-b-2 max-w-7xl mx-auto'>
    <h1 className='text-4xl text-red-300 font-semibold'>Knowledge cafe</h1>
    <img src={profile} alt=""/>
    </header>
 
    </>
  )
}

export default Header
