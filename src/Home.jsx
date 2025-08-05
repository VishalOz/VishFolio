import React from 'react'
import {useState, useEffect} from 'react';
import Nav from './Nav'


const Home = () => {

  const [image, setImage] = useState([]);

  const images = [
    '../src/assets/ogdo.png',
    '../src/assets/ogdo.png'
  ];

  return (
    <>
      <Nav />
      <div className="grid grid-cols-6 grid-rows-7 gap-3 w-[1200px] h-[1190px] p-5 ml-27 mt-10">
          <div className="row-span-2 col-span-3 bg-white rounded-4xl p-5">
            <button className="absolute mx-90 flex items-center gap-2 border
             border-gray-300 rounded-full px-2 py-1 cursor-pointer hover:border-gray-400 transition-all duration-200">
              <img src="../src/assets/toggle.png" className="w-4"/>Toggle Lockdown</button>
            <img src="../src/assets/ogdo.png" alt="DpImage" className="w-30 h-45" />
            <p className="text-md leading-relaxed text-gray-700">
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
