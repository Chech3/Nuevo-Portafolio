'use client'
import React from 'react'
import { motion } from "framer-motion"

function ContactPage() {
  const variants = {
    variant1: {
      x:100,
      y:100,
      opacity:0.5
    },
    variant2: {
      x:200,
      y:200,
      opacity:0.1
    }
    
  }

  return (
    <div className='h-full flex items-center justify-center'>
      <motion.div className='w-96 h-96 bg-red-400 rounded' initial={{ x: -100 }}
        animate="variant2" variants={variants}  transition={{ duration: 3, delay: 1.5 }} ></motion.div>

    </div>
  )
}

export default ContactPage