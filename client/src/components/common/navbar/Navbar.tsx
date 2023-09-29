import React from 'react'
import Link from 'next/link'

export type NavbarTypes = {
  children : React.ReactNode
}

const Navbar = ({ children } : NavbarTypes) => {
  return (
    <nav className="mb-8 flex items-center justify-between px-4 py-4 shadow-sm bg-primary-white">
      <Link href="/" className="text-xl font-bold tracking-tighter sm:text-2xl">
        Video<span className="text-violet-400">Chat</span>
      </Link>
      {children}
    </nav>
  )
}

export default Navbar
