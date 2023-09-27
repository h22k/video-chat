import React from 'react'

export type FormButtonTypes = {
  children: React.ReactNode
}

const FormButton = ({ children }: FormButtonTypes) => {
  return (
    <button type="submit" className="uppercase bg-gradient-rainbow text-white font-medium px-3 py-2 rounded-full shadow w-3/4 transition-all hover:hue-rotate-180 duration-500">
      { children }
    </button>
  )
}

export default FormButton