import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white bg-violet-400'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#8200df] font-bold pt-2 pb-1'>
        Lorem ipsum dolor sit amet
        </p>
        <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-3'>
        Lorem ipsum dolor sit amet
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-3'>
            Modern, fast, flexible  for
          </p>
          <Typed
          className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-violet-600'
            strings={['Vue', 'React', 'Angular']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>
        Rapidly build modern websites without ever leaving your HTML.
        </p>
        <button className='bg-[#8200df] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
// molestiae delectus culpa hic assumenda, voluptate reprehenderit
// dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
// eveniet ex deserunt fuga?