import React from "react";

function GenCards() {
  return (
    <div className="m-10 lg:m-28">
    <div className="text-center w-fit lg:m-auto ">
      <h1 className="text-[#48D64C] pb-5 lg:pb-8 ">INTRODUCING</h1>
      <h1 className="text-[#ffff] text-4xl px-6 tracking-wide lg:text-7xl lg:max-w-4xl leading-tight">
        Introducing RAFT's Next-Gen Cards
      </h1>
      <p className=" text-[#BDBDBD] p-3 text-sm tracking-wide lg:text-xl lg:pt-8 max-w-2xl lg:m-auto">
        Discover RAFT's latest innovation - our new cards. Elevate your banking
        experience with cutting-edge features, security, and unprecedented
        convenience.
      </p>
    </div>
    <div className="flex flex-col lg:flex-row gap-3">
        <section>
            <div><img/><h1 className="text-[#fff] text-xl lg:text-2xl">Contactless Technology</h1></div>
            <p className=" text-[#BDBDBD] px-3 text-sm tracking-wide lg:text-lg lg:pt-4  ">Our new cards come equipped with contactless technology, allowing you to make swift, secure payments with a simple tap.</p>
            
        </section>
        <section>
            <div><img/><h1 className="text-[#fff] text-xl">Personalization</h1></div>
            <p className=" text-[#BDBDBD] px-3 text-sm tracking-wide lg:text-lg lg:pt-4 ">Customize your card to reflect your unique style. Choose from a range of designs that suit your personality.</p>
            
        </section>
        <section>
            <div><img/><h1 className="text-[#fff] text-xl">Enhanced Security</h1></div>
            <p className=" text-[#BDBDBD] px-3 text-sm tracking-wide lg:text-lg lg:pt-4 ">Your peace of mind is our priority. Our cards feature advanced security measures to protect your transactions and data.</p>
            
        </section>
    </div>

    //green section 
    <div>
        <h1>Join over 3 million members</h1>
        <section>
            <hr/>
            ...// this contains the carousel
        </section>
    </div>
    </div>
  );
}

export default GenCards;
