import React from 'react'
import InputField from '@/components/common/form/InputField'
import Link from 'next/link'
import { TbArrowsJoin2 } from 'react-icons/tb'

const JoinToAMeeting = () => {
  return (
    <InputField placeholder="enter a code or link" className="placeholder:capitalize">
      <Link href="/" className="absolute right-0 w-14 h-full">
        <button
          className="group flex items-center w-full h-full justify-center shadow-jelly text-white bg-violet-400">
          <TbArrowsJoin2 size={20}
                         className="group-hover:animate-wiggle group-hover:w-6 group-hover:h-6 transition-all "/>
        </button>
      </Link>
    </InputField>
  )
}
export default JoinToAMeeting
