'use client'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import NavBar from './NavBar'
import { usePathname } from 'next/navigation'

const TransitionProvider = ({ children }) => {

    const pathName = usePathname();
    return (
        <AnimatePresence mode='wait'>
            <div key={pathName} className="min-h-full min-w-full  dark:bg-slate-600 bg-blue-200 flex flex-col">
                <motion.div
                    className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40 '
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }} />

                <motion.div
                    className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-40 w-fit h-fit pointer-events-none'
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}> {(pathName == "/") ? "home" : pathName.substring(1)} </motion.div>
                <motion.div
                    className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30 '
                    inital={{ height: "140vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.5 } }} />
                <div className="h-24">
                    <NavBar />
                </div>
                <div className="sm:h-[calc(130vh-6rem)] md:h-[calc(130vh-6rem)] lg:h-[calc(100vh-6rem)] xl:h-[calc(100vh-6rem)] ">
                {/* <div className="h-[calc(130vh-6rem)]"> */}
                    {children}
                </div>
            </div>
        </AnimatePresence>
    )
}

export default TransitionProvider