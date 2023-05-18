import React from 'react'
import { arrow } from '../assets'

const Hleft = () => {
    return (
        <div className='w-full md:w-[48%]  flex items-center md:mt-[50px] pl-8'>
            <div className='w-full flex flex-col items-center     md:justify-start md:items-start  p-6 md:p-2 '>
                <h1 className='flex justify-center font-poppins font-bold text-[20px] leading-[27px] md:text-[40px] md:leading-[50px] md:max-w-[500px] mb-[20px]'>The Best Place To Satisfay Your Anger.  </h1>
                <p className='font-poppins font-normal text-sm md:text-base text-black max-w-[400px]'>We provide the best quality fast foods that fulfill your needs. In addtion to the normal service you can build your meal as you want and order us when you finish it.</p>
          <div className='w-full flex justify-center md:justify-center mt-[40px] ml-5 mt-5'>
            <div className='md:w-[250px] md:h-[250px] w-[100px] h-[100px] rounded-full bg-secondary cursor-pointer  flex items-end p-1'>
             <div className='w-full h-full rounded-full  bg-primary hover:bg-secondary flex items-center justify-center flex-col'>
               <div className='flex flex-row '>
            
               <span className='flex items-center  text-white font-poppins font-semibold text-[10px] md:text-[25px] '>Order</span>
               <img src={arrow} className='w-[25px]'/>
               </div>
               <span className='flex items-center ml-4 md:ml-7 text-white font-poppins font-semibold text-[10px] md:text-[25px]'>Now</span>
               
             </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Hleft