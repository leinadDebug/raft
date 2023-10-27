import React from "react";
import { ArrowIcon } from "../../assets/index";
import { motion } from "framer-motion";

function Seamlesspayments() {
  const hoverEffect =
    "hover:border-e-slate-200 hover:bg-gradient-to-t from-[rgba(90,252,71,0.37)] via-transparent to-transparent hover:bg-[#12121217]";

  return (
    <div className={`p-8 mx-10 bg-[#1313138c] rounded-lg ${hoverEffect}`}>
      <div className=" flex flex-col p-7 gap-3 items-center m-auto w-fit bg-gradient-to-r from-[#00000048] to-[#ffffff00]">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "tween" }}
          className="bg-[#1f1f1f] px-7 items-center flex flex-row gap-3 py-4 text-white w-fit rounded-md">
          <span>
            <ArrowIcon />
          </span>
          <h1 className="h-fit font-extralight">
            + $22.15 Recieved from Nguyen Shane
          </h1>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring" }}
          className="bg-[#1f1f1f] px-7 opacity-90 hover:opacity-60  items-center flex flex-row gap-3 py-4 lg:text-[1.2rem] text-white w-fit rounded-md">
          <span>
            <ArrowIcon />
          </span>
          <h1 className="h-fit font-extralight">
            + $300.52 Recieved from Cooper Kristin
          </h1>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "tween" }}
          className="bg-[#1f1f1f] px-7 opacity-50 hover:opacity-30 items-center flex flex-row gap-3 py-4 text-white w-fit rounded-md">
          <span>
            <ArrowIcon />
          </span>
          <h1 className="h-fit font-extralight">
            + $50.00 Recieved from Miles Esther
          </h1>
        </motion.div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-white text-3xl mt-16 ">Seamless Payments</h1>
        <p className="text-[#BDBDBD] lg:max-w-[80%]">
          Enjoy secure, seamless transactions that make managing your money a
          breeze.{" "}
        </p>
      </div>
    </div>
  );
}

export default Seamlesspayments;
