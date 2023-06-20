'use client'
import { FiSend } from 'react-icons/fi'
import { Title } from '../Title'
import { useState } from 'react'
import axios from 'axios'

export function Email() {
  const [usuario, setUsuario] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  const [errUsuario, setErrUsuario] = useState(false)
  const [errEmail, setErrEmail] = useState(false)
  const [errMensagem, setErrMensagem] = useState(false)
  const [sucess, setSucess] = useState('')

  const EmailValidation = (email: any) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
  }

  const handleName = (e: any) => {
    setUsuario(e.target.value)
    setErrUsuario(false)
  }
  const handleEmail = (e: any) => {
    setEmail(e.target.value)
    setErrEmail(false)
  }
  const handleMensagem = (e: any) => {
    setMensagem(e.target.value)
    setErrMensagem(false)
  }

  const handleSend = async (e: any) => {
    e.preventDefault()
    if (!usuario) {
      setErrUsuario(true)
    }
    if (!email) {
      setErrEmail(true)
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(true)
      }
    }
    if (!mensagem) {
      setErrMensagem(true)
    }
    if (usuario && email && EmailValidation(email) && mensagem) {
      try {
        await axios.post(
          'https://getform.io/f/6c3558c6-d73e-4df4-96ea-04017addb270',
          {
            name: usuario,
            email,
            message: mensagem,
          },
        )
        setSucess(`${usuario}`)
        setUsuario('')
        setEmail('')
        setMensagem('')
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <div className="flex flex-col">
      <Title title="Entrar em" subTitle="Contato" />
      <div className="flex flex-col justify-between gap-4 p-6 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <p className="flex w-full flex-col justify-between border-b-[1px] border-b-gray-800 py-4 font-alt text-lg text-[#ccc] sm:flex sm:flex-row">
            <span className="flex items-center justify-center rounded-md bg-designColor px-2 font-alt text-sm font-medium text-gray-700">
              Email:
            </span>
            deividvaz100@gmail.com
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <p className="flex w-full flex-col justify-between border-b-[1px] border-b-gray-800 py-4 font-alt text-lg text-[#ccc] sm:flex sm:flex-row">
            <span className="flex items-center justify-center rounded-md bg-designColor px-2 font-alt text-sm font-medium text-gray-700">
              Telefone:
            </span>
            (51)984840959
          </p>
        </div>
      </div>
      <div className="mt-10 w-full">
        <Title title="Entrar em" subTitle="Contato" />
        {sucess ? (
          <p className="p-6 text-center font-alt text-base text-designColor">
            Olá <span className="text-[#eee]">{sucess}</span>, sua mensagem foi
            enviada com sucesso! Obrigado por entrar em contato 🎉
          </p>
        ) : (
          <form
            id="form"
            action="https://getform.io/f/6c3558c6-d73e-4df4-96ea-04017addb270"
            method=""
            className="flex flex-col gap-6 p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                onChange={handleName}
                value={usuario}
                className={`${
                  errUsuario
                    ? 'border-red-600 focus-visible:border-red-600'
                    : 'border-zinc-600 focus-visible:border-designColor'
                } w-full rounded-md border-2 bg-transparent px-4 py-2 text-base font-normal text-gray-200 outline-none duration-300 `}
                type="text"
                placeholder="Nome completo"
              />
              <input
                onChange={handleEmail}
                value={email}
                className={`${
                  errEmail
                    ? 'border-red-600 focus-visible:border-red-600'
                    : 'border-zinc-600 focus-visible:border-designColor'
                }w-full rounded-md border-2  bg-transparent px-4 py-2 text-base font-normal text-gray-200 outline-none duration-300`}
                type="email"
                placeholder="Email"
              />
            </div>
            <textarea
              onChange={handleMensagem}
              value={mensagem}
              className={`${
                errMensagem
                  ? 'border-red-600 focus-visible:border-red-600'
                  : 'border-zinc-600 focus-visible:border-designColor'
              } w-full resize-none rounded-md border-2  bg-transparent px-4 py-2 text-base font-normal text-gray-200 outline-none duration-300`}
              placeholder="Sua Mensagem"
              cols="30"
              rows="4"
            ></textarea>
            <button
              onClick={handleSend}
              className="borderAll flex h-10 w-44 items-center justify-center gap-2 rounded-lg border-t-[1px] border-t-zinc-800 text-sm uppercase tracking-wide transition-colors duration-300 hover:scale-105 hover:border-cyan-300 hover:text-designColor hover:shadow-2xl"
            >
              Enviar Mensagem <span>{<FiSend className="h-5 w-5" />}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
