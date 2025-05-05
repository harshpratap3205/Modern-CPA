import React from 'react'
import Banner from '../Banner/Banner'
import { div } from 'motion/react-client'
import CardSlider from '../CardSlider/CardSlider'
import Specification from '../SpefCpa/Specification'
import Services from '../Services/Services'
import Footer from '../footer/Footer'
import Rfp from '../Rfp/Rfp'
import StickyScreen from '../stickyScreen/StickyScreen'
import PayrollServices from '../PayrollServices/PayrollServices'

const Home = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  console.log(baseUrl)
  return (
          <>
          <div>
            <div> <StickyScreen/></div>
          <div className='  flex flex-col items-center justify-center '> <Banner/> 
                <div className='flex flex-col items-center justify-center'>
                <h1 className='   border-b-4 mt-5   border-[#4f0333]  mb-6 font-bold text-5xl max-sm:text-3xl text-[#4f0333]'>Terminologies</h1>
          <h1 className='flex justify-center items-center px-20  max-sm:px-7 max-md:px-10 text-sl  mb-6'>
            
            "Our firm delivers strategic financial solutions tailored to your unique needs. From tax planning and compliance to Virtual CFO services, we provide expert guidance to optimize your financial health. Our CPAs combine technical precision with proactive advisory, ensuring compliance while identifying growth opportunities. Whether you require audit support, payroll management, or retirement planning, we partner with you to transform complex regulations into actionable strategies. Let’s build a roadmap for your success—contact us today."</h1>
         
            
                </div>
            </div>
          <div className=' flex items-center justify-center'> <CardSlider/></div>
          <div className=''> <Specification/> </div>
        <div><Services/></div>
        <div><Rfp/></div>
        <div><PayrollServices/></div>

        <div><Footer/></div>
           </div>
        
          </>
  )
}

export default Home
