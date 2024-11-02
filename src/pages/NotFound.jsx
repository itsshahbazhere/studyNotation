import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col bg-white h-screen w-screen justify-center items-center select-none'>
      <div className='relative flex flex-col justify-center items-center'>
        <h1 className='text-8xl font-thin tracking-wide'>OOPS!</h1>
        <p className='bg-white p-1 text-xs absolute bottom-1.5 text-center'>404 - THE PAGE CAN'T BE FOUND</p>
      </div>
      <NavLink to="/" className="text-white text-xs mt-5 uppercase bg-orange-500 px-2 py-1 rounded-sm">Go To HomePage</NavLink>
    </div>
  )
}

export default NotFound
