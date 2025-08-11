import React from 'react';
import Folio from './assets/siri.gif'

const Projects = () => {
  return (
    <div className="transform rotate-10">
      <div className="flex flex-col justify-center items-center p-4 bg-purple-50 w-64 h-110 rounded-3xl shadow-xl hover:rotate-3 transition-transform duration-300">
        <img src={Folio} alt="Project preview" className="w-20 h-20 object-cover mb-4 rounded-full shadow-md" />
        <h1 className="font-bold text-lg mb-2">View the Projects</h1>
        <p className="text-sm text-gray-600 text-center mb-4 px-2">
          These are some projects that I've been working on. Click the button to view them.
        </p>
        <button className="bg-pink-400 px-6 py-2 rounded-lg text-white font-bold shadow-md hover:bg-pink-500 transition">
          Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
