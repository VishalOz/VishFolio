import React from 'react';
import { motion } from 'framer-motion';

const Nav = ({ selected, setSelected }) => {
  const navItems = ['All', 'About', 'Projects', 'Media'];

  return (
    <div className="flex justify-center w-full">
      <nav className="relative flex justify-center items-center gap-1 bg-gray-200 rounded-full p-4 w-80 text-sm">
        {navItems.map((item) => (
          <div key={item} className="relative hover:text-gray-400">
            {selected === item && (
              <motion.div
                layoutId="nav-highlight"
                className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-10 rounded-full bg-white shadow-md"
                transition={{ type: 'spring', stiffness: 500, damping: 60 }}
              />
            )}
            <a
              onClick={() => setSelected(item)}
              className={`relative items-center cursor-pointer px-4 py-1 rounded-full transition duration-200 z-10 ${selected === item ? 'text-black' : ''}`}
            >
              {item}
            </a>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
