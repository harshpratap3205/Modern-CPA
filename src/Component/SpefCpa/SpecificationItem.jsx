import React, { useRef, useState } from 'react'

import { motion, useInView } from "motion/react"
import { useNavigate } from 'react-router-dom'



const SpecificationItem = ({item,}) => {
    const [shadow,setShadow]=useState(false)
    const navigate=useNavigate()
   
    // console.log(item)
    const {title,icon,description}=item
  return (
    <div className=' mt-4 text-white rounded-xl'>
      <div  
     onMouseEnter={()=>{setShadow(true)}} 
     onMouseLeave={()=>{setShadow(false)}}
      className={` ${shadow?"customshadow scale-105":""}   text-black  border-2 h-110 rounded flex flex-col items-center justify-between p-2 min-h-80 min-w-70`}>
        <h1 className=' rounded w-75 h-50  '>      <img className='h-50 w-80' src={icon} alt="icon"/></h1>
        <h1 className='p-1 mt-2 text-xl flex'><p className='text-[black] mr-1'>Title:</p> {title}</h1>
        <h1 className='text-[14px] px-2'> Description: {description}</h1>
        <div className='flex justify-center mt-3'><h1  className='bg-[#4f0333] hover:scale-108 px-2 py-1 rounded text-xl text-white'>Know more </h1></div>
      </div>
    </div>
  )
}

export default SpecificationItem
