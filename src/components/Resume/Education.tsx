import { MdWork } from 'react-icons/md'
import { GiGraduateCap } from 'react-icons/gi'
import { ResumeCard } from './ResumeCard'
import { ResumeTitle } from './ResumeTitle'

export function Education() {
  return (
    <div className="grid w-full grid-cols-2  px-6 sm:grid-cols-9">
      <div className="col-span-2 sm:col-span-4">
        <ResumeTitle title="Experiência" icons={<MdWork />} />
        <ResumeCard
          badge="2022 - Atual"
          title="Desenvolvedor - Estagiário"
          subTitle="Ipe Saúde"
          des="Estagiário de Desenvolvimento de Software no Ipe Saúde, tive a oportunidade de aprimorar meus conhecimentos em desenvolvimento web e mobile, com foco em tecnologias como ReactJS, React Native e Node.js.  Além disso, fiz uso durante o front-end de frameworks como Next.js e Tailwindcss."
        />
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <span className="inline-flex h-full w-[1px] bg-gray-800"></span>
      </div>
      <div className="col-span-4 sm:flex-col">
        <ResumeTitle title="Educação" icons={<GiGraduateCap />} />
        <ResumeCard
          badge="2021 - Atual"
          title="Análise de Sistemas"
          subTitle="Uniasselvi"
          des="O curso tecnólogo em Análise e Desenvolvimento de Sistemas possibilita a atuação com consultoria ou desenvolvimento de softwares em empresas do setor público e privado, com destaque para os negócios da área de Tecnologia de Informação (TI) e de telecomunicações."
        />
      </div>
    </div>
  )
}
