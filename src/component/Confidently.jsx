import React from "react";
import {
  InvestBetterGradient,
  MoneySend,
  SpendBetterGradient,
  WalletMinus,
} from "../assets";

function Confidently() {
  return (
    <div className=" text-[white] ">
      <div className="flex flex-col gap-5 lg:gap-6 p-10 lg:pt-28">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl lg:text-7xl lg: leading-snug ">
            Confidently Shape Your <p>Financial Future</p>
          </h1>
          <h5 className="text-[#BDBDBD]">
            At RAFT we empower you to Confidently shape your financial
            future.Our modern approach
            <p> simplifies saving and investing, making it easier than ever.</p>
          </h5>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 justify-around lg:p-10 ">
          <div className="bg-[#131313] flex flex-col gap-5 px-10 py-12 rounded-3xl ">
            <h1 className="text-3xl">Spend better</h1>
            <div>
              <h4 className="text-[#BDBDBD]">
                Set and achieve financial goals with ease, automate your
                <p> savings, and watch your money grow without the stress.</p>
              </h4>
            </div>

            <div className="flex place-items-center justify-center">
              <SpendBetterGradient />
              <div className="absolute ">
                <MoneySend />
              </div>
            </div>
          </div>
          <div className="bg-[#131313] flex flex-col gap-5 px-10 py-12 rounded-3xl ">
            <h1 className="text-3xl">Invest better</h1>
            <div>
              <h5 className="text-[#BDBDBD] ">
                Set and achieve financial goals with ease, automate your
                <p> savings, and watch your money grow without the stress.</p>
              </h5>
            </div>

            <div className="flex place-items-center justify-center">
              <InvestBetterGradient />
              <div className="absolute ">
                <WalletMinus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confidently;
