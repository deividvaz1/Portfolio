import { AboutMe } from './AboutMe'
import { Title } from './Title'

export function About() {
  return (
    <section id="about" className="w-full">
      <Title title="About" subTitle="Me" />
      <AboutMe />
    </section>
  )
}
