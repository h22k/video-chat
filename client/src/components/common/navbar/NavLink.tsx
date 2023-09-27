import React from 'react'
import Link from 'next/link'

export type NavLinkTypes = {
  children : React.ReactNode,
  href : string
}

const NavLink = ({ href = '/', children } : NavLinkTypes) => {
  return (
    <Link href={href}
          className="relative font-medium after:w-0 after:h-1 after:absolute after:-bottom-0.5 after:transition-all after:duration-500 after:rounded-full after:right-0 hover:after:w-full hover:after:left-0 after:bg-violet-400">
      {children}
    </Link>
  )
}

export default NavLink
