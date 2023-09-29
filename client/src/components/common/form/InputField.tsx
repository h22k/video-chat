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
      className="before:absolute relative before:bottom-0 before:left-0 before:block flex before:h-1 before:w-0 w-4/5 items-center justify-center overflow-hidden rounded-lg before:transition-all before:duration-300 before:ease-linear before:bg-gradient-rainbow focus-within:before:w-full">
      <input
        type={type}
        placeholder={placeholder}
        {...rest}
        className="w-full bg-white/70 px-3 py-2 placeholder:capitalize shadow-md focus:outline-none"
      />
      {children}
    </div>
  )
}

export default InputField
