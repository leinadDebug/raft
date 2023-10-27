import React, { useState } from "react";

function FAQ() {
   
    const [isclicked, setIsClicked] = useState(false)
    const [isclicked1, setIsClicked1] = useState(false)
    const [isclicked2, setIsClicked2] = useState(false)
    const [isclicked3, setIsClicked3] = useState(false)

   

  return (
    <div>
        <h1 className="text-white text-3xl lg:text-6xl leading-relaxed tracking-wide">
            Frequently asked quustions
        </h1>
        <div className="text-white">
                <h2 onClick={()=>setIsClicked(!isclicked)}>
                How do i create an account with RAFT
                <hr />
                <p className={`${isclicked ? 'flex':'hidden'}`}>well they are all customized</p>
                <p></p>
                </h2>
                <h2 onClick={()=>setIsClicked1(!isclicked1)}>
                How do RAFT ensure the security of my financial data?
                <hr />
                <p className={`${isclicked1 ? 'flex':'hidden'}`}>well they are all customized</p>
                </h2>
                <h2 onClick={()=>setIsClicked2(!isclicked2)}>
                What type of transactions can i perform with RAFT
                <hr />
                <p className={`${isclicked2 ? 'flex':'hidden'}`}>well they are all customized</p>
                </h2>
                <h2 onClick={()=>setIsClicked3(!isclicked3)}>
                What benefits does RAFT offer for wealth management
                <hr />
                <p className={`${isclicked3 ? 'flex':'hidden'}`}>well they are all customized</p>
                </h2>
        </div>
    </div>
  );
}

export default FAQ;
