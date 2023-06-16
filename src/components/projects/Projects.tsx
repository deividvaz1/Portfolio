'use client'
import ImageSrc from 'public/assets/layout-app-saude.png'
import { Title } from '../Title'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <div>
      <Title title="Meus" subTitle="Projetos" />
      <div className="grid w-full grid-cols-2 gap-10">
        <div className="px-6">
          <ProjectCard
            title="App Saude"
            category="Aplicativo"
            image={ImageSrc} // substitua pelo caminho correto da sua imagem
          />
        </div>
      </div>
    </div>
  )
}
