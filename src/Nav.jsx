import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [selectedIcon, setSelectedIcon] = useState('All');

  useEffect(() => {
    console.log({ selectedIcon });
  }, [selectedIcon]);

  const navBar = ['All', 'About', 'Projects', 'Media'];

  const formatLink = (item) =>
    item.toLowerCase() === 'all' ? '#all' : `#${item.toLowerCase()}`;

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-8 py-4 bg-transparent z-50">
      <nav
        className="flex max-w-full overflow-x-auto bg-gray-200 p-2 rounded-full gap-3 text-gray-950 font-semibold text-sm sm:text-base scrollbar-hide no-scrollbar"
      >
        {navBar.map((item) => (
          <a
            key={item}
            href={formatLink(item)}
            onClick={(e) => {
              e.preventDefault();
              setSelectedIcon(item);
              const target = document.querySelector(formatLink(item));
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`cursor-pointer px-4 py-1 rounded-full whitespace-nowrap transition duration-200 ${
              selectedIcon === item ? 'bg-white text-black shadow-md' : 'hover:bg-white/70'
            }`}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
