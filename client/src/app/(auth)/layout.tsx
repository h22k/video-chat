import React from 'react'
import AuthNavbar from '../../components/auth/AuthNavbar'

export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <AuthNavbar/>
      {children}
    </>
  )
}
