import HomeNavbar from '@/components/homepage/HomeNavbar'
import Image from 'next/image'
import meet from '../../public/meeting.svg'
import MeetingButton from '@/components/homepage/MeetingButton'
import HeadingContent from '@/components/homepage/HeadingContent'
import JoinToAMeeting from '@/components/homepage/JoinToAMeeting'

export default function Home() {
  return (
    <>
      <HomeNavbar/>
      <div className="grid sm:grid-cols-2 grid-cols-1 h-[calc(100vh-6.2rem)] gap-x-4">
        <Image src={meet} alt="two people having a meeting" className="self-center justify-self-center sm:row-span-2"
               priority/>
        <div className="-order-1 mx-auto w-4/5 self-end pb-7 sm:order-none md:border-b">
          <HeadingContent/>
        </div>
        <div
          className="mt-7 flex w-full flex-col items-center gap-4 self-start justify-self-center pb-12 lg:w-4/5 lg:flex-row">
          <MeetingButton/>
          <JoinToAMeeting/>
        </div>
      </div>
    </>
  )
}
