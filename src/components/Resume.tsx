import { Education } from "./Education";
import { Title } from "./Title";

export function Resume() {
  return (
    <section id="resume">
      <Title title="Meu" subTitle="Resumo" />
      <Education />
    </section>
  )
}