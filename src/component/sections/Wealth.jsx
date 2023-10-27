import React from "react";
import { ArrowIcon, Chatbubble } from "../../assets/index";

function Wealth() {
  const hoverEffect =
    "hover:border-e-slate-200 hover:bg-gradient-to-t from-[rgba(90,252,71,0.37)] via-transparent to-transparent hover:bg-[#12121217]";

  return (
    <div
      className={`p-8 mx-10 bg-[#1313138c] ${hoverEffect} rounded-lg flex flex-col`}>
      <div className="flex flex-col justify-center  bg-gradient-to-r from-[#0e0d0d48] to-[#ffffff00] rounded my-auto">
        <div className=" bg-[#1f1f1f] px-7 py-7 items-left flex flex-col gap-4  text-white rounded-2xl shadow-inner shadow-[#ffffff80] ">
          <div className="flex items-center gap-6">
            <ArrowIcon />
            <div className="py-3 font-sfProDisplay">
              <h1 className="h-fit text-2xl tracking-wider opacity-90">
                Wade Warren
              </h1>
              <p className=" text-md  tracking-wide opacity-40">
                Private wealth manager
              </p>
            </div>
          </div>
          <div className="text-white flex justify-between text-lg opacity-40">
            <h2>Send message</h2>
            <Chatbubble />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-white text-3xl mt-16 ">Wealth Management</h1>
        <p className="text-[#BDBDBD] lg:max-w-[80%]">
          Make informed decisions for your financial future with our wealth
          management expertise.
        </p>
      </div>
    </div>
  );
}

export default Wealth;
