import React, { useState } from 'react'
import Nav from './Nav'
import { motion, AnimatePresence } from 'framer-motion'

import dp2 from '../src/assets/dp2.png'
import dp1 from '../src/assets/dp3.png'

const Home = () => {
  const images = [dp1, dp2];
  const [imageIndex, setImageIndex] = useState(0);
  const [refreshSpin, setRefreshSpin] = useState(0);


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
      <div className="max-w-7xl min-h-md mx-auto grid grid-cols-6 grid-rows-[repeat(6,minmax(0,auto))] gap-4">

        {/* First box*/ }
        <div className="relative col-span-3 row-span-1 bg-white text-white rounded-4xl px-10 py-6 flex flex-col justify-between items-start shadow-lg">

          {/* Top-right button */}
          <button
            onClick={() => {
              handleImageSwitch();
              setRefreshSpin((prev) => prev + 1);
            }}
            className="absolute top-8 right-6 text-black py-1 px-4 rounded-full border border-gray-300 hover:border-gray-800 cursor-pointer transition flex items-center gap-2"
          >
            <motion.img
              src="../src/assets/refresh.svg"
              alt="toggle"
              className="w-4 h-4"
              animate={{ rotate: refreshSpin * 180 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            Toggle Developer
          </button>


          {/* Image */}
          <div className="sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[200px]flex items-center justify-start overflow-hidden rounded-4xl mb-4 mt-8">

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
            <p className="text-gray-800 text-md font-semibold">
            I am <span className="font-bold text-xl text-black">Vishal</span>, a developer and designer from Sri Lanka.  
            I'm passionate about React, Java, .NET,  
            Always curious, I strive to build experiences that are both functional and visually compelling.

            </p>
          </div>
        </div>

        {/* Second box*/ }
        <div className="sm:w-full sm:h-[369px] md:w-full md:h-[369px] rounded-4xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63322.89988123552!2d79.82967404999999!3d6.921922699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259292084b94b%3A0x810fc39fdce6e0b!2sColombo!5e0!3m2!1sen!2slk!4v1621942393063!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="My Location"
          ></iframe>
        </div>

        {/* Third box*/ }
        <div className="col-span-2 row-span-2 bg-green-200 rounded-4xl p-6 shadow-lg">
        </div>
        {/* Forth box*/ }
        <div className="col-span-1 row-span-1 bg-white rounded-4xl p-6 shadow-lg">
        <a href="https://github.com/VishalOz/" target="_blank" rel="noopener noreferrer">
          <img src="../src/assets/instaog.svg" alt="Insta" className="w-full object-cover"/>
        </a>
        </div>

        <div className="col-span-1 row-span-1 bg-white rounded-4xl p-6 shadow-lg">
          <a href="https://github.com/VishalOz/" target="_blank" rel="noopener noreferrer">
          <img src="../src/assets/githubog.svg" alt="Github" className="w-full object-cover "/>
          </a>
        </div>

        <div className="col-span-2 row-span-1 bg-white rounded-2xl shadow p-6">
          <h4 className="font-4xl">How it started vs. how it's going</h4>
          <p className="text-sm text-gray-500 mb-3">Thu 24 July</p>
          <p>A short personal history as it relates to design and<br/>
          development, and how I've found value in the cross section
          between both disciplines </p>
          <button className="flex mt-3 text-black border text-sm border-gray-300 px-2 py-1 rounded-4xl cursor-pointer hover:bg-gray-100 ">
            <img src="../src/assets/arrow.png" alt="arrow" className="border border-white sm:w-[20px] rounded-full hover:border-gray-300 mr-1"/>
            Read more
          </button>
        </div>

        <div className="col-span-2 row-span-1 bg-white rounded-2xl shadow p-6">
          <h1 className="font-medium">Skill B</h1>
          <p className="text-sm text-gray-500">Tailwind CSS</p>
        </div>

        <div className="col-span-2 row-span-1 bg-white rounded-2xl shadow p-6">
          <h1 className="font-medium">Skill C</h1>
          <p className="text-sm text-gray-500">Framer Motion</p>
        </div>

        <div className="col-span-2 row-span-1 bg-white rounded-2xl shadow p-6">
          <h1 className="font-medium">Skill C</h1>
          <p className="text-sm text-gray-500">Framer Motion</p>
        </div>

        {/* Testimonial Tile */}
        <div className="col-span-3 row-span-2 bg-green-100 rounded-2xl p-6">
          <blockquote className="italic text-green-900">“Nev’s work is professional, beautiful, and impactful.”</blockquote>
          <p className="mt-2 text-sm text-green-800">— Happy Client</p>
        </div>

        <div className="col-span-3 row-span-1 bg-white rounded-2xl shadow p-6">
          <h1 className="font-medium">Skill C</h1>
          <p className="text-sm text-gray-500">Framer Motion</p>
        </div>
        



        <div className="col-span-3 row-span-1 bg-indigo-100 text-indigo-900 rounded-2xl p-6">
          <h1 className="font-semibold text-lg">Let’s Connect</h1>
          <p className="text-sm mt-1">nev@example.com</p>
          <div className="mt-4 flex gap-4">
            <a href="#" className="underline text-sm">LinkedIn</a>
            <a href="#" className="underline text-sm">GitHub</a>
            <a href="#" className="underline text-sm">Instagram</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
