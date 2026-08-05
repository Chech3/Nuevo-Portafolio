"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavLinks({ link }) {
  const pathName = usePathname();
  const isActive = pathName === link.url;

  return (
    <Link
      href={link.url}
      className={`px-3 py-1.5 rounded-lg text-base font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${
        isActive
          ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
          : "text-black dark:text-white hover:bg-black/10 dark:hover:bg-white/15"
      }`}
    >
      {link.title}
    </Link>
  )
}

export default NavLinks