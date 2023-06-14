'use client'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiSend } from 'react-icons/fi'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export function Hero() {
  const [text] = useTypewriter({
    words: ['Web Desenvolvedor', 'Desenvolvedor Full Stack'],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  })
  return (
    <div className="z-10 h-full w-5/12 rounded-2xl bg-bodyColor bg-opacity-80 shadow-testShadow">
      <div className="h-3/5 w-full">
        <Image
          src="/assets/perfil.png" // Corrija o caminho da imagem
          alt="Profile"
          className="h-full w-full rounded-2xl object-cover"
          width="700"
          height="1"
          loading="lazy"
        />
      </div>
      <div className="h-2/5 w-full">
        {/* informações */}
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-4xl font-semibold text-textColor">Deivid Vaz</h1>
          <p className="inline-block  px-5 font-alt text-sm uppercase leading-none text-designColor">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="mt-2 flex justify-center gap-2">
            <span className="cursor-pointer text-xl duration-300 hover:text-designColor">
              <FaGithub />
            </span>
            <span className="cursor-pointer text-xl duration-300 hover:text-designColor">
              <FaLinkedin />
            </span>
            <span className="stext-xl cursor-pointer duration-300 hover:text-designColor">
              <FiMail />
            </span>
          </div>
        </div>
        {/* botões */}
        <div className="flex h-14 justify-center">
          <button className="borderAll flex h-full w-1/2 items-center justify-center gap-2 border-t-[1px] border-t-zinc-800 text-sm uppercase tracking-wide duration-300 hover:text-designColor">
            Contate-me <FiSend />
          </button>
        </div>
      </div>
    </div>
  )
}
