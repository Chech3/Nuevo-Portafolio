"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";
import DarkButton from "./DarkButton";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const icons = [
  { iconName: "/descargar.png", url: "/cvJoseGarces2026.pdf", alt: "Descargar" },
  { iconName: "/github.png", url: "https://github.com/Chech3", alt: "Github" },
  { iconName: "/linkedin.png", url: "https://www.linkedin.com/in/jose-garces-07617227b/", alt: "Linkedin" },
];

const topVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: "rgb(255,255,255)",

  }
};
const centerVariants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,

  }
};

const bottomVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: "rgb(255, 255, 255)",

  }
}

const listVariants = {
  opened: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    }
  },
  closed: {
    x: "100vw",
  }
}

const listItemsVariants = {
  opened: {
    opacity: 1,
    x: 0,

  },
  closed: {
    opacity: 0,
    x: -10,
  }
}




const NavBar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl dark:bg-slate-700 bg-blue-300 border-b border-black/10 dark:border-white/10 shadow-sm duration-300">
      <div className="hidden md:flex gap-5 w-1/3 ">
        {links.map((link) => (
          <NavLinks link={link} key={link.title} />
        ))}
      </div>
      {/*Logo */}
      <Link href="/" className="lg:flex xl:w-1/3 xl:justify-center cursor-pointer">
        <div className="ml-0 text-sm bg-black rounded-md p-0.5 md:p-1 font-semibold flex items-center justify-center md:ml-20 transition-transform hover:scale-105">
          <span className="text-white mr-1">Jose</span>
          <span className={`w-12 h-8 rounded ${pathName === "/" ? "bg-blue-400 dark:bg-blue-600" : "bg-white"} text-black flex items-center justify-center`}>
            .dev
          </span>
        </div>
      </Link>

      {/* iconos */}
      <div className="hidden md:flex lg:flex xl:flex gap-4 w-1/3 items-center">
        {icons.map((icon) => (
          <Link
            target="_blank"
            href={icon.url}
            key={icon.iconName}
            className="transition-transform duration-300 transform hover:scale-125 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center"
          >
            <Image className="dark:invert duration-300" width={32} height={32} alt={icon.alt} src={icon.iconName} />
          </Link>
        ))}
        <DarkButton ancho={30} alto={30} />
      </div>
      <div className="md:hidden flex gap-4 items-center">
        {/* Menu Button */}
        {icons.map((icon) => (
          <Link
            target="_blank"
            href={icon.url}
            key={icon.iconName}
            className="transition-transform duration-300 transform hover:scale-125 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center"
          >
            <Image className="dark:invert duration-300" width={30} height={30} alt={icon.alt} src={icon.iconName} />
          </Link>
        ))}

        <DarkButton ancho={30} alto={30} />

        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          aria-label="Toggle Menu"
        >
          <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black dark:bg-white rounded origin-left"></motion.div>
          <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black dark:bg-white rounded"></motion.div>
          <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black dark:bg-white rounded origin-left"></motion.div>
        </button>
        {/* Menu List */}
        {open && (
          <motion.div variants={listVariants} initial="closed" animate="opened" className="fixed top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map((link) => (
              <motion.div variants={listItemsVariants} key={link.title}>
                <Link
                  onClick={() => setOpen(false)}
                  href={link.url}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-110 active:scale-95 inline-block ${
                    pathName === link.url
                      ? "bg-white text-black font-semibold shadow-lg"
                      : "text-white hover:text-blue-300 hover:bg-white/10"
                  }`}
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
