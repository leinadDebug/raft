import React from 'react'
import Mobileimg from '../assets/Frame 31.png';
import Desktopimg from "../assets/Frame 31 (1).png";
import bloomberg from '../assets/png/bloomberg-1.png'
import cnbc from '../assets/png/cnbc-1.png'
import cnn from '../assets/png/cnn-logo 1.png'
import reuters from '../assets/png/reuters-2-1 1.png'
import vector from "../assets/png/Vector.png";

function Intro() {
  const title = 'Introducing Raft Cards >'
  return (
    <div className="bg-[#070606] text-white md:mx-10 lg:mx-20 mx-10 py-20 px-10 text-center">
      <button className="bg-[#4d4a4a] p-2 px-3 rounded-full">{title}</button>
      <h1 className=" text-3xl md:text-6xl my-5 p-2 lg:text-8xl lg:w-[50%] m-auto">
        Building the future of banking.
      </h1>
      <p className=" p-2 px-5 lg:my-6 lg:text-2xl lg:w-[50%] m-auto">
        Experience the future of banking with RAFT. We're here to empower your
        financial journey.
      </p>
      <button className="bg-green-500 p-3 px-5 text-lg rounded-full  ">
        Get Started
      </button>
      <div className=" p-3 flex justify-center mt-10 lg:mt-32 ">
        <img className="lg:hidden" src={Mobileimg} />
        <img className="hidden lg:flex" src={Desktopimg} />
      </div>
      <div className="lg:mt-16 lg:text-2xl mt-6  text-[#BDBDBD]">
        <h2 className="lg:mb-14">FEATURED AND SEEN IN</h2>
        <div className='flex gap-16 justify-center items-center '>
          <img className='lg:h-9 ' src={vector} />
          <img className='lg:h-14 ' src={cnbc} />
          <img className='lg:h-14 ' src={bloomberg} />
          <img className='lg:h-10 ' src={reuters} />
          <img className='lg:h-10 ' src={cnn} />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Intro