'use client'
import { AboutMe } from './AboutMe'
import { Title } from '../Title'
import { MyServices } from './MyServices'

export function About() {
  return (
    <section className="w-full">
      <Title title="Sobre" subTitle="mim" />
      <AboutMe />
      <Title title="Trabalho" subTitle="com" />
      <MyServices />
    </section>
  )
}
