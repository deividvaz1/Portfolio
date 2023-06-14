import { Education } from './Education'
import { Skills } from './Skills'
import { Title } from './Title'

export function Resume() {
  return (
    <section id="resume">
      <Title title="Meu" subTitle="Resumo" />
      <Education />
      <Title title="Minhas" subTitle="Competências" />
      <Skills />
    </section>
  )
}
