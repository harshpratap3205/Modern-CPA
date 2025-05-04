import React from 'react'

import { PayrollServices } from '../../assets/data/virtualCFOServices'
import PayrollServicesItem from './PayrollServicesItem'

const PayrollServicesList = () => {
         const {type,description,example,image}=PayrollServices
    
  return (

    <div>
         <div>
        <div className='flex justify-start ml-5 items-center mt-5'>
            <h1 className='border-b-4 mt-5   border-[#4f0333]  mb-6 font-bold text-3xl text-[#4f0333]'>PayrollServices</h1>
        </div>
        <div className='px-4'>
            {PayrollServices.overview}
            
        </div>
        <div className='flex gap-5 flex-wrap p-5 items-center justify-center '>
            {PayrollServices.types.map((item,index)=><PayrollServicesItem key={index} item={item}/>)}
        </div>
      
    </div>
      
    </div>
  )
}

export default PayrollServicesList
