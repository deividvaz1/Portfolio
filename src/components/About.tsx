import { AboutMe } from './AboutMe'
import { MyServices } from './MyServices'
import { Title } from './Title'

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
