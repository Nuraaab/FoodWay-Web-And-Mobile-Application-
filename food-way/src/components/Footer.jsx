import React from 'react'
import { footer } from '../constants'
import { logo } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
    return (
        <div className='w-full bg-black min-h-[300px] flex flex-col'>
            <div className=' max-w-[1536px]  md:pl-12 md:pr-12 flex flex-col justify-center md:justify-between md:flex-row'>
                <div className='w-auto h-6 md:h-9 '>
                    <img src={logo} className='w-auto h-[100%] cursor-pointer' />
                </div>
                {footer.map((fot) => (
                    <div id={fot.id} className='flex flex-col'>
                        <h1 className='text-white font-poppins font-semibold text-sm md:text-base flex justify-center mt-[25px] mb-[10px]'>{fot.title}</h1>
                        {fot.list.map((items) => (
                            <div className='flex flex-row items-center justify-center md:justify-start'>
                                <FontAwesomeIcon icon={items.icon} color='white' />
                                <h5 className=' ml-5 text-white font-poppins font-medium text-[13px] flex justify-center md:justify-start mt-[5px] items-center'>{items.title}</h5>
                            </div>
                        ))}
                    </div>
                ))}

            </div>
            <div className='flex flex-row justify-center items-center'>
                <span className='text-white font-poppins font-medium text-[13px] flex items-end mt-16 justify-center'>Copyright &copy; {new Date().getFullYear()}. Developed By Nuru Ahmed.</span>

            </div>
        </div>
    )
}

export default Footer