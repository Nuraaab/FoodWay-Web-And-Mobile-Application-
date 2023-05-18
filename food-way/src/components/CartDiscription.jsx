import React, { useState } from 'react'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faDeleteLeft, faRemove } from '@fortawesome/free-solid-svg-icons';
const Container = styled.div`
box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
${tw`
w-[60%] absolute top-20 right-2 flex flex-col bg-white rounded py-8 flex justify-center
`};
`;
const TopContainer = styled.div`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
${tw`
w-[70%] flex flex-col py-8  ml-[15%]
`};
`;
const InnerContainer = styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
${tw`
w-full pl-2 pr-2 flex flex-row justify-between items-center py-2
`}
`;
const CartDiscription = ({cart, disc, setDisc,totPrice, setTotPrice, setCart,removeFromCart}) => {
    const removeHandller = (item)=>{
        removeFromCart(item);
    }
  return (
    <Container>
        <FontAwesomeIcon icon={faClose} onClick={()=>setDisc(!disc)}  color='black' className={` w-[25px] h-[25px] absolute top-0 right-1  `} />
        
            <TopContainer>
                <div className='w-full flex flex-col p-5 justify-center items-center'>
                    <InnerContainer className=''>
                        <p className='font-poppins font-bold text-black text[16px]'>No.</p>
                        <p className='font-poppins font-bold text-black text[16px]'>F.Name</p>
                        <p className='font-poppins font-bold text-black text[16px]'>Quantity</p>
                        <p className='font-poppins font-bold text-black text[16px]'>Price</p>
                        <p className='font-poppins font-bold text-black text[16px]'>Remove</p>
                    </InnerContainer>
                    {
                     cart.map((item, index)=>(
                            <InnerContainer className={`mt-1`}>
                            <p className='font-poppins font-normal text-black text[16px]'>{index+1}</p>
                            <p className='font-poppins font-normal text-black text[16px]'>{item.food_name}</p>
                            <p className='font-poppins font-normal text-black text[16px]'>{item.quantity}</p>
                            <p className='font-poppins font-normal text-black text[16px]'>{item.price}</p>
                            < FontAwesomeIcon onClick={() =>removeHandller(item)} icon={faRemove} color='red' className='w-[25px] h-[25px]' />
                        </InnerContainer>
                        ))
                        
                    }
                </div>
                </TopContainer>
                <div className='w-full pl-12 pr-12 flex flex-row items-center justify-between mt-5'>
                    <h1 className='font-poppins text-black font-normal'>Total Price: {totPrice}ETB</h1>
                    <button className='py-3 px-8 bg-primary text-white rounded justify-end font-poppins items-center '>Order</button>
                    </div>
    </Container>
  )
}

export default CartDiscription