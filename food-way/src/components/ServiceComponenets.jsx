import React from 'react'
import { Services } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { arrow } from '../assets';

const ServiceContainer =styled.div`
box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
${tw`
  mx-4 my-4 md:mx-0 md:my-0  p-3 md:w-[21%] flex flex-col mt-[10px] md:mt-0 
`};

`;
const ServiceComponentContainer =styled.div`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
${tw`
w-full flex flex-col md:flex-row  md:justify-evenly mb-[30px] md:pl-20 md:pr-20 py-8
`};
`;
const ServiceComponenets = () => {
    return (
      <ServiceComponentContainer>
            {Services.map((ser)=>(
                
              <ServiceContainer>
                <div className='md:min-h-[100px] flex flex-col items-center'>
                <h1 className='flex justify-center font-poppins font-bold text-[15px] md:text-[23px] text-black mt-2'>{ser.title}</h1>
                <FontAwesomeIcon icon={ser.icon} color='red' className='mt-3 h-[40px] w-[40px] flex justify-center' />
                <p className='w-full font-poppins font-normal text-sm md:text-base mt-2 mx-1'>{ser.discription}</p>
                </div>
                <div className='w-full flex items-center justify-center'>
                 <div className='my-1 w-[50%] flex justify-center items-center bg-transparent py-1 px-1 rounded flex-row'>
                       <span className='font-poppins font-semibold text-black hover:text-red-500 cursor-pointer' >More</span>
                       <img src={arrow} className='w-[20px] ml-2' />
                       <FontAwesomeIcon />
                 </div>
                 </div>
              </ServiceContainer>
             
            
            ))}

       </ServiceComponentContainer>
    )
}

export default ServiceComponenets