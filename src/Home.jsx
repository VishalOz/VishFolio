import React from 'react';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen p-10">
      <div className="flex w-[850px] h-[720px] bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-5">
        <div className="flex flex-col mr-1">
          <div className="w-[300px] h-[350px] bg-yellow-200 rounded-3xl shadow-md rounded-2xl mb-3"></div>
          <div className="flex flex-rows">
            <div className="w-[100px] h-[60px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-md rounded-2xl mb-3 mr-3"></div>
            <div className="w-[100px] h-[60px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-md rounded-2xl mb-3 mr-3"></div>
            <div className="w-[100px] h-[60px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-md rounded-2xl mb-3"></div>
          </div>
          <div className="w-[350px] h-[220px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-md rounded-2xl"></div>
        </div>
        <div className="w-[350px] h-[220px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-md rounded-2xl"></div>
      </div>
    </div>
  );
};

export default Home;
