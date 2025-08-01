import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { motion, AnimatePresence } from 'framer-motion';

import dp2 from '../src/assets/dp2.png';
import dp1 from '../src/assets/dp3.png';

const Home = () => {
  const images = [dp1, dp2];
  const [imageIndex, setImageIndex] = useState(0);
  const [refreshSpin, setRefreshSpin] = useState(0);
  const [mode, setMode] = useState("Light");

  useEffect(() => {
    if (mode === 'Dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  const handleImageSwitch = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const modeChange = () => {
    setMode((prev) => (prev === "Dark" ? "Light" : "Dark"));
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
      <div className="max-w-7xl min-h-md mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

        {/* First Box */}
        <div className="relative col-span-3 row-span-1 bg-white text-white rounded-4xl px-10 py-6 flex flex-col justify-between items-start shadow-lg">
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

          <div className="w-full flex items-center justify-start overflow-hidden rounded-4xl mb-4 mt-8">
            <AnimatePresence mode="wait">
              <motion.img
                key={imageIndex}
                src={images[imageIndex]}
                alt="Profile"
                className="w-32 h-32 sm:w-40 md:w-44 md:h-52 object-cover rounded-full"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center">
            <p className="text-gray-800 text-md font-semibold">
              I am <span className="font-bold text-xl text-black">Vishal</span>, a developer and designer from Sri Lanka.  
              I'm passionate about React, Java, .NET,  
              Always curious, I strive to build experiences that are both functional and visually compelling.
            </p>
          </div>
        </div>

        {/* Second Box: Map */}
        <div className="w-full aspect-video rounded-4xl overflow-hidden shadow-lg">
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

        {/* Third Box */}
        <div className="relative col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 bg-emerald-200 rounded-4xl p-6 shadow-lg overflow-hidden">
          <div className="absolute -top-20 -right-20 w-50 h-50 bg-gray-100 rounded-full"></div>
          <div className="w-[90%] h-[130px] bg-transparent rounded-4xl p-6 mt-10 relative z-10"></div>
          <div className="absolute -bottom-20 -right-20 w-100 h-90 bg-pink-200 rounded-full"></div>
        </div>

        {/* Fourth Box */}
        <div className="col-span-1 sm:col-span-1 row-span-1 sm:row-span-1 bg-white rounded-4xl p-6 shadow-lg">
          <a href="https://github.com/VishalOz/" target="_blank" rel="noopener noreferrer">
            <img src="../src/assets/githubog.svg" alt="Github" className="w-full max-w-[150px] mx-auto object-contain" />
          </a>
        </div>

        <div className="col-span-2 row-span-1 bg-white rounded-2xl shadow p-6">
          <h4 className="font-4xl">How it started vs. how it's going</h4>
          <p className="text-sm text-gray-500 mb-3">Thu 24 July</p>
          <p>
            A short personal history as it relates to design and<br />
            development, and how I've found value in the cross section
            between both disciplines
          </p>
          <button className="flex mt-3 text-black border text-sm border-gray-300 px-2 py-1 rounded-4xl cursor-pointer hover:bg-gray-100 ">
            <img src="../src/assets/arrow.png" alt="arrow" className="w-5 sm:w-6 border border-white rounded-full hover:border-gray-300 mr-1" />
            Read more
          </button>
        </div>

        <div className="flex justify-center items-center col-span-1 sm:col-span-1 row-span-1 sm:row-span-1 bg-white rounded-4xl p-6 shadow-lg">
          <button
            onClick={modeChange}
            className="px-4 py-2 rounded-full font-semibold shadow-md transition-colors">
            {mode === "Dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
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

        <div className="relative col-span-1 sm:col-span-2 md:col-span-3 row-span-1 bg-emerald-200 rounded-2xl p-6">
          <blockquote className="italic text-green-900">“Vish’s work is professional, beautiful, and impactful.”</blockquote>
          <p className="mt-2 text-sm text-green-800">— Happy Client</p>
        </div>

        <div className="col-span-3 row-span-1 bg-white rounded-2xl shadow p-6">
          <h1 className="font-medium">Skill C</h1>
          <p className="text-sm text-gray-500">Framer Motion</p>
        </div>

        <div className="col-span-3 row-span-1 bg-indigo-100 text-indigo-900 rounded-2xl p-6">
          <h1 className="font-semibold text-lg">Let’s Connect</h1>
          <p className="text-sm mt-1">oshadavishal392@gmail.com</p>
          <div className="mt-4 flex gap-4">
            <a href="#" className="underline text-sm">LinkedIn</a>
            <a href="#" className="underline text-sm">GitHub</a>
            <a href="#" className="underline text-sm">Instagram</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
