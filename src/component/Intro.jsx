import React from "react";
import Mobileimg from "../assets/Frame 31.png";
import Desktopimg from "../assets/Frame 31 (1).png";
import bloomberg from "../assets/png/bloomberg-1.png";
import cnbc from "../assets/png/cnbc-1.png";
import cnn from "../assets/png/cnn-logo 1.png";
import reuters from "../assets/png/reuters-2-1 1.png";
import vector from "../assets/png/Vector.png";

function Intro() {
  const title = "Introducing Raft Cards >";
  return (
    <div className="bg-[#070606] md:mx-10 lg:mx-20  py-20 px-10 text-white text-center">
      <button className="bg-[#4d4a4a] py-2 px-3 rounded-full ">{title}</button>
      <h1 className="my-5 p-2 md:text-6xl lg:text-8xl lg:w-[50%] m-auto text-4xl tracking-wide">
        Building the future of banking.
      </h1>
      <p className=" p-2 px-5 lg:my-6 lg:text-2xl lg:w-[50%] m-auto text-[#989898] mb-4">
        Experience the future of banking with RAFT. We're here to empower your
        financial journey.
      </p>
      <button className="bg-green-500 p-3 px-5 text-lg rounded-full  ">
        Get Started
      </button>
      <div className=" p-3 flex justify-center mt-10 lg:mt-32 ">
        <img
          className="lg:hidden border-2 border-green-400 rounded-lg"
          src={Mobileimg}
        />
        <img
          className="hidden lg:flex border-2 border-green-400 rounded-2xl"
          src={Desktopimg}
        />
      </div>
      <div className="lg:mt-16 lg:text-2xl mt-6  text-[#BDBDBD]">
        <h2 className="lg:mb-14 mb-7">FEATURED AND SEEN IN</h2>
        <div className="flex lg:gap-16 gap-6 justify-center items-center lg:overflow-x-none overflow-x-auto ">
          <img className="lg:h-9 h-9 " src={vector} />
          <img className="lg:h-14 h-9" src={cnbc} />
          <img className="lg:h-14 h-9" src={bloomberg} />
          <img className="lg:h-10 h-9" src={reuters} />
          <img className="lg:h-10 h-9" src={cnn} />
          <div></div>
        </div>
        <div className="lg:mt-52 mt-16 ">
          <h1 className="my-5 p-2 md:text-5xl lg:text-8xl lg:w-[60%] m-auto text-4xl text-white tracking-wide">
            Elevate Your Financial Journey with RAFT
          </h1>
          <p className=" p-2 px-5 lg:my-6 lg:text-2xl lg:w-[50%] m-auto text-[#989898] mb-4">
            RAFT offers a world of possibilities. From investment to payments,
            we've got you covered. Join us and unlock your financial potential
            today.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
