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
        <Image src={meet} alt="two people having a meeting" className="sm:row-span-2 self-center justify-self-center"
               priority/>
        <div className="self-end w-4/5 -order-1 sm:order-none mx-auto md:border-b pb-7">
          <HeadingContent/>
        </div>
        <div
          className="flex gap-4 self-start lg:flex-row flex-col items-center w-full lg:w-4/5 justify-self-center mt-7 pb-12 ">
          <MeetingButton/>
          <JoinToAMeeting/>
        </div>
      </div>
    </>
  )
}
