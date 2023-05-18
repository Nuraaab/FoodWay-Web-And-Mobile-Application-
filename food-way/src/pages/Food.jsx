import React from 'react'
import FoodLeft from '../components/FoodLeft'
import FoodRight from '../components/FoodRight'

const Food = () => {
  return (
    <div className='w-full h-full flex flex-col items-center overflow-hidden  ' >
        <div className='w-full h-full flex flex-row'>
         
          <FoodRight />
        </div>
    </div>
  )
}

export default Food