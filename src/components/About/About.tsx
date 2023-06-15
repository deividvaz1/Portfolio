import { AboutMe } from './AboutMe'

import { Title } from '../Title'
import { MyServices } from '../MyServices'

export function About() {
  return (
    <section id="about" className="w-full">
      <Title title="Sobre" subTitle="mim" />
      <AboutMe />
      <Title title="Trabalho" subTitle="com" />
      <MyServices />
    </section>
  )
}
