import React from 'react'
import CustomButton from '@/components/common/ui/CustomButton'

export type FormButtonTypes = {
  children : React.ReactNode
}

const FormButton = ({ children } : FormButtonTypes) => {
  return (
    <CustomButton type="submit"
                  className="w-4/5 rounded-full uppercase shadow transition-all duration-500 bg-gradient-rainbow hover:contrast-125">
      {children}
    </CustomButton>
  )
}

export default FormButton
