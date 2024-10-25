import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col'>
      <p>Error 404</p>
      <NavLink to="/" className="text-blue-500">Go To HomePage</NavLink>
    </div>
  )
}

export default NotFound
