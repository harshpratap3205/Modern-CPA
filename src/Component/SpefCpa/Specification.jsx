import React, { useRef } from 'react'
import { specf } from '../../assets/Specificationdata/Specificationdata'
import SpecificationItem from './SpecificationItem'
import { div } from 'motion/react-client'
import { motion, useInView } from "motion/react"



const Specification = () => {
    const myref=useRef(false)
    const isInView=useInView(myref)
    // console.log(isInView)
  return (<>
  
  
<div className='flex   justify-center'>
    <div className='flex flex-col justify-center items-center'>
    <h1  id='specification' className='    border-b-4   border-[#4f0333]   font-bold  max-sm:text-3xl text-5xl text-[#4f0333]'> Our Specification</h1>
 <h1 className='text-sl mb-3 px-20 max-md:px-10 max-sm:px-7'>Modern CPA is a cutting-edge accounting platform designed for today's dynamic financial needs. Combining AI-driven insights with human 
    expertise, it delivers personalized tax strategies, audit protection, and growth-focused financial planning. Built on secure cloud technology, the platform prioritizes 
    transparency, compliance, and real-time collaboration – redefining CPA services for digital-first businesses and individuals.</h1>
   
    </div>
 </div>
   
<div ref={myref} className='overflow-scroll container '>
<div  className=' mb-4   overflow-scrol bloc  container '>
      <motion.div 
       initial={{
        x:-3000
        ,
      }} animate={isInView? {
        x:0
      }:{}}
      transition={{
    type:"spring",
     duration:1.5,
        delay:0.1
      }}

      className='flex p-3 gap-6    overflow-y-aut container'> 
    {specf.map((item,index)=><SpecificationItem key={index} item={item}/>)}
    </motion.div>
  
   </div>
</div>
  </>
  )
}

export default Specification
