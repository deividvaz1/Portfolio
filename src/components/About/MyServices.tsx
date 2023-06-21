import { ServicesCard } from './ServicesCard'
import { FaAppStoreIos } from 'react-icons/fa'
import { AiTwotoneAppstore } from 'react-icons/ai'
import { SiAntdesign } from 'react-icons/si'
import { BiCodeAlt } from 'react-icons/bi'

export function MyServices() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Desenvolvimento Web"
        subTitle="Desenvolvimento web personalizado para criar sites interativos e funcionais. Utilizo as mais recentes tecnologias e frameworks para transformar muitas ideias em realidade, garantindo uma experiência íncrivel e de alto desempenho."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Design Web"
        subTitle="Criação de designs web exclusivas e dinâmicas. Com habilidades em design, procuro sempre inovar, criando interfaces intuitivas e visualmente agradáveis."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Aplicativos Mobile"
        subTitle="Desenvolvimento de aplicativos móveis personalizados para Android. Com foco na usabilidade e desempenho."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Desenvolvimento Front-End"
        subTitle="Desenvolvimento front-end especializado em criar interfaces interativas e responsivas. Utilizo as melhores práticas de codificação e as mais recentes tecnologias para construir experiências web modernas e envolventes."
      />
    </div>
  )
}
