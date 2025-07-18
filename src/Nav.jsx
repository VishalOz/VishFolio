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
    <div className="w-full flex justify-center py-15 px-2">
      <nav
        className="flex overflow-x-auto bg-gray-200 p-2 rounded-full gap-3 text-gray-950 font-bold text-md font-sm scrollbar-hide"
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
            className={`cursor-pointer px-4 py-1 rounded-full whitespace-nowrap transition ${
              selectedIcon === item ? 'bg-white text-black shadow' : ''
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
