import React from 'react'
import Navbar from '@/components/common/navbar/Navbar'
import NavButton from '@/components/common/navbar/NavButton'

const HomeNavbar = () => {
  return (
    <Navbar>
      <div className="flex items-center justify-center gap-4">
        <NavButton href="/register">register <span className="hidden sm:inline-block"> to join</span></NavButton>
        <NavButton href="/login">login <span className="hidden sm:inline-block"> to have fun</span></NavButton>
      </div>
    </Navbar>
  )
}
export default HomeNavbar
