import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from './Nav';
import ogdo from './assets/ogdo-2.png';
import ogdo2 from './assets/ogdo2-2.png';
import toggleIcon from './assets/toggle.png';
import gh from './assets/gh.png';
import gh2 from './assets/gh2.png';
import Projects from './Projects';
import Median from './Median';
import Sm from './Sm';

const Home = () => {
  const images = [ogdo, ogdo2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState("light");

  const [selected, setSelected] = useState('All');

  const [showDetail, setShowDetail] = useState(false);

  const isActive = (category) => {
    return selected === "All" || selected === category;
  }

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleToggle = () => {
    setToggle(prev => !prev);
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  return (
    <>
      <Nav selected={selected} setSelected={setSelected}/>
      <div className={`grid grid-cols-6 grid-rows-7 gap-3 w-[1200px] h-[1190px] w-[610px] h-[600px] p-5 ml-27 mt-10`}>
        <motion.div 
        className={`row-span-2 col-span-3 rounded-4xl p-5 relative ${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-white'}`}
          animate={{ opacity: isActive('About') ? 1 : 0.3, scale: isActive('Media') ? 1 : 0.97}}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* Toggle Button */}
          <motion.button
            onClick={handleToggle}
            className="absolute w-43 mx-90 flex items-center gap-2 border border-gray-300 rounded-full px-2 py-1 cursor-pointer hover:border-gray-400 transition-all duration-200"
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={toggleIcon}
              className={`w-4`}
              animate={{ rotate: toggle ? 360 : 0 }}
              shadow={`bg-indigo-300`}
              transition={{ duration: 0.5 }}
            />
            <p className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>Toggle Lockdown</p>
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
          <p className={`text-md leading-relaxed text-gray-700 mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            I am <span className="font-bold text-xl">Vishal</span>, a developer and designer from Sri Lanka.  
            I'm passionate about <span className="text-indigo-600 text-xl">React, Java, .NET</span>.  
            Always curious, I strive to build experiences that are both functional and visually compelling.
          </p>

        </motion.div>


        {/* Empty Grid Boxes */}
        <div className={`row-span-2 col-span-1 rounded-4xl p-5 flex justify-center items-center ${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-white'}`}>
          
        </div>

        <motion.div
          className={`row-span-3 col-span-2 rounded-4xl p-5 flex items-end justify-end relative overflow-hidden
          ${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-emerald-300'}`}
          animate={{ opacity: isActive('Projects') ? 1 : 0.3, scale: isActive('Projects') ? 1 : 0.97}}
          transition={{ duration: 0.3, ease: 'easeInOut' }}>

          <div className={`${theme === 'dark' ? 'bg-white border border-white opacity-70' : 'bg-pink-600'}
            absolute top-10 right-1/2 w-80 h-90 rounded-full opacity-50`}></div>
          
          <div
            className={`${theme === 'dark' ? 'bg-white border border-white opacity-70' : 'bg-pink-600'} 
              absolute top-1/3 left-1/2 w-80 h-80 rounded-full opacity-50`}>
          </div>
          
          <div className="absolute right-1/4">
            <Projects />
          </div>
          
          <div className="absolute bottom-3 right-3">
            <button
              className={`${theme === 'dark'
                ? 'bg-black text-white border border-gray-200'
                : 'bg-white text-black border border-gray-200'} 
                hover:border-gray-400 transition duration-300 w-30 px-2 py-1 rounded-full text-sm`}
            >
              View Projects
            </button>
          </div>
        </motion.div>

        <motion.div className={`relative flex justify-center row-span-3 col-span-2 rounded-4xl p-5 
        ${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-sky-300'} overflow-hidden`}
        animate={{opacity: isActive('Media') ? 1 : 0.3, scale: isActive('Media') ? 1 : 0.97}}
        transition={{duration: 0.3, ease: 'easeInOut' }}>
          <div className={`${theme ==='dark' ? 'bg-white border border-white opacity-70' : "bg-rose-600"} absolute top-1 left-1/2 w-100 h-120 rounded-full opacity-40`}></div>
          <div className={`${theme ==='dark' ? 'bg-white border border-white opacity-70' : "bg-rose-600"} absolute top-1/2 right-1/2 w-60 h-60 rounded-full opacity-40`}></div>
          <Median />
          <div className={`absolute bottom-3 right-3`}>
            <button className={`${theme === "dark" ? "bg-black text-white border border-gray-200 " : "bg-white text-black border border-gray-200 "} hover:border-gray-400 transition duration-300 w-25 px-3 py-1 rounded-full text-sm`}>
              Read more
            </button>
          </div>
        </motion.div>
          
        

        <div className={`flex justify-center items-center row-span-1 col-span-2 rounded-4xl p-5 
        ${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-white'}`}>
          
        </div>

        <motion.div className={`row-span-2 col-span-3 rounded-4xl p-10 ${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-white'}`}
        animate={{opacity: isActive('About') ? 1 : 0.3, scale: isActive('Media') ? 1 : 0.97}}>
          <div className="flex justify-center">
              <span className={`text-xl mb-7 ${theme === "dark" ? "text-white" : "text-gray-700"}`}>How it started vs.how it's going</span>
            </div>
            <div className={`flex justify-center w-130`}>
              <p className={`text-md leading-relaxed mb-3 ${theme === "dark" ? "text-white" : "text-gray-700"}`}>
              I was never the “born IT geek” type. If I had to count all the computer games I've played in my life, I could do it on the fingers of my hands and still have fingers left over.
              My real interests were in math and physics. I wasn't a prodigy, but I loved them the logic ...
              </p>
            </div>
            <div className={`flex justify-end text-gray-500 font-bold`}>
              <p>Tue 12, Aug</p>
            </div>
            <div>
              <button className={`${theme === "dark" ? "bg-black text-white border border-gray-200 " : "bg-white text-black border border-gray-200 "} hover:border-gray-400 transition duration-300 w-25 px-3 py-1 rounded-full text-sm`}>
                Read more
              </button>
            </div>
        </motion.div>
          

        <motion.div className={`flex justify-center items-center row-span-1 col-span-1 rounded-4xl p-5 ${theme === 'dark' ? 'bg-black border border-white' : 'bg-white'}`}
          animate={{opacity: isActive('Projects') ? 1 : 0.3, scale: isActive('Projects') ? 1 : 0.97}}
          transition={{ duration: 0.3, ease: 'easeInOut' }}>
             <a href="https://github.com/VishalOz/" target="_blank" rel="noopener noreferrer">
              <img
                src={gh2}
                alt="GitHub Logo"
                className={`w-25 h-25 cursor-pointer ${theme === 'dark' ? 'filter invert' : ''}`} />
            </a>
        </motion.div>

        <div className={`flex justify-center items-center row-span-1 col-span-1 rounded-4xl p-5 ${theme === 'dark' ? 'bg-black border border-white' : 'bg-white'}`}>
          <div className={`${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-gray-100' } flex justify-center items-center  w-25 h-15 rounded-full cursor-pointer`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <motion.div 
              className={`${theme === 'dark' ? 'bg-white' : 'bg-black' } w-15 h-15 rounded-full shadow-md`}
              layout
              animate={{ x: theme === "light" ? -20 : 20 }}  
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            ></motion.div>
            </div>
        </div>

        <div className={`relative overflow-hidden row-span-2 col-span-3 rounded-4xl p-5 ${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-yellow-300'}`}>
          <div className={`${theme === 'dark' ? 'bg-white border border-white' : 'bg-rose-300'} absolute top-1/2 left-1 w-150 h-150 rounded-full opacity-90`}></div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <Sm />
          </div>
        </div>

        <motion.div className={`row-span-2 col-span-3 text-xl rounded-4xl p-8 transition-all duration-300 ${theme === 'dark' ? 'bg-black border border-gray-300 text-white'
          : 'bg-white text-gray-700 shadow-lg'}`}
          animate={{opacity: isActive('About') ? 1 : 0.3, scale: isActive('Media') ? 1 : 0.97}}
          transition={{duration: 0.3, ease: 'easeInOut' }}>
            {/* Title */}
            <div className="flex justify-center mb-6">
              <span className="font-semibold tracking-wide">
                Shall I keep you in the Loop?
              </span>
            </div>

              {/* Description */}
            <div>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-md text-center mb-7 px-3 leading-relaxed`}>
                Content includes articles, early access to products, and ongoing
                learnings.
              </p>
            </div>

              {/* Email Input */}
            <div className="flex justify-center">
              <div className="flex w-full max-w-md rounded-full overflow-hidden border border-gray-300 focus-within:border-gray-500 transition-all duration-300">
                <input
                  type="email"
                  placeholder="Email address..."
                  className={`flex-1 px-5 py-3 text-sm outline-none ${
                    theme === 'dark'
                      ? 'bg-black text-white placeholder-gray-400'
                      : 'bg-white text-gray-700 placeholder-gray-500'
                  }`}
                />
              </div>
            </div>
        </motion.div>
     </div>
    </>
  );
};

export default Home;
