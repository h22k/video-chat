'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import NavLink from '../common/navbar/NavLink'

const AuthLinks = () => {
  const pathname = usePathname()

  return (
    <div className="text-center">
      {pathname === '/register' ? (
        <>
          <p className="text-xs text-violet-500">Have an account?</p>
          <NavLink href="/login">Login here</NavLink>
        </>
      ) : (
        <>
          <p className="text-xs text-violet-500">Want to join?</p>
          <NavLink href="/register">register here</NavLink>
        </>
      )}
    </div>
  )
}

export default AuthLinks
