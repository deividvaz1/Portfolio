import { Copyright } from '../Copyright'
import { Title } from '../Title'
import { Education } from './Education'
import { Skills } from './Skills'

export function Resume() {
  return (
    <section id="resume">
      <Title title="Meu" subTitle="Resumo" />
      <Education />
      <Title title="Minhas" subTitle="Competências" />
      <Skills />
      <Title title="Informações" subTitle="adicionais" />
      <Copyright />
    </section>
  )
}
