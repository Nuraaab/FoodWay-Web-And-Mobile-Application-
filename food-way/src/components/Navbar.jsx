
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import { logo } from '../assets';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import Hamburger from 'hamburger-react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faPhoneAlt, faSpoon, faTasksAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faContactCard } from '@fortawesome/free-regular-svg-icons';
import { factory } from 'typescript';
import Food from '../pages/Food';
import Home from '../pages/Home';
import HomePage from '../containers/HomePage';
/** @jsxImportSource @emotion/react */
const Li = styled.li`
${tw`
text-sm md:text-[20px] text-black mr-1 md:mr-[30px] cursor-pointer font-semibold font-poppins hover:text-red-400
`}
`
const MLi = styled.li`
${tw`
text-[17px] text-white mr-1 cursor-pointer  hover:text-red-400 font-poppins font-medium mb-[5px]
`}
`
const NavbarContainer = styled.div`
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
${tw`
flex flex-row max-w-screen-2xl w-full min-h-[68px] items-center md:pl-12 md:pr-12 justify-between py-5 
`};
`;
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <BrowserRouter>
    <NavbarContainer>
      <div className='flex items-center'>
        <div className='w-auto h-10 md:h-12 '>
          <img src={logo} className='w-auto h-[100%] cursor-pointer' />
        </div>
      </div>

      <ul className='sm:flex hidden list-none'>
        <Li><a href='#home'><Link to='/'>Home</Link></a></Li>
       <Li> <Link to='/food'>Food</Link></Li>
        <Li><a href='#service'>Service</a></Li>
        <Li>About</Li>
        <Li>Contact</Li>

      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center w-full'>
        < Hamburger color='black' className='w-[28px] h-[28px] object-contain' toggle={setToggle} toggled={toggle} onToggle={() => setToggle(!toggle)}  />
        <div className={` ${!toggle ? "hidden" : "flex"}  bg-black w-[98%] py-8 rounded-[10px] absolute top-20 right-1`}>
          <ul className='list-none flex justify-end items-start flex-1 flex-col ml-4'> 
            <MLi> <FontAwesomeIcon icon={faHome} className='mr-2' /><a href='#home'><Link to='/'>Home</Link></a></MLi>
            <MLi> <FontAwesomeIcon icon={faSpoon} className='mr-2' /><Link to='/food'>Food</Link></MLi>
            <MLi> <FontAwesomeIcon icon={faTasksAlt} className='mr-2' /><a href='#service'>Service</a></MLi>
            <MLi> <FontAwesomeIcon icon={faUserAlt} className='mr-2' />About</MLi>
            <MLi><FontAwesomeIcon icon={faPhone} className='mr-2' />Contact</MLi>
          </ul>
        </div>
      </div>
     

    </NavbarContainer>
    <Routes>
        <Route path='/food' element={<Food />}></Route>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Navbar