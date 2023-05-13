import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Service from '../pages/Service'
import Footer from '../components/Footer'
import NewsLeter from '../components/NewsLeter'
import About from '../components/About'
import TopFoods from '../components/TopFoods'

const HomePage = () => {
  return (
    <div className='w-full h-full flex flex-col items-center overflow-hidden'>
        
        <Home />
        <Service />
        <About />
        <TopFoods />
        <NewsLeter />
        
    </div>
  )
}

export default HomePage