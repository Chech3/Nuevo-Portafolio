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

  return (
    <motion.div className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}>
      <div className='h-[600vh] relative' ref={ref}>
        <p className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center dark:text-white duration-300'>
          My works
        </p>

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r dark:from-blue-500 dark:via-blue-500 dark:to-indigo-500 from-blue-300 to-red-300`} />
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
              >
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4">
                  <h3 className="text-2xl font-bold mb-6 md:text-4xl lg:text-5xl text-black dark:text-white">
                    {item.title}
                  </h3>
                  <div className="relative w-full aspect-video max-w-2xl mb-6">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <p className="text-sm md:text-base lg:text-lg mb-8 text-black dark:text-white">
                    {item.desc}
                  </p>
                  <Link href={item.link} target="_blank">
                    <button className="px-6 py-3 text-sm md:text-base lg:text-lg bg-slate-700 text-white font-semibold rounded transition ease-in-out hover:-translate-y-1 hover:bg-slate-800 hover:scale-105 duration-300">
                      Ver Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
            <div
              className={`h-screen w-screen flex items-center justify-center animated-background bg-gradient-to-r from-red-300 to-blue-300 dark:from-purple-500 dark:via-indigo-500 dark:to-blue-500`}
            />
          </motion.div>
        </div>
      </div>


      <div className=" w-screen h-screen bg-blue-200 dark:bg-slate-600 flex flex-col gap-16 items-center justify-center text-center">
        <h3 className="text-8xl mt-10 dark:text-white">Do you have a project?</h3>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text className="dark:invert" fill="#000">
              <textPath className="text-xl" xlinkHref="#circlePath">
                Front-end and Back-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black dark:bg-white dark:text-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default PortFolioPage