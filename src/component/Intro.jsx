import React from 'react'

function Intro() {
  const title = 'Introducing Raft Cards >'
  return (
    <div className="bg-blue-400  text-white md:mx-10 lg:mx-20 py-7">
      <button className='bg-[#4d4a4a] p-2 px-3 rounded-full' >{title}</button>
      <h1>Building the Future of banking.</h1>
    </div>
  );
}

export default Intro