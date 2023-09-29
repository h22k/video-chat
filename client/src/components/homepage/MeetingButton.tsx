import React from 'react'
import { BsPersonVideo } from 'react-icons/bs'
import Link from 'next/link'

const MeetingButton = () => {
  return (
    <Link href="/" className="w-4/5">
      <button
        className="capitalize gap-4 w-full relative px-3 py-2 bg-violet-400 shadow-jelly flex items-center justify-center rounded-xl text-white font-bold tracking-wide meeting-button before:top-2 after:bottom-2 before:bg-white/70 after:bg-white/30 hover:bg-gradient-rainbow basis-1/3 whitespace-nowrap transition-all duration-300">
        <BsPersonVideo size={20}/>
        start a meeting
      </button>
    </Link>
  )
}
export default MeetingButton
