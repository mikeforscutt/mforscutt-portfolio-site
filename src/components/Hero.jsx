import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className='text-white bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='max-w-[1250px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
        <p className='text-[#00df9a] font-bold p-2 text-2xl'>
          We build digital products and services
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          OM Digital Media
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>
            Delivering beautiful websites and marketing campaigns that get
          </p>
          <Typed
            className='md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2'
            strings={["Results", "Clients", ""]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'></p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
          Our Latest Work
        </button>
      </div>
    </div>
  );
};

export default Hero;
