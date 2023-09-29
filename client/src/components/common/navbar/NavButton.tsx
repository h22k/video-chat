import React from 'react'
import Link from 'next/link'

export type NavButtonTypes = {
  children : React.ReactNode,
  href : string
}
const NavButton = ({ children, href = '/' } : NavButtonTypes) => {
  return (
    <Link href={href}>
      <button
        className="font-medium text-white bg-violet-400 outline outline-violet-400 border-2 border-dashed border-violet-400 py-0.5 sm:py-1 px-2 sm:px-3 rounded-lg shadow-md hover:bg-white hover:text-violet-400 hover:outline-white transition-all duration-300">
        {children}
      </button>
    </Link>
  )
}
export default NavButton
