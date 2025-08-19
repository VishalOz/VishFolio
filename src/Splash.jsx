import React from 'react'

const Splash = () => {
  return (
    <div>
        <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 flex items-center justify-center bg-black z-50"
        >
        <motion.img 
            src={ogdo} 
            alt="Logo" 
            className="w-32 h-32"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        />
        </motion.div>
    </div>
  )
}

export default Splash
