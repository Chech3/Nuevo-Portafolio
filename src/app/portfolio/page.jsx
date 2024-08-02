'use client'
import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { items } from './data.js';

function PortFolioPage() {

  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  // class="w-screen animated-background h-screen bg-gradient-to-r from-blue-500 via-blue-500 to-indigo-500" 

  return (
    <motion.div className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className='h-[600vh] relative' ref={ref}>
        <p className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center dark:text-white'>
          My works
        </p>

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r dark:from-blue-500 dark:via-blue-500 dark:to-indigo-500 from-blue-300 to-red-300`} />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center animated-background bg-gradient-to-r ${item.color} `}
                key={item.id}
              >
                <div className="flex flex-col text-white">
                  <h3 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-6xl text-black dark:text-white lg:text-center">
                    {item.title}
                  </h3>
                  <div className="my-1 relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[400px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] dark:text-white text-black">
                    {item.desc}
                  </p>
                  <Link target="_blank" href={item.link} className="flex justify-end my-2">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-slate-700 text-white font-semibold mb-4 rounded transition ease-in-out hover:-translate-y-1 hover:bg-slate-800 hover:scale-110 delay-150 duration-300">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>


      <div className=" w-screen h-screen bg-white flex flex-col gap-16 items-center justify-center text-center">
        <h3 className="text-8xl mt-10">Do you have a project?</h3>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end and Back-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default PortFolioPage