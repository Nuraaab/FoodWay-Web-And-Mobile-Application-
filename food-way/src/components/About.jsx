import React from 'react'
import { food } from '../assets'

const About = () => {
    return (
        <div className='max-w-screen-2xl md:ml-12 md:mr-12 flex flex-col md:flex-row justify-between'>
            <div className='w-full md:w-[48%]  flex flex-row p-3 flex-warp' >
                <img src={food} />
            </div>
            <div className='w-full md:w-[48%] flex items-center flex-warp '>
                <p className='max-w-[560px] font-poppins text-sm md:text-base leading-[27px] mx-7 md:mx-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla. Integer enim neque volutpat ac tincidunt vitae semper. Nibh venenatis cras sed felis eget velit. Egestas sed sed risus pretium. Euismod lacinia at quis risus. Pulvinar pellentesque habitant morbi tristique senectus et. Id consectetur purus ut faucibus. Eu nisl nunc mi ipsum faucibus vitae aliquet. Suspendisse in est ante in nibh. Morbi non arcu risus quis varius quam quisque id diam. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. A erat nam at lectus urna duis. Risus at ultrices mi tempus imperdiet. Cursus in hac habitasse platea dictumst quisque sagittis purus. Cursus sit amet dictum sit. Pretium vulputate sapien nec sagittis. Enim neque volutpat ac tincidunt vitae semper quis lectus.
                </p>

            </div>
        </div>
    )
}

export default About