import React from 'react';

const Nav = () => {
  return (
    <div className="w-full flex justify-center py-4">
      <nav className="flex bg-gray-200 p-2 rounded-full  gap-8 text-gray-700 text-md font-medium">
        <a  className="ml-5" href="#">All</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a className="mr-5" href="#">Media</a>
      </nav>
    </div>
  );
};

export default Nav;
