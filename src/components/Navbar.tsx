import React from 'react'
import { MdOutlineClose, MdWork } from 'react-icons/md'
import { FaUser, FaEnvelope } from 'react-icons/fa'
import { IoIosPaper } from 'react-icons/io'

import { SiGooglechat } from 'react-icons/si'

type NavbarProps = {
  activeTab: string
  onTabChange: (tab: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex h-80 w-full flex-col items-center justify-between rounded-3xl bg-bodyColor bg-transparent py-6">
      <span
        onClick={() => onTabChange('about')}
        className={`group relative flex h-6 w-full cursor-pointer items-center justify-center text-xl text-textColor duration-300 ${
          activeTab === 'about' ? 'text-designColor' : 'hover:text-designColor'
        }`}
      >
        <FaUser />
        <span className="absolute left-0 z-20 translate-x-8 rounded-xl bg-designColor px-4 py-[1px] font-alt text-xs uppercase text-black opacity-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-70">
          Sobre
        </span>
      </span>
      <span
        onClick={() => onTabChange('resume')}
        className={`group relative flex h-6 w-full cursor-pointer items-center justify-center text-xl text-textColor duration-300 ${
          activeTab === 'resume' ? 'text-designColor' : 'hover:text-designColor'
        }`}
      >
        <IoIosPaper />
        <span className="absolute left-0 z-20 translate-x-8 rounded-xl bg-designColor px-4 py-[1px] font-alt text-xs uppercase text-black opacity-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-70">
          Resumo
        </span>
      </span>
      <span
        onClick={() => onTabChange('projects')}
        className={`group relative flex h-6 w-full cursor-pointer items-center justify-center text-xl text-textColor duration-300 ${
          activeTab === 'projects'
            ? 'text-designColor'
            : 'hover:text-designColor'
        }`}
      >
        <MdWork />
        <span className="absolute left-0 z-20 translate-x-8 rounded-xl bg-designColor px-4 py-[1px] font-alt text-xs uppercase text-black opacity-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-70">
          Meus Projetos
        </span>
      </span>
      <span
        onClick={() => onTabChange('redes')}
        className={`group relative flex h-6 w-full cursor-pointer items-center justify-center text-xl text-textColor duration-300 ${
          activeTab === 'redes' ? 'text-designColor' : 'hover:text-designColor'
        }`}
      >
        <SiGooglechat />
        <span className="absolute left-0 z-20 translate-x-8 rounded-xl bg-designColor px-4 py-[1px] font-alt text-xs uppercase text-black opacity-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-70">
          Outras Redes
        </span>
      </span>
      <span
        onClick={() => onTabChange('email')}
        className={`group relative flex h-6 w-full cursor-pointer items-center justify-center text-xl text-textColor duration-300 ${
          activeTab === 'email' ? 'text-designColor' : 'hover:text-designColor'
        }`}
      >
        <FaEnvelope />
        <span className="absolute left-0 z-20 translate-x-8 rounded-xl bg-designColor px-4 py-[1px] font-alt text-xs uppercase text-black opacity-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-70">
          Contate-me
        </span>
      </span>
      <MdOutlineClose
        className="h-6 w-6 cursor-pointer text-xl text-textColor duration-300 hover:text-designColor"
        onClick={() => onTabChange('')}
      />
    </div>
  )
}
