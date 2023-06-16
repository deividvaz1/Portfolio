'use client'
import { FiSend } from 'react-icons/fi'
import { Title } from '../Title'
import { useState } from 'react'

export function Email() {
  const [usuario, setUsuario] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  //* ERRO AO ENVIAR A MENSAGEM *//
  const [errUsuario, setErrUsuario] = useState(false)
  const [errEmail, setErrEmail] = useState(false)
  const [errMensagem, setErrMensagem] = useState(false)
  //* SUCESSO AO ENVIAR A MENSAGEM *//
  const [sucess, setSucess] = useState('')

  const handleSend = (e: any) => {
    e.preventDefault()
  }
  return (
    <div>
      <Title title="Entrar em" subTitle="Contato" />
      <div className="flex justify-between gap-20 p-6">
        <div className="w-1/2">
          <p className="flex w-full justify-between border-b-[1px] border-b-gray-800 py-4 font-alt text-lg text-[#ccc]">
            <span className="flex items-center justify-center rounded-md bg-designColor px-2 font-alt text-sm font-medium text-gray-700">
              Email:
            </span>
            deividvaz100@gmail.com
          </p>
        </div>
        <div className="w-1/2">
          <p className="flex w-full justify-between border-b-[1px] border-b-gray-800 py-4 font-alt text-lg text-[#ccc]">
            <span className="flex items-center justify-center rounded-md bg-designColor px-2 font-alt text-sm font-medium text-gray-700">
              Telefone:
            </span>
            +55 (51)984840959
          </p>
        </div>
      </div>
      <div className="mt-10 w-full">
        <Title title="Entrar em" subTitle="Contato" />
        <form className="flex flex-col gap-6 p-6">
          <div className="flex w-full justify-between gap-10">
            <input
              onChange={handleSend}
              className="w-full rounded-md border-2 border-zinc-600 bg-transparent px-4 py-2 text-base font-normal text-gray-200 outline-none duration-300 focus-visible:border-designColor"
              type="text"
              placeholder="Nome completo:"
            />
            <input
              className="w-full rounded-md border-2 border-zinc-600 bg-transparent px-4 py-2 text-base font-normal text-gray-200 outline-none duration-300 focus-visible:border-designColor"
              type="email"
              placeholder="Email:"
            />
          </div>
          <textarea
            className="w-full resize-none rounded-md border-2 border-zinc-600 bg-transparent px-4 py-2 text-base font-normal text-gray-200 outline-none duration-300 focus-visible:border-designColor"
            placeholder="Sua Mensagem:"
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
      </div>
    </div>
  )
}
