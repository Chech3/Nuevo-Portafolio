'use client'
import React from 'react'
import { motion } from "framer-motion"

function ContactPage() {

  const text = "Hello Friend"
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* text container */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
          <div>
            {text.split("").map((letter, index) =>
            (<motion.span
            className='dark:text-white'
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}>
              {letter}
            </motion.span>)
            )} 😁
          </div>
        </div>
        {/* form container */}
        <form className='h-1/2 lg:h-full lg:w-1/2 dark:bg-slate-400 bg-blue-100 rounded-xl text-xl flex flex-col gap-8 justify-center p-20'>
          <span className=''>Dear Jose</span>
          <textarea className='bg-transparent resize-none border-b-2 border-b-black outline-none' name="" rows={6} />
          <span>My mail address is: </span>
          <input className='bg-transparent border-b-2 border-b-black outline-none' type="text" />
          <span>Regards</span>
          <button className='bg-gray-500 rounded font-semibold p-3 text-white'>Send</button>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactPage