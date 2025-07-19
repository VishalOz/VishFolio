import React from 'react'
import Nav from './Nav.jsx'
import{ useState, useEffect } from 'react'

const Home = () => {
  const [ mode, setMode ] = useState('Toggle Frustration');
  useEffect(() => {

  })

  const handleClick = () => {
    setMode( prevMode => prevMode === 'Toggle Frustration' ? 'Toggle Normal' : 'Toggle Frustration');
  }

  const imageSrc =
    mode === 'Toggle Frustration'
      ? './src/assets/dp2.png' // Frustrated face
      : './src/assets/dp3.png' // Happy face


  return (
    <div>
      <Nav />
      <div className="flex justify-center items-center h-[90vh]">
        <div className="flex flex-cols w-[1100px] h-[400px] bg-gray-100 rounded ">
          <div className="sm-w-100 md-w-200 h-auto bg-white p-10 rounded-4xl shadow-lg">

            <div>
              <button onClick ={handleClick} className=" flex absolute left-125 p-5 cursor-pointer rounded-full shadow-xl border border-gray-200">
                  <img src="./src/assets/refresh.svg" alt="refresh" className="w-5 h-6 mr-2" />{mode}
              </button>
              <img src={imageSrc} alt="Dp" className="w-45 h-60 mb-6 rounded-full" />
              <div>
                <p className="text-gray-700">
                  I'm 
                  <span className="px-1 font-bold text-black text-xl">Vishal</span>, a developer and a product designer from Sri Lanka.<br />
                  I'm interested in React, Java, Python, Content creating and music.
                </p>
              </div>
            </div>
          </div>
          <div className={`w-[200px] h-[200px] bg-yellow-300 rounded-4xl ml-3`}>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
