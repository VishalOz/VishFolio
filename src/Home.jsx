import React, { useState } from 'react'
import Nav from './Nav'
import { motion, AnimatePresence } from 'framer-motion'

import dp1 from '../src/assets/dp2.png'
import dp2 from '../src/assets/dp3.png'

const Home = () => {
  const images = [dp1, dp2];
  const [imageIndex, setImageIndex] = useState(0);

  const handleImageSwitch = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const variants = {
    initial: {
      opacity: 0,
      scale: 0.2,
      rotate: -180,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.2,
      rotate: 360,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Nav />
      <div className="max-w-7xl mx-auto grid grid-cols-6 grid-rows-6 gap-4"> 
        {/* First box*/ }
        <div className="relative col-span-2 row-span-2 bg-white text-white rounded-2xl p-6 flex flex-col justify-between items-start">

          {/* Top-right button */}
          <button
            onClick={handleImageSwitch}
            className="absolute top-4 right-4 text-black py-1 px-4 rounded-full border border-gray-300 hover:border-gray-800 cursor-pointer  transition"
          >
            Toggle
          </button>

          {/* Image */}
          <div className="w-[200px] h-[240px] flex items-center justify-start overflow-hidden rounded-2xl mb-4 mt-8">
            <AnimatePresence mode="wait">
              <motion.img
                key={imageIndex}
                src={images[imageIndex]}
                alt="Profile"
                className="w-[180px] h-[260px] object-fit rounded-full"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            </AnimatePresence>
          </div>

          {/* Text */}
          <div className="flex justify-center items-center">
            <p className="text-gray-600 text-md font-semibold">
            I am <span className="font-bold text-xl text-black">Vishal</span>, a developer and designer from Sri Lanka.  
            I'm passionate about <span className="font-semibold text-indigo-600">React, Java, .NET</span>, and I enjoy blending code with creativity through <span className="font-semibold text-indigo-600">cinematography</span> and <span className="font-semibold text-indigo-600">music</span>.  
            Always curious, I strive to build experiences that are both functional and visually compelling.

            </p>
          </div>
        </div>

        {/* Second box*/ }
        <div className="col-span-2 row-span-2 bg-green-200 rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800">Blog Highlight</h3>
          <p className="text-gray-600 mt-2">“My journey into UX design and development.”</p>
        </div>
      </div>
    </div>
  )
}

export default Home
