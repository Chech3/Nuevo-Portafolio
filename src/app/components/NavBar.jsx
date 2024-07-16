"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation'
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const icons = [
  { iconName: "/github.png", url: "#" },
  { iconName: "/dribbble.png", url: "#" },
  { iconName: "/facebook.png", url: "#" },
  { iconName: "/instagram.png", url: "#" },
  { iconName: "/pinterest.png", url: "#" },
  { iconName: "/linkedin.png", url: "#" },
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

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(false);
  const pathName = usePathname();
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3 ">
        {links.map((link) => (
          <NavLinks link={link} key={link.title} />
        ))}
      </div>
      {/*Logo */}
      <div onClick={() => setChange(!change)} className="md:hidden lg:flex xl:w-1/3 xl:justify-center">

        <div className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">

          <span className="text-white mr-1">Jose</span>
          <span className={`w-12 h-8 rounded ${pathName === "/" ? "bg-green-500" : "bg-white"} text-black flex items-center justify-center`}>
            .dev
          </span>
        </div>

      </div>
      {/* iconos */}
      <div className="hidden md:flex gap-4 w-1/3">
        {icons.map((icon) => (
          <Link href={icon.url} key={icon.iconName}>
            <Image width={24} height={24} alt="Foto" src={icon.iconName} />
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
        >
          <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
          <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>
        {/* Menu List */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map((link) => (
              <Link onClick={() => setOpen(false)} href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
