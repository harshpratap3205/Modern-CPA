import { useInView } from 'motion/react'
import React, { useRef, useState } from 'react'
import {motion} from 'motion/react'

const PayrollServicesItem = ({item}) => {
    const {type,description,example,image}=item
    const myref=useRef(false)
    const ref=useRef(false)
    const isInView=useInView(myref)
    const isInViewLast=useInView(ref)
    // console.log(isInView)
    const [shadow,setShadow]=useState(false)
  return (
    <div >
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
     duration:0.5,
        delay:0.1
      }}
      ref={myref}
      
      onMouseEnter={()=>{setShadow(true)}} 
      onMouseLeave={()=>{setShadow(false)}}
    // className={`max-w-80 rounded-xl border-2 hover:scale-108 p-2 ${shadow?"customshadow":""}  `}>
    //   <div >
    //     <h1  className='text-2xl'>Type:{type}</h1>
    //   </div>
    //   <div>
    //     <h1 className='text-xl'>Example {example}</h1>
    //   </div>
    //   <div>
    //     <h1 ref={ref} className='text-sm'> Discription{description}</h1>
    //   </div>
    className={`max-w-80 rounded-xl border-2 min-h-105 hover:scale-105 p-2 ${shadow?"customshadow":""}  `}>
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

export default PayrollServicesItem
