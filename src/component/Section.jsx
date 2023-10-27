import React from "react";
import Seamlesspayments from "./sections/Seamlesspayments";
import SmallInvesting from "./sections/Small Investing";
import Wealth from "./sections/Wealth";

function Section() {
  return (
    <div className="flex lg:flex-row flex-col gap-8 ">
      <Seamlesspayments />
          <SmallInvesting />
          <Wealth/>
    </div>
  );
}

export default Section;
