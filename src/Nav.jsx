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
    <div className="w-full flex justify-center py-4">
      <nav className="flex bg-gray-200 p-2 rounded-full gap-3 text-gray-700 text-md font-sm">
        {navBar.map((item) => (
          <a
            key={item}
            href={formatLink(item)}
            onClick={(e) => {
              e.preventDefault(); // Stop default jump
              setSelectedIcon(item);
              const target = document.querySelector(formatLink(item));
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' }); // Scroll to section
              }
            }}
            className={`cursor-pointer px-3 py-1 rounded-full transition ${
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
