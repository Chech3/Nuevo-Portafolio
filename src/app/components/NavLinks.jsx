"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
function NavLinks({ link }) {
  const pathName = usePathname();

  // console.log(pathName);
  return (
    <Link className={`rounded p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
      <button className='py-1'>
        {link.title}
      </button>
    </Link>
  )
}

export default NavLinks