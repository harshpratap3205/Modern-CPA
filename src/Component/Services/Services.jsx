import React from 'react'
// import { cfo } from '../../assets/data/virtualCFOServices'
import CFOItems from './CFOItems'

const Services = ({item}) => {
      
    const {data,title}=item
  return (
    <div>
        <div className='flex justify-start ml-5 items-center  mt-5'>
            <h1 id='Services' className='border-b-4 mt-5   border-[#4f0333]  mb-6 font-bold text-3xl text-[#4f0333]'>{title}</h1>
        </div>
        <div className='px-4'>
            {data.overview}
            
        </div>
        <div className='flex gap-5 flex-wrap p-5 items-center justify-center '>
            {data.types.map((item,index)=><CFOItems key={index} item={item}/>)}
        </div>
      
    </div>
  )
}

export default Services
