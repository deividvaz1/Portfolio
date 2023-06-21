export function AboutMe() {
  return (
    <div className="flex flex-col pb-6 sm:flex-row">
      <div className="flex w-full flex-col border-b border-gray-800 p-6 text-zinc-400 sm:w-1/2 sm:border-b-0 sm:border-r">
        <div className="py-6">
          <h2 className="text-alt mb-1 text-lg font-semibold">
            Olá, meu nome é Deivid Vaz
          </h2>
          <p className="text-base font-normal leading-6">
            Sou um desenvolvedor web e mobile, atualmente trabalhando como
            desenvolvedor de software na empresa Ipé Saúde. Tenho experiência na
            criação de soluções eficientes e intuitivas, utilizando tecnologias
            como HTML, CSS, JS, ReactJS, React Native e NodeJS. Busco
            constantemente a criação de novos projetos inovadores para aplicar e
            expandir meu conhecimento.
          </p>
        </div>
      </div>
      <div className="mt-4 w-full p-6 sm:w-1/2">
        <ul className="sm:flex-col sm:space-y-2">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Idade:</span>
            20
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Nacionalidade:</span>
            Brasileiro
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Localização:</span>
            Viamão, RS
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Profissão:</span>
            Desenvolvedor
          </li>
        </ul>
      </div>
    </div>
  )
}
