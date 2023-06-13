/* Import Background */
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Round } from '@/components/RoundDesigns/Round'
import { RoundFive } from '@/components/RoundDesigns/RoundFive'
import { RoundFour } from '@/components/RoundDesigns/RoundFour'
import { RoundThree } from '@/components/RoundDesigns/RoundThree'
import { RoundTwo } from '@/components/RoundDesigns/RoundTwo'

/* Import Icons */

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden font-bold text-textColor">
      <main className="mx-auto flex h-full max-w-screen-2xl items-center justify-center">
        <div className="z-50 flex h-[85%] w-[85%] items-start justify-between bg-transparent text-white">
          <Navbar />
          <div className="flex h-full w-[94%] items-center bg-transparent ">
            {/* LEFT part start */}
            <Hero />
            {/* RIGHT part start */}
            <div className="h-[95%] w-8/12 bg-[#0e1]">
              <h1>teste</h1>
            </div>
          </div>
        </div>
      </main>

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
