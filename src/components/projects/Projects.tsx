'use client'
import ImageSrc from 'src/app/public/assets/layout-app-saude.png'
import Spacetime from 'src/app/public/assets/memorias.png'
import Restaurante from 'src/app/public/assets/restaurante.png'
import { Title } from '../Title'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <div>
      <Title title="Meus" subTitle="Projetos" />
      <div className="grid w-full grid-cols-2 gap-10">
        <div className="px-6">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/deividvaz1/AppSaude"
          >
            <ProjectCard
              title="App Saúde"
              category="Aplicativo"
              image={ImageSrc}
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/deividvaz1/Projeto-NLW"
          >
            <ProjectCard
              title="Cápsula do tempo"
              category="Website Responsivo"
              image={Spacetime} // substitua pelo caminho correto da sua imagem
            />
          </a>
        </div>
        <div className="px-6 ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/deividvaz1/restaurant-website"
          >
            <ProjectCard
              title="Restaurante Fictício"
              category="Website Responsivo"
              image={Restaurante} // substitua pelo caminho correto da sua imagem
            />
          </a>
        </div>
      </div>
    </div>
  )
}
