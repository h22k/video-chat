import React from 'react'
import Link from 'next/link'

export type NavLinkTypes = {
  children : React.ReactNode,
  href : string
}

const NavLink = ({ href = '/', children } : NavLinkTypes) => {
  return (
    <Link href={href}
          className="after:absolute relative after:right-0 after:h-1 after:w-0 after:rounded-full after:bg-violet-400 font-medium after:transition-all after:duration-500 after:-bottom-0.5 hover:after:left-0 hover:after:w-full">
      {children}
    </Link>
  )
}

export default NavLink
