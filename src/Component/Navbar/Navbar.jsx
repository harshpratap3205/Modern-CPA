import { faCartShopping, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { motion } from "motion/react"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const Navigate=useNavigate()
    return (
      <>
        <motion.div initial={{
            y:-200
          }} animate={{
            y:0
          }}
          transition={{
        type:"spring",
            duration:1.5,
            delay:0.1
          }} className=' ' >
            <div className='h-15  items-center   flex justify-between '>
               <div className=' ml-20 text-4xl max-md:text-2xl max-md:ml-5 max-sm:text-xl font-bold flex justify-start  '>
               <h1 className='text-[#4f0333]'>Modern CPA</h1>
               </div>
                <div className='flex justify-between mr-20  max-md:mr-4  w-30'>
                     <div className='w-9 h-9  flex justify-center items-center'><FontAwesomeIcon icon={faCartShopping} style={{ color: "#4f0333", fontSize: '30px' }} /></div>
                     <div  to className=' w-9  h-9 border-4 border-[#4f0333] flex justify-center items-center rounded-[50%]' ><FontAwesomeIcon icon={faQuestion} style={{ color: "#4f0333", fontSize: '30px' }} /></div>
                </div>
            </div>
                <div className='bg-[#4f0333] h-12 text-2xl max-md:text-sm   text-white'>
                  <div className='flex justify-between navshadow h-full items-center'>
                    <div className=''></div>
                    <div className='flex  gap-20 max-md:gap-3  '>
                      <h1 className='hover:bg-white hover:scale-105 hover:text-[#4f0333] px-2 rounded'><a href="#Services"> Services</a> </h1>
                      <h1 className='hover:bg-white hover:scale-105 hover:text-[#4f0333] px-2 rounded'><a href="#specification">Specification</a> </h1>
                      <h1 onClick={()=>{Navigate('/contact')}} className='hover:bg-white hover:scale-105 hover:text-[#4f0333] cursor-pointer px-2 rounded'>Contact</h1>
                      <h1 onClick={()=>{Navigate('/aboutus')}} className='hover:bg-white hover:scale-105 hover:text-[#4f0333] px-2 cursor-pointer mr-2 rounded'>About</h1>
                      </div>
                  </div>
                </div>
        </motion.div>
      </>
    )
}

export default Navbar
