import { Round } from '@/components/RoundDesigns/Round'
import { RoundFive } from '@/components/RoundDesigns/RoundFive'
import { RoundFour } from '@/components/RoundDesigns/RoundFour'
import { RoundThree } from '@/components/RoundDesigns/RoundThree'
import { RoundTwo } from '@/components/RoundDesigns/RoundTwo'

export const metadata = {
  title: 'Deivid | Portfólio',
  description:
    'Um projeto WEB de uma cápsula do tempo construída com React, Next.JS, TailwindCSS e TypeSCript',
}

export default function Home() {
  return (
    <div>
      <div className="absolute left-0 top-0 z-10 h-full w-full">
        <Round />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
      </div>
    </div>
  )
}
