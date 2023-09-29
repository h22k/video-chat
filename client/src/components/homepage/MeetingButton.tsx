import React from 'react'
import { BsPersonVideo } from 'react-icons/bs'
import Link from 'next/link'
import CustomButton from '@/components/common/ui/CustomButton'

const MeetingButton = () => {
  return (
    <Link href="/" className="w-4/5">
      <CustomButton
        className="w-full basis-1/3 gap-4 whitespace-nowrap rounded-xl bg-violet-400 font-bold capitalize tracking-wide text-white transition-all duration-300 hover:bg-gradient-rainbow">
        <BsPersonVideo size={20}/>
        start a meeting
      </CustomButton>
    </Link>
  )
}
export default MeetingButton
