import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from './Nav';
import ogdo from './assets/ogdo.png';
import ogdo2 from './assets/ogdo2.png';
import toggleIcon from './assets/toggle.png';
import Projects from './Projects';

const Home = () => {
  const images = [ogdo, ogdo2];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [toggle, setToggle] = useState(false);

  const [theme, setTheme] = useState("dark")

  const handleToggle = () => {
    setToggle(prev => !prev);
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  return (
    <>
      <Nav />
      <div className={`grid grid-cols-6 grid-rows-7 gap-3 w-[1200px] h-[1190px] w-[610px] h-[600px] p-5 ml-27 mt-10`}>
        <div className={`${theme ==='dark' ? 'bg-black' : "bg-white "} row-span-2 col-span-3 bg-white rounded-4xl p-5 relative `}>
          
          {/* Toggle Button */}
          <motion.button
            onClick={handleToggle}
            className="absolute w-43 mx-90 flex items-center gap-2 border border-gray-300 rounded-full px-2 py-1 cursor-pointer hover:border-gray-400 transition-all duration-200"
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={toggleIcon}
              className="w-4"
              animate={{ rotate: toggle ? 360 : 0 }}
              transition={{ duration: 0.5 }}
            />
            Toggle Lockdown
          </motion.button>

          {/* Main Image with Effects */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex} // Ensures image switches smoothly
              src={images[currentIndex]}
              alt="DpImage"
              className="ml-4 w-30 h-37 mb-5 mt-2"
              initial={{ rotate: 180, scale: 0.3, opacity: 0 }}
              animate={{
                rotate: 0,
                scale: 0.8,
                opacity: 1
              }}
              exit={{ rotate: -180, opacity: 0, scale: 0.3}}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Description */}
          <p className="text-md leading-relaxed text-gray-700 mb-4">
            I am <span className="font-bold  text-xl">Vishal</span>, a developer and designer from Sri Lanka.  
            I'm passionate about <span className="text-indigo-600 text-xl">React, Java, .NET</span>.  
            Always curious, I strive to build experiences that are both functional and visually compelling.
          </p>
        </div>

        {/* Empty Grid Boxes */}
        <div className="row-span-2 col-span-1 bg-white rounded-4xl p-5 flex justify-center items-center">
          
        </div>

        <div className="row-span-3 col-span-2 rounded-4xl p-5 bg-emerald-200 flex items-end justify-end relative overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-300 rounded-full opacity-30"></div>
          <div className="absolute top-1/3 left-1/4 w-14 h-14 bg-emerald-400 rounded-full opacity-40"></div>
          <div className="absolute bottom-20 left-16 w-24 h-24 bg-emerald-500 rounded-full opacity-25"></div>
          <div className="absolute top-5 right-20 w-16 h-16 border-4 border-emerald-400 rounded-full opacity-50"></div>
          <div className="absolute bottom-1/3 right-40 w-32 h-8 bg-emerald-300 rotate-12 opacity-20"></div>
          <Projects />
        </div>

        <div className="row-span-1 col-span-1 rounded-4xl p-5 bg-white">

        </div>

        <div className="row-span-1 col-span-2 rounded-4xl p-5 bg-white">

        </div>

        <div className="flex justify-center items-center row-span-1 col-span-1 rounded-4xl p-5 bg-white">
          <div className="flex justify-center items-center bg-gray-100 w-25 h-15 rounded-full cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <motion.div 
              className="bg-black w-15 h-15 rounded-full shadow-md"
              layout
              animate={{ x: theme === "dark" ? -20 : 20 }}  
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            ></motion.div>
            </div>
        </div>



      </div>
    </>
  );
};

export default Home;
