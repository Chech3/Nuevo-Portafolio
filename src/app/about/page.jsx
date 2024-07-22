'use client'
import React from 'react'
import { motion } from "framer-motion"
import TecIcons from '../components/TecIcons'

function AboutPage() {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      {/* container */}
      <div className='dark:bg-slate-600 bg-blue-200'>
        {/* TEXT CONTAINER */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64'>
          {/* Biografia container*/}
          <div className='flex flex-col gap-12 justify-center'>
            <h1 className="font-bold tracking-wide text-2xl dark:text-white">BIOGRAPHY</h1>
            <p className="text-lg dark:text-white tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam,
              reiciendis numquam! Voluptas voluptatibus obcaecati dolore itaque
              suscipit! Vel doloremque numquam quam nihil.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">

              <svg className='dark:bg-white rounded-lg' width="224" height="56" viewBox="0 0 224 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2.65816C7.13677 2.65816 12.5148 3.07764 17.7826 2.98724C23.2925 2.89267 28.6992 2 34.2609 2C42.087 2 49.913 2 57.7391 2C63.1513 2 68.6127 2.65816 74 2.65816" stroke="black" strokeWidth="3" strokeLinecap="round" />
                <path d="M42.5251 2C42.5251 9.84691 45.2115 17.9867 43.3332 25.6787C42.8953 27.4721 41.4894 28.9468 40.3848 30.3518C38.4497 32.8134 36.6452 35.3736 34.7502 37.8646C33.1184 40.0097 30.9476 41.0926 29.0282 42.8508C28.4166 43.411 28.0938 44.5595 27.1937 44.6619C25.6483 44.8377 24.5229 45.2299 22.8258 44.8184C20.7468 44.3143 18.8949 42.7995 16.9291 41.9341C15.4651 41.2896 13.9208 40.5928 12.6485 39.5863C7.48514 35.5015 4 29.9816 4 23.331" stroke="black" strokeWidth="3" strokeLinecap="round" />
                <path d="M53.6825 19.5987C51.3212 23.1663 49.0318 26.9429 49.0006 31.3442C48.9498 38.5142 51.9632 45.2999 57.8875 49.5083C61.5387 52.1019 65.1806 51.0302 68.4651 48.4604C74.5143 43.7276 77.5477 36.3276 76.9185 28.6808C76.6025 24.8397 75.7125 20.3064 71.8031 18.8128C69.7506 18.0286 67.8787 16.7905 65.734 16.2366C64.1976 15.8398 62.4499 16.062 60.8787 16.062C58.8168 16.062 56.2146 15.6265 54.853 17.5465C54.0114 18.7333 53.4174 20.6517 52.512 21.5636" stroke="black" strokeWidth="3" strokeLinecap="round" />
                <path d="M56 18.2356C56.545 21.5703 58.7071 23.1387 61.5519 23.9422C65.58 25.0798 69.4672 26.275 73.6612 26.5725C76.4766 26.7723 77.9086 25.5708 80.0437 23.8976C84.507 20.3999 86.2517 14.7639 90.2732 11.0355C92.3186 9.13917 93.7144 10.083 95.4098 11.9717C100.742 17.9112 105.746 24.1614 109.639 31.1869C112.727 36.7574 113.455 41.7974 110.995 47.7493C108.797 53.0648 102.564 53.217 97.7924 51.1599C95.455 50.1523 82.6339 43.5798 86.6885 39.3232C90.011 35.8352 94.9941 37.0222 98.623 39.4124C103.559 42.6632 107.285 47.6193 112.306 50.7364C116.246 53.1819 124.411 55.7257 128.393 52.4305C132.811 48.7754 134.519 42.2233 134.885 36.6928C135.007 34.8601 136.291 28.2479 133.29 27.8877C130.231 27.5208 127.644 29.882 127.607 32.9924C127.525 39.7449 132.502 46.5323 137.137 50.8478C139.144 52.7172 142.059 52.3413 144.656 52.3413C146.984 52.3413 151.609 53.5293 152 50.7364" stroke="black" strokeWidth="3" strokeLinecap="round" />
                <path d="M139 19C139 17.2142 140.042 15.3698 140.455 13.6475C140.946 11.5976 141.541 9.52179 143 8" stroke="black" strokeWidth="3" strokeLinecap="round" />
                <path d="M173.436 50C172.805 49.2842 173.045 48.2212 173.045 47.3284C173.045 43.0648 173.219 38.9336 173.913 34.7147C175.081 27.6192 175.99 20.1098 177.908 13.1664C178.554 10.8297 179.367 4.33341 182.034 3.18065C183.639 2.4867 186.391 3.97331 187.679 4.58216C190.75 6.03444 194.519 7.51096 197.015 9.92544C203.869 16.5564 204.969 28.02 207.741 36.7294C208.661 39.6222 209 43.3886 209 46.4524" stroke="black" strokeWidth="3" strokeLinecap="round" />
                <path d="M176 29C182.138 29 187.63 27.9349 193.615 26.5278C197.166 25.6929 201.407 25 205 25" stroke="black" strokeWidth="3" strokeLinecap="round" />
                <path d="M218 43C218.412 43.0868 218.165 43.8175 218.587 43.936C219.037 44.0623 219.546 43.9627 220 43.9627" stroke="black" strokeWidth="3" strokeLinecap="round" />
                <path d="M219.584 42.4922C219.584 46.0423 222.24 43.3985 221.982 43.0937C221.356 42.3505 217.735 43.3529 218.015 44.3515C218.402 45.7275 221.47 44.4906 220.645 44.4609C216.058 44.2961 220.401 43.9999 221.244 42" stroke="black" strokeWidth="3" strokeLinecap="round" />
              </svg>

            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className='flex flex-col gap-12 justify-center'>
            <h2 className='font-bold text-2xl dark:text-white'>SKILSS</h2>
            <TecIcons />

          </div>
          {/* EXPERIENCIA CONTAINER */}
          <div className='flex flex-col gap-12 justify-center'>
            <h2 className='font-bold dark:text-white text-2xl'>EXPERIENCE</h2>

          </div>
          {/* SVG CONTAINER */}
        </div>
        <div className='hidden'></div>
      </div>
    </motion.div>
  )
}

export default AboutPage