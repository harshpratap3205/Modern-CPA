import React from 'react'
import { useNavigate } from 'react-router-dom'

const StickyScreen = () => {
    const navigate= useNavigate()
  return (
    <div 
    className='flex justify-around items-center fixed z-99 bottom-0 h-15 w-full border-t-2  bg-white'
    >
     <div className='flex gap-15 fixed z-99 left-30 bottom-2  text-2xl '>
        <h1 onClick={()=>{navigate('./whatwedo')}} className='text-white hover:scale-110 cursor-pointer bg-[#4f0333] px-3 py-1 rounded'>What we do</h1>
        <h1 onClick={()=>{navigate('./knowus')}} className='text-white hover:scale-110 cursor-pointer bg-[#4f0333] px-3 py-1 rounded'>Know us</h1>
     </div>
     <div className='flex gap-15 fixed z-99 right-30 bottom-2 text-2xl  '>
        <h1 onClick={()=>{navigate('/login')}} className='text-white hover:scale-110 cursor-pointer bg-[#4f0333] px-3  py-1 rounded'>Login</h1>
        <h1  onClick={()=>{navigate('/signup')}} className='text-white hover:scale-110  cursor-pointer bg-[#4f0333] px-3 py-1 rounded'>Sign up</h1>
     </div>
    </div>
  )
}

export default StickyScreen
