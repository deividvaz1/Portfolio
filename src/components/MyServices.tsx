import { ServicesCard } from './ServicesCard'
import { FaAppStoreIos } from 'react-icons/fa'
import { AiTwotoneAppstore } from 'react-icons/ai'
import { SiAntdesign } from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi'

export function MyServices() {
  return (
    <div className="grid grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Desenvolvimento Web"
        subTitle="lorem ipsum, dolor sit amet consectetur adipiscining elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Design Web"
        subTitle="lorem ipsum, dolor sit amet consectetur adipiscining elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Aplicativos Mobile"
        subTitle="lorem ipsum, dolor sit amet consectetur adipiscining elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Desenvolvedor de Front-End"
        subTitle="lorem ipsum, dolor sit amet consectetur adipiscining elit. Hic, provident. Accusamus at dolorem expedita dicta."
      />
    </div>
  )
}
