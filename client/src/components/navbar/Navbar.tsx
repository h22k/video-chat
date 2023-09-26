import React from 'react'
import Link from 'next/link'

const Navbar = ({ children }: { children: React.ReactNode}) => {
  return (
    <nav className='flex justify-between items-center py-4 px-4 bg-primary-white shadow-sm mb-8'>
      <Link href='/' className='font-bold text-xl sm:text-2xl tracking-tighter'>
        Video<span className='text-violet-400'>Chat</span>
      </Link>
      {children}
    </nav>
  )
}

export default Navbar