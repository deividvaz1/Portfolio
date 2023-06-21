'use client'
/* FONTES */
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

import React, { ReactNode, useEffect, useRef, useState } from 'react'

import { motion } from 'framer-motion'

/* LAYOUT */
import { Hero } from '@/components/Hero'

import { About } from '@/components/About/About'
import { Resume } from '@/components/Resume/Resume'
import { FaUser, FaEnvelope } from 'react-icons/fa'
import { IoIosPaper } from 'react-icons/io'
import { MdOutlineClose, MdWork } from 'react-icons/md'
import { SiGooglechat } from 'react-icons/si'
import { Projects } from '@/components/projects/Projects'
import { Redes } from '@/components/redes/Redes'
import { Email } from '@/components/email.tsx/Email'
import { SideNav } from '@/components/SideNav'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  const [showDiv, setShowDiv] = useState(true)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 640) {
        setShowDiv(false)
      } else {
        setShowDiv(true)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const ref = useRef<HTMLDivElement>(null)

  const [about, setAbout] = useState(true)
  const [resume, setResume] = useState(false)
  const [projects, setProjects] = useState(false)
  const [redes, setRedes] = useState(false)
  const [email, setEmail] = useState(false)
  const [sidenav, setSidenav] = useState(false)

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (e.target instanceof Element && e.target.contains(ref.current)) {
        setSidenav(false)
      }
    })
  }, [])
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <div className="relative h-screen w-full overflow-hidden font-bold text-textColor">
          <main className="mx-auto flex h-full max-w-screen-2xl items-center justify-center">
            <div className="z-50 flex h-[85%] w-[85%] items-start justify-between rounded-2xl bg-bodyColor bg-opacity-70 text-white">
              {/* Navbar */}
              <div className=" flex h-96 w-16 flex-col gap-4">
                <div className=" group flex h-20 w-full cursor-pointer items-center justify-center rounded-3xl bg-bodyColor bg-transparent">
                  {/* NAVBAR */}
                  <div
                    onClick={() => setSidenav(true)}
                    className="flex flex-col gap-1.5 overflow-hidden"
                  >
                    <span className="inline-block h-[2px] w-8 -translate-x-2 bg-textColor transition-transform duration-300 group-hover:translate-x-0 group-hover:bg-designColor"></span>
                    <span className="inline-block h-[2px] w-8 bg-textColor transition-transform duration-300 group-hover:bg-designColor"></span>
                    <span className="inline-block h-[2px] w-8 -translate-x-3.5 bg-textColor transition-transform duration-300 group-hover:translate-x-0 group-hover:bg-designColor"></span>
                  </div>
                </div>
                {/* SIDENAV */}
                {sidenav && (
                  <div className="fixed left-0 top-0 z-50 h-screen w-full bg-black bg-opacity-50">
                    <div className="relative h-full w-96">
                      <motion.div
                        ref={ref}
                        initial={{ x: -500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="h-full w-full overflow-y-scroll bg-bodyColor scrollbar-thin scrollbar-thumb-[#646464]"
                      >
                        <SideNav />
                        <span
                          onClick={() => setSidenav(false)}
                          className="absolute -right-16 top-0 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg bg-bodyColor text-2xl text-textColor duration-300 hover:text-designColor"
                        >
                          <MdOutlineClose />
                        </span>
                      </motion.div>
                    </div>
                  </div>
                )}
                {/* SIDENAV */}
                <div className="flex h-80 w-full flex-col items-center justify-between rounded-3xl bg-bodyColor bg-transparent py-6">
                  <span
                    onClick={() => {
                      setAbout(true)
                      setResume(false)
                      setProjects(false)
                      setRedes(false)
                      setEmail(false)
                    }}
                    className="group relative flex h-6 w-full cursor-pointer items-center justify-center text-xl text-textColor duration-300 hover:text-designColor"
                  >
                    <FaUser />
                    <span className="absolute left-0 z-20 translate-x-8 rounded-xl bg-designColor px-4 py-[1px] font-alt text-xs uppercase text-black opacity-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-70">
                      Sobre
                    </span>
                  </span>
                  <span
                    onClick={() => {
                      setAbout(false)
                      setResume(true)
                      setProjects(false)
                      setRedes(false)
                      setEmail(false)
                    }}
                    className="group relative flex h-6 w-full cursor-pointer items-center justify-center text-xl text-textColor duration-300 hover:text-designColor"
                  >
                    <IoIosPaper />
                    <span className="absolute left-0 z-20 translate-x-8 rounded-xl bg-designColor px-4 py-[1px] font-alt text-xs uppercase text-black opacity-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-70">
                      Resumo
                    </span>
                  </span>
                  <span
                    onClick={() => {
                      setAbout(false)
                      setResume(false)
                      setProjects(true)
                      setRedes(false)
                      setEmail(false)
                    }}
                    className="group relative flex h-6 w-full cursor-pointer items-center justify-center text-xl text-textColor duration-300 hover:text-designColor"
                  >
                    <MdWork />
                    <span className="absolute left-0 z-20 translate-x-8 rounded-xl bg-designColor px-4 py-[1px] font-alt text-xs uppercase text-black opacity-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-70">
                      Meus Projetos
                    </span>
                  </span>
                  <span
                    onClick={() => {
                      setAbout(false)
                      setResume(false)
                      setProjects(false)
                      setRedes(true)
                      setEmail(false)
                    }}
                    className="group relative flex h-6 w-full cursor-pointer items-center justify-center text-xl text-textColor duration-300 hover:text-designColor"
                  >
                    <SiGooglechat />
                    <span className="absolute left-0 z-20 translate-x-8 rounded-xl bg-designColor px-4 py-[1px] font-alt text-xs uppercase text-black opacity-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-70">
                      Outras Redes
                    </span>
                  </span>
                  <span
                    onClick={() => {
                      setAbout(false)
                      setResume(false)
                      setProjects(false)
                      setRedes(false)
                      setEmail(true)
                    }}
                    className="group relative flex h-6 w-full cursor-pointer items-center justify-center text-xl text-textColor duration-300 hover:text-designColor"
                  >
                    <FaEnvelope />
                    <span className="absolute left-0 z-20 translate-x-8 rounded-xl bg-designColor px-4 py-[1px] font-alt text-xs uppercase text-black opacity-0 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-70">
                      Email
                    </span>
                  </span>
                </div>
              </div>
              {/* FIM - NAVBAR */}
              <div className="flex h-full w-[94%] items-center bg-transparent">
                <div
                  className={`h-full w-5/12 rounded-2xl bg-transparent bg-opacity-80 shadow-testShadow ${
                    showDiv ? '' : 'hidden'
                  }`}
                >
                  {/* Parte direita do portfólio */}
                  <Hero />
                </div>
                {/* Parte esquerda do portfólio */}
                <div className="bg-90 ml-12 h-[95%] w-8/12 rounded-2xl bg-transparent sm:-ml-0">
                  <div className="h-[96%] w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-[#646464]">
                    {/* Substituir o valor de children aqui */}
                    {about && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <About />
                      </motion.div>
                    )}
                    {resume && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Resume />
                      </motion.div>
                    )}
                    {projects && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Projects />
                      </motion.div>
                    )}
                    {redes && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Redes />
                      </motion.div>
                    )}
                    {email && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Email />
                      </motion.div>
                    )}
                    {/* <Resume /> */}
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Background  */}
          {children}
        </div>
      </body>
    </html>
  )
}
