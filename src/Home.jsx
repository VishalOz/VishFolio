import React from 'react'
import Nav from './Nav'


const Home = () => {
  return (
    <>
      <Nav />
      <div className="grid grid-cols-6 grid-rows-7 gap-2 w-[1240px] h-[1496px] p-5">
          <div className="row-span-2 col-span-3 bg-white rounded-4xl p-5">
            <img src="../src/assets/ogdo.png" alt="DpImage" className="w-35 h-50" />
            <p className="mt-4 text-md leading-relaxed text-gray-700">
            I am <span className="font-bold text-indigo-600 text-xl">Vishal</span>, a developer and designer from Sri Lanka.  
            I'm passionate about <span className="font-semibold text-indigo-600">React, Java, .NET</span>.  
            Always curious, I strive to build experiences that are both functional and visually compelling.
            </p>
          </div>
          <div className="row-span-2 col-span-2 bg-white rounded-4xl p-5">

          </div>
          <div className="row-span-2 col-span-1 bg-white rounded-4xl p-5">

          </div>
      </div>
    </>
  )
}

export default Home
