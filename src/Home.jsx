import React from 'react'
import Nav from './Nav'


const Home = () => {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-6 grid-rows-7 gap-2 w-[520px] h-[608px] p-20">
        <div className="md:col-span-2 sm:col-span-2 md:row-span-2 sm:row-span-2 bg-white shadow-lg rounded-4xl">
          <img src="../src/assets/dp2.png" alt="" className="rounded-full object-cover" />
          <div className="flex justify-center items-center">
            <p className="text-gray-800 text-md font-semibold">
            I am <span className="font-bold text-xl text-black">Vishal</span>, a developer and designer from Sri Lanka.  
            I'm passionate about <span className="font-semibold text-indigo-600">React, Java, .NET</span>,  
            Always curious, I strive to build experiences that are both functional and visually compelling.
            </p>
          </div>
        </div>
        </div>
    </>
  )
}

export default Home
