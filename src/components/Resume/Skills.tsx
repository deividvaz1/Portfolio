import { SiArtstation } from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi'
import { IoIosPaper } from 'react-icons/io'
import { GiCheckMark } from 'react-icons/gi'
import { ResumeTitle } from './ResumeTitle'

export function Skills() {
  return (
    <div className="grid grid-cols-1 px-6 md:grid-cols-9">
      <div className="md:order-1 md:col-span-4">
        {/* DESIGN */}
        <ResumeTitle title="Design" icons={<SiArtstation />} />
        <div className="py-4">
          <div className="border-b-[1px] border-gray-800 py-3">
            <p className="-mb-1.5 text-base text-textColor">
              Desenvolvimento Web
            </p>
            <span className="relative inline-flex h-1 w-full bg-zinc-600">
              <span className="absolute left-0 top-0 h-full w-[85%] bg-designColor"></span>
            </span>
          </div>

          <div className="border-b-[1px] border-gray-800 py-3">
            <p className="-mb-1.5 text-base text-textColor">Web Design</p>
            <span className="relative inline-flex h-1 w-full bg-zinc-600">
              <span className="absolute left-0 top-0 h-full w-[65%] bg-designColor"></span>
            </span>
          </div>

          <div className="border-b-[1px] border-gray-800 py-3">
            <p className="-mb-1.5 text-base text-textColor">
              Aplicativos Mobile
            </p>
            <span className="relative inline-flex h-1 w-full bg-zinc-600">
              <span className="absolute left-0 top-0 h-full w-[60%] bg-designColor"></span>
            </span>
          </div>
        </div>
        {/* CONHECIMENTOS */}
        <div className="md:order-3 md:col-span-4">
          <ResumeTitle title="Conhecimentos" icons={<IoIosPaper />} />

          <div className="border-gray-800 py-3">
            <h1 className="mb-5 flex items-center gap-2 text-base font-normal text-textColor">
              <span className="text-2xl text-designColor">
                <GiCheckMark />
              </span>
              Host Web
            </h1>
            <h1 className="mb-5 flex items-center gap-2 text-base font-normal text-textColor">
              <span className="text-2xl text-designColor">
                <GiCheckMark />
              </span>
              Aplicativos Android
            </h1>
            <h1 className="mb-5 flex items-center gap-2 text-base font-normal text-textColor">
              <span className="text-2xl text-designColor">
                <GiCheckMark />
              </span>
              Criação de website design
            </h1>
            <h1 className="flex items-center gap-2 text-base font-normal text-textColor">
              <span className="text-2xl text-designColor">
                <GiCheckMark />
              </span>
              Criação de logos
            </h1>
          </div>
        </div>
      </div>

      <div className="hidden h-full w-full items-center justify-center md:order-2 md:flex">
        <span className="inline-flex h-full w-[1px] bg-gray-800"></span>
      </div>

      {/* PROGRAMAÇÃO */}
      <div className="md:order-2 md:col-span-4">
        <ResumeTitle title="Programação" icons={<BiCodeAlt />} />

        <div className="border-b-[1px] border-gray-800 py-3">
          <p className="-mb-1.5 text-base text-textColor">JavaScript</p>
          <span className="relative inline-flex h-1 w-full bg-zinc-600">
            <span className="absolute left-0 top-0 h-full w-[75%] bg-designColor"></span>
          </span>
        </div>

        <div className="border-b-[1px] border-gray-800 py-3">
          <p className="-mb-1.5 text-base text-textColor">Nodejs</p>
          <span className="relative inline-flex h-1 w-full bg-zinc-600">
            <span className="absolute left-0 top-0 h-full w-[65%] bg-designColor"></span>
          </span>
        </div>

        <div className="border-b-[1px] border-gray-800 py-3">
          <p className="-mb-1.5 text-base text-textColor">Reactjs</p>
          <span className="relative inline-flex h-1 w-full bg-zinc-600">
            <span className="absolute left-0 top-0 h-full w-[85%] bg-designColor"></span>
          </span>
        </div>

        <div className="border-b-[1px] border-gray-800 py-3">
          <p className="-mb-1.5 text-base text-textColor">TypeScript</p>
          <span className="relative inline-flex h-1 w-full bg-zinc-600">
            <span className="absolute left-0 top-0 h-full w-[75%] bg-designColor"></span>
          </span>
        </div>

        <div className="border-b-[1px] border-gray-800 py-3">
          <p className="-mb-1.5 text-base text-textColor">HTML/CSS</p>
          <span className="relative inline-flex h-1 w-full bg-zinc-600">
            <span className="absolute left-0 top-0 h-full w-[95%] bg-designColor"></span>
          </span>
        </div>

        <div className="border-b-[1px] border-gray-800 py-3">
          <p className="-mb-1.5 text-base text-textColor">PHP</p>
          <span className="relative inline-flex h-1 w-full bg-zinc-600">
            <span className="absolute left-0 top-0 h-full w-[63%] bg-designColor"></span>
          </span>
        </div>

        <div className="border-b-[1px] border-gray-800 py-3">
          <p className="-mb-1.5 text-base text-textColor">Next.js</p>
          <span className="relative inline-flex h-1 w-full bg-zinc-600">
            <span className="absolute left-0 top-0 h-full w-[85%] bg-designColor"></span>
          </span>
        </div>
      </div>
    </div>
  )
}
