import type { ComponentPropsWithoutRef } from 'react'
import React from 'react'

interface InputGroupProps extends ComponentPropsWithoutRef<'input'> {
  type? : string;
  placeholder? : string,
  children? : React.ReactNode
}

const InputField = ({ type = 'text', placeholder, children, ...rest } : InputGroupProps) => {
  return (
    <div
      className="flex items-center justify-center rounded-lg overflow-hidden w-4/5 relative before:absolute before:w-0 before:h-1 before:block before:bottom-0 before:left-0 before:bg-gradient-rainbow focus-within:before:w-full before:transition-all before:ease-linear before:duration-300">
      <input
        type={type}
        placeholder={placeholder}
        {...rest}
        className="bg-white/70 w-full focus:outline-none px-3 py-2 shadow-md placeholder:capitalize"
      />
      {children}
    </div>
  )
}

export default InputField
