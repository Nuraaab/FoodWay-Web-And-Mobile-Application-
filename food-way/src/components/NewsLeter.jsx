import React from 'react'
import tw from 'twin.macro';
import styled from '@emotion/styled';
/** @jsxImportSource @emotion/react */
const NewsLeterContainer= styled.div`
box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
background: radial-gradient(circle, #ffffff, #f0f0f0);

${tw`
 max-w-screen-2xl  md:pl-12 md:pr-12 mb-[20px] mx-5 my-5 md:mx-0 md:my-10 rounded-[10px] py-7
`};
`;
const NewsLeter = () => {
  return (
    <div className='w-full md:pl-12 md:pr-12'>
    <NewsLeterContainer>
       <div className='w-full  items-center justify-center'>
        <form className='w-full px-16 py-6 flex flex-col justify-between '>
            <h1 className='flex justify-center font-poppins font-bold text-[15px] md:text-[17px] '>Subscribe To Our NewsLeter</h1>
           <div className='w-full'>
            <label className='font-poppins font-semibold text-[14px] '>Email</label>
            <input type='text'  className='w-full md:pl-16 md:pr-16 py-3  border-2  border-secondary focus:outline-none rounded-[7px]'/>
            </div>
           <div className='w-full flex  justify-center'>
            <button type='submit' className='  w-[40%] flex  justify-center py-3 px-9 md:py-5 md:px-7 bg-primary rounded text-white font-poppins font-medium my-7'>Subscribe</button>
            </div>
        </form>

       </div>
    </NewsLeterContainer>
    </div>
  )
}

export default NewsLeter