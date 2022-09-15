import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/KairosLogo.png';

const Navbar = () => {
  //States
  const [nav, setNav] = useState(false);
  const [navbarBg, setNavbarBg] = useState(true);

  //Fuctions
  
  const handleNav = () => { // handles responsive Menu navigation
    setNav(!nav);
  };

  const changeNavBg = () => {
    if (window.scrollY >= 100) {
      setNavbarBg(true);
    }
    else if (window.scrollY < 400){
      setNavbarBg(false);
    }
  };

    window.addEventListener('scroll', changeNavBg);

  

  return (
    <div className={navbarBg ? "flex justify-between items-center h-24 w-full px-16 text-white bg-[#0c2e51] fixed top-0 z-50" : "flex justify-between items-center h-24 w-full px-16 text-white bg-[transparent] fixed top-0 z-50"}>
    {/* <div className='flex justify-between items-center h-24 w-screen  mx-auto px-20 text-white bg-[#0E115D] fixed top-0'> */}
      {/* <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1> */}
      <span><img className="h-22 w-32" src={Logo} alt="KairosLogo" /></span>
      <ul className='hidden md:flex'>
       
        <li className='link link-underline link-underline-white p-4 font-bold'>Home</li>
        <li className='link link-underline link-underline-white p-4 font-bold'>School</li>
        <li className='link link-underline link-underline-white p-4 font-bold'>Methodoly</li>
        <li className='link link-underline link-underline-white p-4 font-bold'>About</li>
        <li className='link link-underline link-underline-white p-4 font-bold'>Contact</li>
        <li className='link link-underline link-underline-white p-4 font-bold'>Language</li>

      </ul>
      <div onClick={handleNav} className='block md:hidden z-50'>
          {nav ? <AiOutlineClose size={28}/> : <AiOutlineMenu size={28} />}
      </div>
      <ul className={nav ? 'mx-auto fixed left-0 top-0 w-[100%] h-full  bg-[#0c2e51] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      
          <li><img className=" text-center mx-auto py-12 h-22 w-32" src={Logo} alt="KairosLogo" /></li>
          <li className='link link-underline link-underline-white text-center p-4 border-b border-gray-600'>Home</li>
          <li className='link link-underline link-underline-white text-center p-4 border-b border-gray-600'>School</li>
          <li className='link link-underline link-underline-white text-center p-4 border-b border-gray-600'>Methodoly</li>
          <li className='link link-underline link-underline-white text-center p-4 border-b border-gray-600'>About</li>
          <li className='link link-underline link-underline-white text-center p-4'>Language</li>
      </ul>
    </div>
  );
};

export default Navbar;
