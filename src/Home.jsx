import React from 'react';
import Nav from './Nav.jsx'


const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-200 min-h-screen p-10">
        <Nav />
        <div className="flex w-[950px] h-[720px] bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-3xl p-5">
          <div className="flex flex-col mr-1">
          <div className="w-[500px] h-[280px] bg-white backdrop-blur-md border border-white/20 rounded-3xl shadow-md rounded-2xl mb-3 p-5">
            <img 
              src="https://i.pinimg.com/564x/1c/f5/36/1cf536c9addd41fa11bf9d7c70f04dbc.jpg" 
              alt="avatar" 
              className="w-35 h-35 rounded-full mb-5" 
            />
            <p className="text-gray-700">
              Hey, I'm <span className="font-bold text-xl">Vishal</span> , a developer and designer from <span className="font-bold">Sri Lanka</span>. I'm passionate about React, Node.js, product design, and vibing to good music.
            </p>
          </div>

            
            <div className="flex flex-rows gap-1">
              <div className="w-[80px] h-[60px] bg-white backdrop-blur-xl border border-white/10 rounded-3xl shadow-md rounded-2xl mb-3 mr-1 flex justify-center items-center cursor-pointer ">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" className="w-10 h-10" />
              </div>
              <div className="w-[80px] h-[60px] bg-white backdrop-blur-xl border border-white/10 rounded-3xl shadow-md rounded-2xl mb-3 mr-1 flex justify-center items-center cursor-pointer">
                <img src="https://pngimg.com/d/linkedIn_PNG27.png" alt="" className="w-10 h-10" />
              </div>
              <div className="w-[80px] h-[60px] bg-white backdrop-blur-xl border border-white/10 rounded-3xl shadow-md rounded-2xl mb-3 mr-1 flex justify-center items-center cursor-pointer">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/413/non_2x/instagram-logo-instagram-icon-transparent-free-png.png" alt="" className="w-18 h-18" />
              </div>
              <div className="w-[80px] h-[60px] bg-white backdrop-blur-xl border border-white/10 rounded-3xl shadow-md rounded-2xl mb-3 flex justify-center items-center cursor-pointer">
                <img src="https://static.vecteezy.com/system/resources/previews/022/613/021/non_2x/google-mail-gmail-icon-logo-symbol-free-png.png" alt="" className="w-10 h-10" />
              </div>
            </div>

            <div className="w-[350px] h-[220px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-md rounded-2xl"></div>
          </div>
          <div className="w-[350px] h-[220px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-md rounded-2xl"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
