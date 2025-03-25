import React from 'react'
import NavBar from './NavBar'
import Menu from '../menu/Menu'

const Navigation = () => {
  return (
    <div className='bg-gray-100 flex'> 
        <NavBar/>
        <Menu/>
    </div>
  )
}

export default Navigation
