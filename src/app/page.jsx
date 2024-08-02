'use client'
import Image from "next/image";
import { motion } from 'framer-motion'
import Link from "next/link";
function Home() {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="mb-6 h-full flex flex-col lg:flex-row sm:px-8 md:px-12 md:justify-center md:items-center lg:px-20 xl:px-20">
        {/* image container */}

        <Image alt="Foto" sizes="(max-width: 768px) 100vw, 
        (max-width: 1200px) 50vw, 33vw" priority src="/fotonga.heic" height={500} width={520} className="lg:object-contain mr-3 sm:object-contain sm:flex sm:items-center sm:justify-center " />

        <div className="flex flex-col gap-8 delay-100 items-center justify-center lg:h-full lg:w-1/2">
          <h1 className="tracking-wide text-4xl md:text-6xl font-bold dark:text-white lg:text-start sm:text-center md:text-center text-center ">
            Web Application Developer
          </h1>
          <p className="tracking-wide delay-100 dark:text-white text-center lg:text-start">
          Hi! I'm Jose Angel, a full-stack developer with a wide range of skills. From dynamic user interfaces with React to efficient APIs with FastAPI, my experience in JavaScript, PHP and Python allows me to offer complete solutions.
          </p>
          <div className="w-full flex gap-4 sm:mb-5 md:mb-4 justify-center items-center lg:justify-start lg:items-start">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 dark:ring-white hover:dark:ring-black ring-black  dark:text-white dark:hover:bg-slate-700 hover:scale-105 hover:bg-blue-300 delay-100 duration-300">View my work</button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 dark:ring-white hover:dark:ring-black ring-black  dark:text-white dark:hover:bg-slate-700 hover:scale-105 hover:bg-blue-300 delay-100 duration-300">Contact me</button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Home;
