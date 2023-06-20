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
          des="Lorem ipsa, dolorem sint. Pariatur alias amet nemo aspernatur hic, placeat nam commodi sed quas. Earum."
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
          des="Lorem ipsa, dolorem sint. Pariatur alias amet nemo aspernatur hic, placeat nam commodi sed quas. Earum."
        />
      </div>
    </div>
  )
}
