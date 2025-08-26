'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { usePathname } from 'next/navigation'

const TransitionProvider = ({ children }) => {


    const pathName = usePathname();
    const firstLetter = pathName[1]
    const capitalWord = firstLetter?.toUpperCase() + pathName.slice(2, pathName.length)

    // Set --app-vh custom property to handle mobile viewport height correctly
    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--app-vh', `${vh}px`);
        };
        setVh();
        window.addEventListener('resize', setVh);
        return () => window.removeEventListener('resize', setVh);
    }, []);

    return (
        <AnimatePresence mode='wait'>
            <div key={pathName} className="min-h-full min-w-full dark:bg-slate-600 bg-blue-200 flex flex-col">
                <motion.div
                    className='fixed bg-black rounded-b-[100px] z-40'
                    style={{ height: 'calc(var(--app-vh, 1vh) * 100)', width: '100vw' }}
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }} />

                <motion.div
                    className='fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-40 w-fit h-fit pointer-events-none'
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}>
                    {(pathName == "/") ? "Home" : capitalWord}
                </motion.div>

                <motion.div
                    className='fixed bg-black rounded-t-[100px] bottom-0 z-30'
                    style={{ height: 'calc(var(--app-vh, 1vh) * 100)', width: '100vw' }}
                    initial={{ height: "140vh" }}
                    animate={{ height: "0vh", transition: { delay: 0.5 } }} />

                <div className="h-24">
                    <NavBar />
                </div>
                <div
                    className=""
                    style={{ height: 'calc(var(--app-vh, 1vh) * 100 - 6rem)' }}
                >
                    {children}
                </div>
            </div>
        </AnimatePresence>
    )
}

export default TransitionProvider