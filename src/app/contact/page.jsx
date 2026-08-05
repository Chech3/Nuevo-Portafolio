'use client'
import React, { useRef } from 'react'
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  user_message: Yup.string().required('Message is required'),
  email: Yup.string().email('Please enter a valid email address').required('Mail is required'),
});

function ContactPage() {
  const text = "Hello Friend"
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      user_message: form.current.user_message.value,
      email: form.current.user_email.value,
    };

    try {
      await validationSchema.validate(formData, { abortEarly: false });

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );

      form.current.reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      if (error.name === 'ValidationError') {
        error.inner.forEach((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <motion.div className="h-full overflow-y-auto" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <ToastContainer />
      <div className='min-h-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-8 gap-8 lg:gap-12'>
        {/* text container */}
        <div className='w-full lg:w-1/2 flex flex-col items-center justify-center text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold py-4 lg:py-0'>
          <div className='flex items-center justify-center flex-wrap'>
            {text.split("").map((letter, index) => (
              <motion.span
                className='dark:text-white text-black duration-300 inline-block'
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
          <span className='mt-4 text-4xl sm:text-5xl'>😁</span>
        </div>

        {/* form container */}
        <form onSubmit={sendEmail} ref={form} className='w-full lg:w-1/2 dark:bg-slate-500 bg-blue-100 rounded-xl text-lg sm:text-xl flex flex-col gap-6 sm:gap-8 justify-center p-6 sm:p-10 md:p-14 lg:p-16'>
          <span className='dark:text-white text-black font-semibold duration-300'>Dear Jose</span>
          <textarea name='user_message' className='bg-transparent text-black dark:text-white resize-none border-b-2 border-b-black dark:border-b-white outline-none w-full p-2' rows={5} />
          <span className='dark:text-white text-black font-semibold duration-300'>My mail address is: </span>
          <input type="email" name='user_email' className='bg-transparent text-black dark:text-white border-b-2 border-b-black dark:border-b-white outline-none w-full p-2' />
          <span className='dark:text-white text-black font-semibold duration-300 '>Regards</span>
          <button className='font-semibold p-4 rounded-lg ring-1 bg-blue-300 dark:bg-slate-600 dark:ring-white ring-black dark:text-white text-black hover:dark:bg-slate-700 hover:scale-105 hover:bg-blue-400 delay-100 duration-300'>Send</button>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactPage;
