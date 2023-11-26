import React, { useState } from "react";
import { ChevronDown } from "../assets";

function FAQ() {
  const [isclicked, setIsClicked] = useState(false);
  const [isclicked1, setIsClicked1] = useState(false);
  const [isclicked2, setIsClicked2] = useState(false);
  const [isclicked3, setIsClicked3] = useState(false);

  return (
    <div className="mx-10 lg:mx-20">
      <h1 className="text-white text-3xl lg:text-7xl leading-tight tracking-wide lg:max-w-[40%]">
        Frequently asked questions
      </h1>
      <div className="text-white flex flex-col gap-3 mt-5 lg:mt-20">
        <div className="mb-3">
          <div
            className="flex justify-between text-xl cursor-pointer "
            onClick={() => setIsClicked(!isclicked)}>
            <h2>How do I create an account with RAFT</h2>
            <ChevronDown />
          </div>

          <hr className="mt-7" />
          <p className={`${isclicked ? "flex" : "hidden"} text-sm p-5`}>
            well they are all customized
          </p>
        </div>

        <div className="mb-3">
          <div
            className="flex justify-between text-xl cursor-pointer "
            onClick={() => setIsClicked1(!isclicked1)}>
            <h2>How do RAFT ensure the security of my financial data?</h2>
            <ChevronDown />
          </div>
          <hr className="mt-7" />
          <p className={`${isclicked1 ? "flex" : "hidden"} text-sm p-5`}>
            well they are all customized
          </p>
        </div>

        <div className="mb-3">
          <div
            className="flex justify-between text-xl cursor-pointer "
            onClick={() => setIsClicked2(!isclicked2)}>
            <h2>What type of transactions can i perform with RAFT</h2>
            <ChevronDown />
          </div>
          <hr className="mt-7" />
          <p className={`${isclicked2 ? "flex" : "hidden"} text-sm p-5`}>
            well they are all customized
          </p>
        </div>

        <div className="mb-3">
          <div
            className="flex justify-between text-xl cursor-pointer "
            onClick={() => setIsClicked3(!isclicked3)}>
            <h2>What benefits does RAFT offer for wealth management </h2>
            <ChevronDown />
          </div>

          <hr className="mt-7" />
          <p className={`${isclicked3 ? "flex" : "hidden"} text-sm p-5`}>
            well they are all customized
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
