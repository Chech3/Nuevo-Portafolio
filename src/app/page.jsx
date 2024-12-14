'use client'
import Image from "next/image";
import { motion } from 'framer-motion'
import Link from "next/link";
function Home() {
  return (
    <motion.div
      className="min-h-screen w-full p-5 overflow-y-auto"
      initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 pb-16 md:py-8">
        <div className="w-full">
          <Image
            alt="Foto"
            priority
            src="/fotonga.heic"
            height={500}
            width={500}
            className="w-full h-auto rounded-xl shadow-2xl"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-center lg:text-left dark:text-white">
            Full Stack Developer
          </h1>
          <p className="text-lg text-center lg:text-left dark:text-white">
            Hi, I'm Jose Angel, a full-stack developer passionate about creating innovative and functional solutions. I have experience with technologies like React for dynamic user interfaces and Laravel for developing robust and efficient APIs. My expertise spans both frontend and backend, working with languages like JavaScript and PHP, allowing me to build complete and scalable applications. I always strive to stay updated with the latest technological trends to ensure high-quality results.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Link href="/portfolio">
              <button className="px-6 py-3 rounded-lg ring-1 dark:ring-white ring-black dark:text-white dark:hover:bg-slate-700 hover:bg-blue-300 transition duration-300 ease-in-out">
                View my work
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-3 rounded-lg ring-1 dark:ring-white ring-black dark:text-white dark:hover:bg-slate-700 hover:bg-blue-300 transition duration-300 ease-in-out">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default Home;
