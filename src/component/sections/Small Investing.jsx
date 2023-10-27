import React from "react";
import { CoinStack, Money, QueueList } from "../../assets/index";

function SmallInvesting() {
  const hoverEffect =
    "hover:border-e-slate-200 hover:bg-gradient-to-t from-[rgba(90,252,71,0.37)] via-transparent to-transparent hover:bg-[#12121217]";

  return (
    <div
      className={`p-8 mx-10 bg-[#1313138c] ${hoverEffect} rounded-lg
`}>
      <div className=" flex flex-col gap-3 items-end p-8 bg-gradient-to-l from-[#2d2b2b48] to-[#ffffff00]">
        <div className="bg-[#1f1f1f] px-7 items-center flex flex-row gap-3 py-3 text-white w-fit rounded-md shadow-sm shadow-white">
          <span className="bg-[#2B4089] p-3 rounded-md">
            <CoinStack />
          </span>
          <h1 className="h-fit font-extralight">
            + $22.15 Recieved from Nguyen Shane
          </h1>
        </div>
        <div className="bg-[#1f1f1f] px-6 opacity-90 hover:opacity-60  items-center flex flex-row gap-3 py-4 lg:text-[1.2rem] text-white w-fit rounded-xl shadow-sm shadow-white">
          <span className="bg-green-600 p-3 rounded-md">
            <Money />
          </span>
          <h1 className="h-fit font-extralight">
            + $300.52 Recieved from Cooper Kristin
          </h1>
        </div>
        <div className="bg-[#1f1f1f] px-6 opacity-50 hover:opacity-30 items-center flex flex-row gap-3 py-4 text-white w-fit rounded-lg shadow-sm shadow-white">
          <span className="bg-orange-400 p-3 rounded-md">
            <QueueList />
          </span>
          <h1 className="h-fit font-extralight">
            + $50.00 Recieved from Miles Esther
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-white text-3xl mt-16 ">Small Investing</h1>
        <p className="text-[#BDBDBD] lg:max-w-[80%]">
          Grow your wealth confidently with our personalized investment
          solutions, tailored to your financial goals.
        </p>
      </div>
    </div>
  );
}

export default SmallInvesting;
