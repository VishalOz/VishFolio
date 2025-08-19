import React from 'react';
import work from './assets/work.png';

const Sm = () => {
  return (
    <div className="flex justify-center items-center p-5">
      <div className="relative rounded-3xl bg-transparent backdrop-blur-lg p-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)]  rotate-40">
        <img
          src={work}
          alt="SM"
          className="w-64 h-auto rounded-2xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Sm;
