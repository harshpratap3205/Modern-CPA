import React from 'react'
import RfpItem from './RfpItem'
import { RFP } from '../../assets/data/virtualCFOServices'

const Rfp = () => {
         const {type,description,example,image}=RFP
    
  return (
    <div>
         <div>
        <div className='flex justify-start ml-5 items-center mt-5'>
            <h1 className='border-b-4 mt-5   border-[#4f0333]  mb-6 font-bold text-3xl text-[#4f0333]'>RetirementPlanning</h1>
        </div>
        <div className='px-4'>
            {RFP.overview}
            
        </div>
        <div className='flex gap-5 flex-wrap p-5 items-center justify-center '>
            {RFP.types.map((item,index)=><RfpItem key={index} item={item}/>)}
        </div>
      
    </div>
      
    </div>
  )
}

export default Rfp
