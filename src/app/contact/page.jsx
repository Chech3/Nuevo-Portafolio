'use client'
import React, { useState, useRef } from 'react'
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ContactPage() {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Hello friend"

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          form.current.reset();
          // console.log('SUCCESS!');
          setSuccess(true);
          toast.success("Message sent successfully!");
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        },
        () => {
          // console.log('FAILED...', error.text);
          setError(true);
          toast.error("Something went wrong")
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        },
      );
  };


  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <ToastContainer />      
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* text container */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
          <div className='my-10 '>
            {text.split("").map((letter, index) =>
            (<motion.span
              className='dark:text-white duration-300'
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}>
              {letter}
            </motion.span>)
            )}
            <span className='flex justify-center items-center'>😁</span>
          </div>
        </div>
        {/* form container */}
        <form onSubmit={sendEmail} ref={form} className='h-1/2 lg:h-full lg:w-1/2 dark:bg-slate-500 bg-blue-100 rounded-xl text-xl flex flex-col gap-8 justify-center p-24 lg:p-20'>
          <span className='dark:text-white font-semibold duration-300'>Dear Jose</span>
          <textarea name='user_message' className='bg-transparent dark:text-white resize-none border-b-2 border-b-black outline-none' rows={6} />
          <span className='dark:text-white font-semibold duration-300'>My mail address is: </span>
          <input type="email" name='user_email' className='bg-transparent dark:text-white border-b-2 border-b-black outline-none' />
          <span className='dark:text-white font-semibold duration-300 '>Regards</span>
          <button className='font-semilbold p-4 rounded-lg ring-1 bg-blue-300 dark:bg-slate-600 dark:ring-black hover:dark:ring-black ring-black  dark:text-white dark:hover:bg-slate-700 hover:scale-105 hover:bg-blue-400 delay-100 duration-300'>Send</button>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactPage