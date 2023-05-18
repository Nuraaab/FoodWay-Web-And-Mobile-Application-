import { faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { useState } from 'react';
import CartDiscription from './CartDiscription';

const Cart = ({ cart,tPrice, setTotal,setCart,removeCart }) => {
    // const cartHandler = ()=>{
    //     cartIncrement();
    // }
    const [discription, setDiscription] = useState(false);
    return (
        <div className='w-full'>
            <div className='w-full'>
                <h1 className='text-red-500'> <FontAwesomeIcon onClick={() => setDiscription(!discription)} icon={faCartShopping} color='black' className=' w-[25px] h-[25px] absolute top-7 right-1' /><span className='absolute top-3 right-2 font-poppins font-bold'>{cart.length}</span></h1>

            </div>
            <div className={`w-full ${!discription ? "hidden" : "flex"}`}>
            <CartDiscription cart={cart} setCart={setCart} disc={discription} totPrice={tPrice} setTotPrice={setTotal} setDisc={setDiscription} removeFromCart={removeCart}/>
            </div>
        </div>
    )
}

export default Cart