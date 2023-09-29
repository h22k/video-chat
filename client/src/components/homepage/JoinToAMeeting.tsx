import React from 'react'
import InputField from '@/components/common/form/InputField'
import Link from 'next/link'
import { TbArrowsJoin2 } from 'react-icons/tb'

const JoinToAMeeting = () => {
  return (
    <InputField placeholder="enter a code or link" className="placeholder:capitalize">
      <Link href="/" className="absolute right-0 h-full w-14">
        <button
          className="flex h-full w-full items-center justify-center bg-violet-400 text-white group shadow-jelly">
          <TbArrowsJoin2 size={20}
                         className="transition-all group-hover:animate-wiggle group-hover:h-6 group-hover:w-6"/>
        </button>
      </Link>
    </InputField>
  )
}
export default JoinToAMeeting
