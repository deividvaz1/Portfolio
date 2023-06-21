import React, { ReactNode } from 'react'
import { FiSend } from 'react-icons/fi'

type ButtonProps = {
  onClick: () => void
  children: ReactNode
}

export const Contateme: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="borderAll flex h-full w-1/2 items-center justify-center gap-2 rounded-lg border-t-[1px] border-t-zinc-800 text-sm uppercase tracking-wide transition-colors duration-300 hover:scale-105 hover:border-cyan-300 hover:text-designColor hover:shadow-2xl"
    >
      {children} <FiSend />
    </button>
  )
}
