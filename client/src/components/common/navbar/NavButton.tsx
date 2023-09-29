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
        className="rounded-lg border-2 border-dashed border-violet-400 bg-violet-400 px-2 font-medium text-white shadow-md outline outline-violet-400 transition-all duration-300 py-0.5 hover:bg-white hover:text-violet-400 hover:outline-white sm:px-3 sm:py-1">
        {children}
      </button>
    </Link>
  )
}
export default NavButton
