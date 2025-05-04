import React from 'react'
// import bannerbg from './DY25_April_and_May_A_A-banner-3000x2000.jpg'
import { motion } from "motion/react"

const Banner = () => {
    // console.log(bannerbg)
  return (
    <div className='w-full'> 
          <div className='p-3   w-full'>
              <div className={` rounded-2xl  w-full h-[80vh]  max-md:bg-contain max-md:bg-no-repeat max-md:h-[60vh]  max-sm:bg-cover    bg-center 
                  bg-[url('./assets/DY25_April_and_May_A_A-banner-3000x2000.jpg')] bg-cover  flex justify-between `}> 
                    <div className='text-white bg-amer-400 w-[50%] flex flex-col  pl-20 max-md:pl-3 max-md:w-[70%] justify-center gap-2'> 
                          <motion.h1
   initial={{
          x:-700
        }}
   animate={{
           x:0
             }}
  transition={{
            type:"spring",
             duration:1,
            delay:0.1
        }}            className='text-2xl max-md:text-xl '>Welcome to AICPA & CIMA 

                          </motion.h1>
                           <h1 className=' max-w-150 '>
                                 <motion.p 
    initial={{
      x:-700
    }}
animate={{
       x:0
         }}
transition={{
        type:"spring",
         duration:1,
        delay:0.3
    }}   
                                className= ' text-5xl max-md:text-2xl max-sm:hidden '>Dive into the A&A webcast series! </motion.p>
                                 <motion.p
     initial={{
      x:-700
    }}
animate={{
       x:0
         }}
transition={{
        type:"spring",
         duration:1,
        delay:0.5
    }}                              
                                 className=' p-2 text-[15px] max-md:text-[10px]'>Join us on May 7 at 1pm ET as Mark Koziel, CPA, CEO of AICPA® & CIMA®, and fellow CPAs Angela Newell and Renee Rampulla 
                                    share expert insights on the direction and goals of the AICPA®, the final step of FASB's five-step model and quality management.
                                 </motion.p>
                                 <div className='flex items-center mt-5 justify-center'>
                                 <motion.p 
    initial={{
      x:-700
    }}
animate={{
       x:0
         }}
transition={{
        type:"spring",
         duration:1,
        delay:0.7
    }}        
    
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.1,
         type: "spring",
          stiffness: 400,
          mass: 0.5 }
    }}
                                 className='bg-white cursor-pointer  font-semibold rounded-2xl hover:bg-[#4f0333 hover:scale-105 max-md:px-1 max-md:text-xl text-2xl px-3 flex items-center justify-center   py-2 text-[#4f0333]'>Start Now</motion.p>
                                 </div>
                           </h1>
 
                      </div>
                    <div></div>
              </div>


           </div>      
    </div>
  )
}

export default Banner
