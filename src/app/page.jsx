'use client'
import Image from "next/image";
import { motion } from 'framer-motion'
function Home() {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      <div className="m-4 h-full flex flex-col lg:flex-row sm:px-8 md:px-12 md:justify-center md:items-center lg:px-20 xl:px-20">
        {/* image container */}

        <Image alt="Foto" sizes="(max-width: 768px) 100vw, 
        (max-width: 1200px) 50vw, 33vw" priority src="/fotonga.heic" height={500} width={520} className="object-contain mr-3" />

        <div className="flex flex-col gap-8 items-center justify-center lg:h-full lg:w-1/2 lg: my-5">
          <h1 className=" tracking-wide text-4xl font-bold dark:text-white ">
            Holas ipsum, dolor sit amet consectetur
          </h1>
          <p className="tracking-wide dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo ipsa, id, nemo necessitatibus velit ipsum ratione, quasi praesentium esse a quos quas debitis aspernatur totam facilis eveniet! Modi explicabo id officiis necessitatibus autem animi praesentium, optio molestias repellat vero dolore.</p>
          <div className="w-full flex gap-4 sm:mb-5 md:mb-4">
            <button className="p-4 rounded-lg ring-1 dark:ring-white hover:dark:ring-black ring-black  dark:text-white dark:hover:bg-slate-700 hover:scale-105 hover:bg-blue-300 delay-100 duration-300">View my work</button>
            <button className="p-4 rounded-lg ring-1 dark:ring-white hover:dark:ring-black ring-black  dark:text-white dark:hover:bg-slate-700 hover:scale-105 hover:bg-blue-300 delay-100 duration-300">Contact me</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Home;
