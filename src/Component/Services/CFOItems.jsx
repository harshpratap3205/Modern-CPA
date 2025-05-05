import React, { useRef, useState } from 'react'
import {motion, useInView} from 'motion/react'
const CFOItems = ({item}) => {
  // console.log(item)
    const {type,description,example,image}=item
    const myref=useRef(false)
    const isInView=useInView(myref ,{ once: true })
    // console.log(isInView)
    const [shadow,setShadow]=useState(false)

  return (
   <div ref={myref}>
     <motion.div 
    
    initial={{
        y:200,
        opacity:0 

      }} animate={isInView? {
        y:0
        ,opacity:1
      }:{}}
      transition={{
    type:"anticipate",
     duration:.5,
        delay:0.1
      }}
      
      onMouseEnter={()=>{setShadow(true)}} 
      onMouseLeave={()=>{setShadow(false)}}
    className={`max-w-80 rounded-xl border-2 min-h-95 hover:scale-105 p-2 ${shadow?"customshadow":""}  `}>
      <div className=''>
        <img className=' w-80 h-50 rounded' src={image} alt="" />
      </div>
      <div >
        <h1  className='text-xl mt-1 flex gap-0.5'><p className='font-semibold'>Type:</p>{type}</h1>
      </div>
      <div>
        <h1 className='text-sl flex gap-1  '><span className=' font-semibold  '>Example:</span> {example}</h1>
      </div>
      <div>
        <h1 className='text-sm'> <span className=' font-semibold  '>Description:</span>{description}</h1>
      </div>
    </motion.div>
   </div>
  )
}

export default CFOItems
