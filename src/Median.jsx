import React from 'react'
import Mlogo from './assets/Mlogo.png'
import philo from './assets/philo.jpg'
import philo2 from './assets/philo2.jpg'

const Median = () => {
  return (
    <div className={`rotate-30`}>
        <div className={`w-70 h-110 rounded-3xl shadow-xl bg-white p-5`}>
            <img src={Mlogo} alt="median" className={`w-20`} />
            <p className={`text-sm text-gray-600 text-center mb-4 px-2`}>I've been putting my thoughts, ideas, and experiments into words, here's a collection of my Medium articles.
             Take a moment to explore and see what catches your interest!</p>
             <img src={philo} alt="philo" className={`w-full h-35 rounded-4xl mb-3 shadow-xl`} />

        </div>
    </div>
  )
}

export default Median
