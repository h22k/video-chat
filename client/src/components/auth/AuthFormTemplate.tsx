import React from 'react'

const AuthFormTemplate = ({ children, title }: { children: React.ReactNode, title:string}) => {
  return (
    <div className="px-6 py-8 lg:w-2/5 sm:w-3/5 w-full flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center flex-col justify-center sm:bg-violet-100 rounded-lg">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 capitalize text-violet-500 tracking-tighter">{ title }</h1>
      <form className="flex items-center w-full justify-center flex-col gap-8 py-12 ">
        { children }
      </form>
    </div>

  )
}

export default AuthFormTemplate