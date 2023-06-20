'use client'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiSend } from 'react-icons/fi'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { useEffect, useState } from 'react'

export function Hero() {
  const [text] = useTypewriter({
    words: ['Desenvolvedor Web', 'Design para Web', 'Desenvolvedor Mobile'],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  })

  const [profileImageUrl, setProfileImageUrl] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/deividvaz1')
      .then((response) => response.json())
      .then((data) => {
        setProfileImageUrl(data.avatar_url)
      })
      .catch((error) => {
        console.error('Erro ao obter foto de perfil do GitHub:', error)
      })
  }, [])

  return (
    <div>
      <div className="h-3/5 w-full">
        {profileImageUrl && (
          <Image
            src={profileImageUrl}
            alt="Profile"
            className="rounded-2xl object-cover"
            loading="lazy"
            width="500"
            height="300"
          />
        )}
      </div>

      <div className="h-2/5 w-full">
        {/* informações */}
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-4xl font-semibold text-textColor">Deivid Vaz</h1>
          <p className="inline-block  px-5 font-alt text-sm uppercase leading-none text-designColor">
            {text}
            <Cursor cursorBlinking={false} cursorStyle="|" />
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
          <button className="borderAll flex h-full w-1/2 items-center justify-center gap-2 rounded-lg border-t-[1px] border-t-zinc-800 text-sm uppercase tracking-wide transition-colors duration-300 hover:scale-105 hover:border-cyan-300 hover:text-designColor hover:shadow-2xl">
            Contate-me <FiSend />
          </button>
        </div>
      </div>
    </div>
  )
}
