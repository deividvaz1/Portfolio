'use client'

import { useState } from 'react'
import { FaUser, FaEnvelope } from 'react-icons/fa'
import { IoIosPaper } from 'react-icons/io'
import { MdWork } from 'react-icons/md'
import { SiGooglechat } from 'react-icons/si'

export function Navbar() {
  const [about, setAbout] = useState(true)
  const [resume, setResume] = useState(false)
  return (
    <div className=" flex h-96 w-16 flex-col gap-4">
      <div className=" group flex h-20 w-full cursor-pointer items-center justify-center rounded-3xl bg-bodyColor bg-opacity-75">
        {/* NAVBAR */}
        <div className="flex flex-col gap-1.5 overflow-hidden">
          <span className="inline-block h-[2px] w-8 -translate-x-2 bg-textColor transition-transform duration-300 group-hover:translate-x-0 group-hover:bg-designColor"></span>
          <span className="inline-block h-[2px] w-8 bg-textColor transition-transform duration-300 group-hover:bg-designColor"></span>
          <span className="inline-block h-[2px] w-8 -translate-x-3.5 bg-textColor transition-transform duration-300 group-hover:translate-x-0 group-hover:bg-designColor"></span>
        </div>
      </div>
      <div className="flex h-80 w-full flex-col items-center justify-between rounded-3xl bg-bodyColor bg-opacity-75 py-6">
        <span
          onClick={() => setAbout(true) & setResume(false)}
          className="group relative flex h-6 w-full cursor-pointer items-center justify-center text-xl text-textColor duration-300 hover:text-designColor"
        >
          <FaUser />
          <span className="absolute left-0 z-20 translate-x-8 rounded-xl bg-designColor px-4 py-[1px] font-alt text-xs uppercase text-black opacity-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-70">
            Sobre
          </span>
        </span>
        <span className="group relative flex h-6 w-full cursor-pointer items-center justify-center text-xl text-textColor duration-300 hover:text-designColor">
          <IoIosPaper />
          <span className="absolute left-0 z-20 translate-x-8 rounded-xl bg-designColor px-4 py-[1px] font-alt text-xs uppercase text-black opacity-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-70">
            Resumo
          </span>
        </span>
        <span className="group relative flex h-6 w-full cursor-pointer items-center justify-center text-xl text-textColor duration-300 hover:text-designColor">
          <MdWork />
          <span className="absolute left-0 z-20 translate-x-8 rounded-xl bg-designColor px-4 py-[1px] font-alt text-xs uppercase text-black opacity-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-70">
            Meus Projetos
          </span>
        </span>
        <span className="group relative flex h-6 w-full cursor-pointer items-center justify-center text-xl text-textColor duration-300 hover:text-designColor">
          <SiGooglechat />
          <span className="absolute left-0 z-20 translate-x-8 rounded-xl bg-designColor px-4 py-[1px] font-alt text-xs uppercase text-black opacity-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-70">
            Outras Redes
          </span>
        </span>
        <span className="group relative flex h-6 w-full cursor-pointer items-center justify-center text-xl text-textColor duration-300 hover:text-designColor">
          <FaEnvelope />
          <span className="absolute left-0 z-20 translate-x-8 rounded-xl bg-designColor px-4 py-[1px] font-alt text-xs uppercase text-black opacity-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-70">
            Email
          </span>
        </span>
      </div>
      {/* FIM - NAVBAR */}
    </div>
  )
}
