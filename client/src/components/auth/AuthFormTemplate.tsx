import React from 'react'

export type AuthFormTypes = {
  children : React.ReactNode,
  title : string
}

const AuthFormTemplate = ({ children, title } : AuthFormTypes) => {
  return (
    <div
      className="flex w-full h-full flex-col justify-center rounded-lg px-6 py-8 drop-shadow-lg">
      <h1
        className="w-4/5 mx-auto text-3xl font-bold capitalize tracking-tighter text-violet-500 sm:text-4xl">{title}</h1>
      <form className="flex w-full flex-col items-center justify-center gap-8 py-12">
        {children}
      </form>
    </div>

  )
}

export default AuthFormTemplate
