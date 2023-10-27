import React from "react";

function Stats() {
  const cities = 50;
  const transactions = "50,000";

  return (
    <div className="flex justify-around mx-10 lg:mx-20">
      <div className="flex flex-col text-center">
        <h1 className="text-[#fff] lg:text-7xl font-medium pb-2 lg:pb-5">{cities}+</h1>
        <p className="text-[#BDBDBD] text-sm lg:text-lg">CITIES</p>
      </div>
      <div className="flex flex-col text-center">
        <h1 className="text-[#fff] lg:text-7xl font-medium pb-2 lg:pb-5">{transactions}+</h1>
        <p className="text-[#BDBDBD] text-sm lg:text-lg">TRANSACTIONS</p>
      </div>
      <div className="flex flex-col text-center">
        <h1 className="text-[#fff] lg:text-7xl font-medium pb-2 lg:pb-5">3M+</h1>
        <p className="text-[#BDBDBD] text-sm lg:text-lg">USERS</p>
      </div>
      <div className="flex flex-col text-center">
        <h1 className="text-[#fff] lg:text-7xl font-medium pb-2 lg:pb-5">5</h1>
        <p className="text-[#BDBDBD] text-sm lg:text-lg">USER RATINGS</p>
      </div>
    </div>
  );
}

export default Stats;
