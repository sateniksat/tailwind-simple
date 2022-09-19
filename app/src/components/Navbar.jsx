import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w mx-auto px-4 text-white bg-slate-500/70'>
      <h1 className='w-full text-3xl ml-8 font-bold text-[#8200df] cursor-pointer'>Tailwind</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 cursor-pointer'>Home</li>
        <li className='p-4 cursor-pointer'>Company</li>
        <li className='p-4 cursor-pointer'>Resources</li>
        <li className='p-4 cursor-pointer'>About</li>
        <li className='p-4 cursor-pointer'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-screen border-r border-r-violet-200 bg-violet-400 ease-in-out duration-500' : 'ease-in-out h-screen duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#8200df] mt-8 ml-8 cursor-pointer'>Tailwind</h1>
          <li className='p-4 cursor-pointer border-b border-violet-200'>Home</li>
          <li className='p-4 cursor-pointer border-b border-violet-200'>Company</li>
          <li className='p-4 cursor-pointer border-b border-violet-200'>Resources</li>
          <li className='p-4 cursor-pointer border-b border-violet-200'>About</li>
          <li className='p-4 cursor-pointer'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
