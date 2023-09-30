import React from 'react'
import AuthNavbar from '../../components/auth/AuthNavbar'
import blobs from '../../../public/blobs.svg'
import meeting from '../../../public/auth-page.svg'
import Image from 'next/image'

export type AuthLayoutTypes = {
  children : React.ReactNode
}
export default function AuthLayout({ children } : AuthLayoutTypes) {
  return (
    <>
      <AuthNavbar/>
      <div className="grid sm:grid-cols-auth grid-cols-1">
        <div className="flex absolute inset-0 -z-10 sm:relative w-full h-full items-center justify-center">
          <Image src={blobs} alt="blob"
                 className="absolute opacity-40 sm:opacity-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[calc(100vh-3.1rem)] w-full overflow-hidden drop-shadow-lg"/>
          <Image src={meeting} alt="representational image of the auth page" className="hidden sm:block"/>
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  )
}
