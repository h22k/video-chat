import React from 'react'
import classNames from 'classnames'

export type CustomButtonTypes = {
  children : React.ReactNode,
  type? : 'button' | 'submit' | 'reset',
  className : string
}
const CustomButton = ({ children, type, className } : CustomButtonTypes) => {
  const finalClasses = classNames(className, 'px-3 py-2 relative text-white shadow-jelly font-medium custom-button flex items-center justify-center before:top-2 after:bottom-2 before:bg-white/70 after:bg-white/30')
  return (
    <button type={type} className={finalClasses}>
      {children}
    </button>
  )
}
export default CustomButton
