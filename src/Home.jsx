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
      <div className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-3 w-full max-w-[1200px] mx-auto p-5 mt-10 auto-rows-fr`}>
        <motion.div 
        className={`row-span-2 col-span-3 rounded-4xl p-5 relative ${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-white'}`}
          animate={{ opacity: isActive('About') ? 1 : 0.3, scale: isActive('About') ? 1 : 0.97}}
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
              className={`w-5 h-5`}
              animate={{ rotate: toggle ? 360 : 0 }}
              shadow={`bg-indigo-300`}
              transition={{ duration: 0.5 }}
            />
            <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-sm sm:text-base`}>Toggle Lockdown</p>
          </motion.button>

          {/* Main Image with Effects */}
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex} // Ensures image switches smoothly
              src={images[currentIndex]}
              alt="DpImage"
              className="w-24 h-28 sm:w-30 sm:h-37 mb-5 ml-5 mt-10"
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
          className={`row-span-1 col-span-1 sm:row-span-2 sm:col-span-2 lg:row-span-3 lg:col-span-2 rounded-4xl p-5 flex items-end justify-end relative overflow-hidden
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



        <motion.div className={`relative flex justify-center row-span-1 sm:row-span-2 lg:row-span-3 col-span-1 sm:col-span-2 lg:col-span-2 rounded-4xl p-5 
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

        

        {/*   HOW IT STARTED AND HOW IT'S GOING.. */}
        <AnimatePresence>
          {!showDetail && (
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
                  <button 
                  onClick={() => setShowDetail(true)}
                  className={`${theme === "dark" ? "bg-black text-white border border-gray-200 " : "bg-white text-black border border-gray-200 "} hover:border-gray-400 transition duration-300 w-25 px-3 py-1 rounded-full text-sm`}>
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
                    className={`
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

        <motion.div className={`relative overflow-hidden row-span-2 col-span-3 rounded-4xl p-5 ${theme === 'dark' ? 'bg-black border border-gray-300' : 'bg-yellow-200'}`}
        animate={{opacity: isActive('Media') ? 1 : 0.3, scale: isActive('Media') ? 1 : 0.97}}>
          <div className={`${theme === 'dark' ? 'bg-white border border-white' : 'bg-rose-300'} absolute top-1/2 left-1 w-150 h-150 rounded-full opacity-90`}></div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <Sm />
          </div>
        </motion.div>

        <motion.div className={`row-span-2 col-span-3 text-xl rounded-4xl p-8 transition-all duration-300 ${theme === 'dark' ? 'bg-black border border-gray-300 text-white'
          : 'bg-white text-gray-700 shadow-lg'}`}
          animate={{opacity: isActive('') ? 1 : 0.3, scale: isActive('Media') ? 1 : 0.97}}
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
            className={`${theme === 'dark' ? 'bg-gray-200 text-black' : `bg-white text-black border border-1 border-gray-300`} px-3 font-bold text-xl font-bold hover:opacity-70 rounded-full w-25 h-9 flex items-center justify-center
            `}>Submit</button>
            </div>
        </motion.div>
     </div>
    </>
  );
};

export default Home;
