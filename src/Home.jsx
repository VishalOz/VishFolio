import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity } from "lucide-react";
import Nav from './Nav';
import ogdo from './assets/ogdo-2.png';
import ogdo2 from './assets/ogdo2-2.png';
import toggleIcon from './assets/toggle.png';
import portfolio from  './assets/portfolio.png'
import lifeonland from './assets/lifeonland.png'
import gh from './assets/gh.png';
import gh3 from './assets/gh3.png';
import cw1 from './assets/cw1.png';

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
  const [showDetail1, setShowDetail1] = useState(false);
  const [showDetail2, setShowDetail2] = useState(false);
  const [showDetail3, setShowDetail3] = useState(false);

  const[userInput, setUserInput] = useState("");

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
      <div className={`grid gap-2 grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 auto-rows-[300px] p-30`}>
        
        <motion.div 
        className={`relative col-span-3 sm:col-span-3 md:col-span-2 lg:col-span-2 rounded-4xl
          ${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-white'}`}
          animate={{ opacity: isActive('About') ? 1 : 0.3, scale: isActive('Media') ? 1 : 0.97}}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* Toggle Button */}
          <motion.button
            onClick={handleToggle}
            className={`absolute top-4 right-4 flex items-center gap-2 cursor-pointer border border-gray-300 rounded-full px-3 py-1.5 sm:px-4 sm:py-1
              cursor-pointer hover:border-gray-400 transition-all duration-200 text-sm sm:text-sm`}
              
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={toggleIcon}
              className={`w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ${theme === 'dark' ? 'filter invert' : ''}`}
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
          <p className={`lg:text-md leading-relaxed text-gray-700 mb-4 px-10 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            I am <span className="font-bold text-xl">Vishal</span>, a developer and designer from Sri Lanka.  
            I'm passionate about <span className="text-indigo-600 text-xl">React, Java, C#</span>.  
            Always curious, I strive to build experiences that are both functional and visually compelling.
          </p>

        </motion.div>


        {/* Empty Grid Boxes */}
        <motion.div className={`rounded-4xl col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 p-5
          ${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-white'}`}
          onActive={() => setSelected('Media')}
          animate={{ opacity: isActive('Media') ? 1 : 0.3, scale: isActive('') ? 1 : 0.97 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
            <div className="flex items-center mb-35">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-15 h-15 text-green-500"
              >
                <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm5.498 17.453a.746.746 0 0 1-1.023.246c-2.8-1.71-6.34-2.1-10.488-1.156a.75.75 0 0 1-.327-1.465c4.56-1.02 8.52-.572 11.664 1.27.353.215.465.675.174 1.105zm1.437-3.18a.934.934 0 0 1-1.283.306c-3.207-1.976-8.09-2.55-11.876-1.402a.933.933 0 0 1-.55-1.783c4.29-1.323 9.635-.675 13.337 1.625a.933.933 0 0 1 .372 1.254zm.123-3.333C15.75 8.488 8.25 8.25 4.762 9.32a1.118 1.118 0 1 1-.658-2.14c4.016-1.234 12.25-1.008 16.393 1.676a1.118 1.118 0 0 1-1.14 1.943z" />
              </svg>
            </div>

            {/* Status */}
            <p className={`flex items-center gap-1 text-green-500 text-sm mt-2`}>
              <Activity size={14} className={`animate-pulse`} /> Offline. Last played
            </p>

            {/* Track Info */}
            <div className="mt-1">
              <span className={`text-lg ${theme === 'dark' ? 'text-white' : ''}`}>Lost cause</span>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Billie Eilish</p>
            </div>
        </motion.div>





        <AnimatePresence>
          {!showDetail1 && (
            <motion.div
              className={`rounded-4xl relative row-span-2 col-span-1 sm:col-span-2  md:col-span-2 lg:col-span-1 overflow-hidden
              ${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-emerald-300'}`}
              animate={{ opacity: isActive('Projects') ? 1 : 0.3, scale: isActive('Projects') ? 1 : 0.97 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* Background Circles */}
              <div className={`${theme === 'dark' ? 'bg-white opacity-70' : 'bg-pink-600 opacity-50'}
                absolute top-10 right-1/2 w-72 h-72 rounded-full`}></div>
              <div className={`${theme === 'dark' ? 'bg-white opacity-70' : 'bg-pink-600 opacity-50'} 
                absolute top-1/3 left-1/2 w-64 h-64 rounded-full`}></div>

              {/* Project Component */}
              <div className="absolute right-1/4 bottom-16">
                <Projects />
              </div>

              {/* Button */}
              <div className="absolute bottom-3 right-3">
                <button
                  onClick={() => setShowDetail1(true)}
                  className={`cursor-pointer ${theme === 'dark'
                    ? 'bg-black text-white border border-gray-200'
                    : 'bg-white text-black border border-gray-200'} 
                    hover:border-gray-400 transition duration-300 px-3 py-1 rounded-full text-sm`}
                >
                  View Projects
                </button>
              </div>
            </motion.div>
          )}
          {showDetail1 && (
            <motion.div
              className={`fixed inset-0 z-50 p-10 overflow-auto flex flex-col 
              ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}
              key="project-details"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => setShowDetail1(false)}
                  className={`${theme === 'dark' ? 'bg-gray-200 text-black': 'bg-white text-black'} 
                    text-xl font-bold hover:opacity-70 rounded-full w-11 h-11 flex items-center justify-center`} >
                  ✕
                </button>
              </div>
              {/* Project Details */}
              <div className="space-y-4 mt-25">



              <div className={`grid grid-cols-2 p-6 rounded-3xl shadow-xl border ${theme === 'dark' ? 'bg-white/10 border-white/20 text-white backdrop-blur-lg'
                  : 'bg-white/40 border-gray-200 text-gray-900 backdrop-blur-md'}`} >                
                  <div className="row-span-1 flex justify-center items-center">
                    <img
                      src={portfolio}
                      alt="PROJECT1"
                      className="w-100 h-70 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                <div className="col-span-1 flex flex-col justify-between pl-4">
                  <div>
                    <span className="text-xl font-semibold tracking-relaxed">VishFolio</span>
                    <p className={`flex justify-start text-gray-500 font-bold test-sm`}>August 2025</p>
                    <p className="text-[13px] opacity-80 mt-2">
                    A modern, fully responsive personal Bento box style portfolio built with React, styled with Tailwind CSS, and improved using Framer Motion animations. 
                    </p>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <button
                      className="px-4 py-2 rounded-2xl text-sm font-medium shadow-md 
                      bg-gradient-to-r from-emerald-400 to-emerald-600 text-white 
                      hover:opacity-90 transition-all"
                    >  <a href="https://vishaloz.github.io/LifeOnLandCW-EventsPage-UI-/">Live</a></button>
                    <button className="cursor-pointer px-4 py-2 rounded-2xl text-sm font-medium shadow-md bg-gradient-to-r from-indigo-400 to-indigo-600 text-white
                      hover:opacity-90 transition-all"><a href="https://github.com/VishalOz/LifeOnLandCW-EventsPage-UI-">GitHub</a></button>
                      </div>
                  </div>
                </div>



                <div className={`grid grid-cols-2 p-6 rounded-3xl shadow-xl border ${theme === 'dark' ? 'bg-white/10 border-white/20 text-white backdrop-blur-lg'
                  : 'bg-white/40 border-gray-200 text-gray-900 backdrop-blur-md'}`} >                
                  <div className="col-span-1 flex justify-center items-center">
                    <img
                      src={lifeonland}
                      alt="PROJECT1"
                      className="w-100 h-70 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                <div className="row-span-1 flex flex-col justify-between pl-4">
                  <div>
                    <span className="text-xl font-semibold tracking-relaxed">LifeOnLand</span>
                    <p className={`flex justify-start text-gray-500 font-bold test-sm`}>April 2025</p>
                    <p className="text-[13px] opacity-80 mt-2">
                    A responsive carousel system showcases volunteer events with smooth transitions and thumbnail navigation.
                    </p>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <button
                      className="px-4 py-2 rounded-2xl text-sm font-medium shadow-md 
                      bg-gradient-to-r from-emerald-400 to-emerald-600 text-white 
                      hover:opacity-90 transition-all"
                    >  <a href="https://vishaloz.github.io/LifeOnLandCW-EventsPage-UI-/">Live</a></button>
                    <button className="cursor-pointer px-4 py-2 rounded-2xl text-sm font-medium shadow-md bg-transparent text-black
                      hover:opacity-90 transition-all"><a href="https://github.com/VishalOz/LifeOnLandCW-EventsPage-UI-">GitHub</a></button>
                      </div>
                  </div>
                </div></div>
            </motion.div>
          )}
        </AnimatePresence>




        <motion.div className={`relative flex justify-center p-5
        rounded-4xl relative row-span-2 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1 overflow-hidden
        ${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-sky-300'} overflow-hidden`}
        animate={{opacity: isActive('Media') ? 1 : 0.3, scale: isActive('Media') ? 1 : 0.97}}
        transition={{duration: 0.3, ease: 'easeInOut' }}>
          <div className={`${theme ==='dark' ? 'bg-white border border-white opacity-70' : "bg-rose-600"} absolute top-1 left-1/2 w-100 h-120 rounded-full opacity-40`}></div>
          <div className={`${theme ==='dark' ? 'bg-white border border-white opacity-70' : "bg-rose-600"} absolute top-1/2 right-1/2 w-60 h-60 rounded-full opacity-40`}></div>
          <Median />
          <div className={`absolute bottom-3 right-3`}>
            <button className={`${theme === "dark" ? "bg-black text-white border border-gray-200 " : "bg-white text-black border border-gray-200 "} cursor-pointer hover:border-gray-400 transition duration-300 w-25 px-3 py-1 rounded-full text-sm`}>
              Read more
            </button>
          </div>
        </motion.div>
          
        
        <motion.div className={`sm:col-span-1 md:col-span-1 sm:row-span-1 md:row-span-1 lg:col-span-1 
        row-span-1 col-span-6 p-5
        flex justify-center items-center rounded-4xl  ${theme === 'dark' ? 'bg-black border border-white' : 'bg-sky-300'}`}
          animate={{opacity: isActive('About') ? 1 : 0.3, scale: isActive('About') ? 1 : 0.97 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}>
            <a href="https://www.linkedin.com/in/vishal-sudasinghe/" target="_blank" rel="noopener noreferrer" >
              <h3 className={`font-bold text-[60px] ${theme === 'dark' ? 'text-sky-300' : 'text-white'}`}>in</h3>
            </a>
        </motion.div>

        <motion.div className={`flex justify-center items-center sm:col-span-1 sm:row-span-1 lg:row-span-1 lg:col-span-1 
        row-span-1 col-span-6 rounded-4xl p-5 ${theme === 'dark' ? 'bg-black border border-white' : 'bg-white'}`}
          animate={{opacity: isActive('Projects') ? 1 : 0.3, scale: isActive('Projects') ? 1 : 0.97}}
          transition={{ duration: 0.3, ease: 'easeInOut' }}>
             <a href="https://github.com/VishalOz/" target="_blank" rel="noopener noreferrer">
              <img
                src={gh3}
                alt="GitHub Logo"
                className={`lg:w-30 lg:h-30 sm:w-17 sm:h-17 cursor-pointer ${theme === 'dark' ? 'filter invert' : ''}`} />
            </a>
        </motion.div>

        

        {/*   HOW IT STARTED AND HOW IT'S GOING.. */}
        <AnimatePresence>
          {!showDetail && (
            <motion.div className={`sm:col-span-1 lg:col-span-2 rounded-4xl
              row-span-1 col-span-6 p-10 ${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-white'}`}
            animate={{opacity: isActive('About') ? 1 : 0.3, scale: isActive('Media') ? 1 : 0.97}}>
              <div className="flex justify-center">
                  <span className={`text-xl mb-7 ${theme === "dark" ? "text-white" : "text-gray-700"}`}>How it started vs.how it's going</span>
                </div>
                <div className={`flex justify-center lg:w-130 sm:w-110`}>
                  <p className={`lg:text-md sm-text-sm mb-3 ${theme === "dark" ? "text-white" : "text-gray-700"}`}>
                  I was never the “born IT geek” type. If I had to count all the computer games I've played in my life, I could do it on the fingers of my hands and still have fingers left over.
                  My real interests were in math and physics. I wasn't a prodigy, but I loved them the logic ...
                  </p>
                </div>
                <div className={`flex justify-end text-gray-500 font-bold`}>
                  <p>Tue 12, Aug</p>
                </div>
                <div>
                  <button 
                  onClick={() => setShowDetail(true)}
                  className={`cursor-pointer ${theme === "dark" ? "bg-black text-white border border-gray-200 " : "bg-white text-black border border-gray-200 "} hover:border-gray-400 transition duration-300 w-25 px-3 py-1 rounded-full text-sm`}>
                    Read more
                  </button>
                </div>
            </motion.div>
          )}
          {showDetail && (
            <motion.div className={`fixed inset-0 z-50 p-10 overflow-auto ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
              key="details"
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: 100}}
              transition={{duration: 0.3}}
            >
              <div className={`p-5`}>
                <div className={`flex justify-center items-center mb-25`}>
                  <button 
                    onClick={() => setShowDetail(false)}
                    className={`cursor-pointer
                      ${theme === 'dark' ? 'bg-gray-200 text-black' : `bg-gray-100 text-black`} text-xl font-bold hover:opacity-70 rounded-full w-11 h-11 flex items-center justify-center ml-4`}
                  >
                  ✕
                  </button>
                </div>
                <span className="flex justify-center items-center text-2xl font-bold mb-6">How it started vs. How it's going</span>
              </div>

              <p className="leading-relaxed text-md px-10 ">
              I was never the stereotypical “IT geek.” If I had to count the computer games I've played, I could do it on the fingers of my hands and feet and still have a few fingers left. My interests were always more in math, physics, and problem-solving. I wasn't the best at them, but I truly enjoyed the curiosity they sparked in me.
              After many twists and turns in life, I chose to pursue computer science a field I hadn't touched in over 10 years. To my surprise, diving back into it brought back the same spark I once had when exploring math and physics.
              Now, technology fuels that curiosity again. Every challenge feels like a puzzle waiting to be solved, and each solution opens the door to new possibilities. This is my journey so far and I'm excited to see where it takes me next.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={`flex justify-center items-center sm:col-span-1 sm:row-span-1 lg:row-span-1 lg:col-span-1 
        row-span-1 col-span-6 rounded-4xl p-5 ${theme === 'dark' ? 'bg-black border border-white' : 'bg-white'}`}>
          <div className={`${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-gray-100' } flex justify-center items-center  w-25 h-15 lg:w-25 lg:h-15 rounded-full cursor-pointer`} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <motion.div 
              className={`${theme === 'dark' ? 'bg-white' : 'bg-black' } lg:w-10 lg:h-10 w-12 h-12 rounded-full shadow-md`}
              layout
              animate={{ x: theme === "light" ? -20 : 20 }}  
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            ></motion.div>
            </div>
        </div>

        
        <AnimatePresence>
          {!showDetail3 && (
            <motion.div className={`relative overflow-hidden sm:col-span-1 lg:col-span-2 rounded-4xl
              row-span-1 col-span-6 p-10 p-5 ${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-yellow-200'}`}
            animate={{opacity: isActive('Media') ? 1 : 0.3, scale: isActive('Media') ? 1 : 0.97}}>
              <div className={`${theme === 'dark' ? 'bg-white border border-white' : 'bg-rose-300'} absolute top-1/2 left-1 w-150 h-150 rounded-full`}></div>
              <div className={`${theme === 'dark' ? 'bg-white border border-white' : 'bg-rose-300'} absolute bottom-1/2 left-1 w-60 h-60 rounded-full`}></div>
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <Sm />
              </div>
              <div className={`absolute bottom-3 right-3`}>
                <button 
                onClick ={() => setShowDetail3(true)}
                className={`cursor-pointer ${theme === "dark" ? "bg-black text-white border border-gray-200 " : "bg-white text-black border border-gray-200 "} hover:border-gray-400 transition duration-300 w-29 px-3 py-1 rounded-full text-sm`}>
                  Visit Designs
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {showDetail3 && (
            <motion.div
            className={`fixed inset-0 z-50 p-10 overflow-auto flex flex-col 
            ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}
            key="project-details"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setShowDetail3(false)}
                className={`${theme === 'dark' ? 'bg-gray-200 text-black': 'bg-white text-black'} 
                  text-xl font-bold hover:opacity-70 rounded-full w-11 h-11 flex items-center justify-center`} >
                ✕
              </button>
            </div>
            </motion.div>
          ) }
        </AnimatePresence>
        

        <motion.div className={`sm:col-span-1 lg:col-span-2 rounded-4xl
              row-span-1 col-span-6 p-10 ${theme === 'dark' ? 'bg-black border border-gray-300 text-white'
          : 'bg-white text-gray-700 shadow-lg'}`}
          animate={{opacity: isActive('') ? 1 : 0.3, scale: isActive('Media') ? 1 : 0.97}}
          transition={{duration: 0.3, ease: 'easeInOut' }}>
            {/* Title */}
            <div className="flex justify-center mb-6">
              <span className="font-semibold tracking-wide text-xl">
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
              <div className="flex w-full max-w-md overflow-hidden transition-all duration-300">
                <input
                  type="text"
                  value={userInput}
                  onChange={e => setUserInput(e.target.value)}
                  placeholder="Connect with me ..."
                  className={`border-b-2 border-gray-200 bg-transparent flex-1 px-5 py-3 text-md  ${
                    theme === 'dark'
                      ? 'bg-black text-white placeholder-gray-400'
                      : 'bg-white text-gray-700 placeholder-gray-500'
                  }`}
                />
              </div>
            </div>
            <div className={`flex-start mt-4`}>
            <button 
            onClick={() => {
              const email = "oshadavishal392@gmail.com";
              const subject = "Subscription";
              const body = `User message: ${userInput}`;
              window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }}
            className={`cursor-pointer ${theme === 'dark' ? 'bg-gray-200 text-black' : `bg-white text-black border border-1 border-gray-300`} px-3 font-bold text-sm font-bold hover:opacity-70 hover:border-gray-600 rounded-full w-25 h-7 flex items-center justify-center
            `}>Submit</button>
            </div>
        </motion.div>
     </div>
    </>
  );
};

export default Home;
