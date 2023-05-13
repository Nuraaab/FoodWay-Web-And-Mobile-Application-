import React from 'react'
import Hleft from '../components/Hleft'
import Hright from '../components/Hright'

const Home = () => {
    return (
        <div id='home' className='w-full  mt-5 flex flex-col items-center '>
            <div className='w-full md:pl-12 md:pr-12 flex flex-col md:flex-row-reverse  items-center md:justify-between flex-warp'>
                     <Hright />
                     <Hleft />
            </div>
        </div>
    )
}

export default Home