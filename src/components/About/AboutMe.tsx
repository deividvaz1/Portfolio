export function AboutMe() {
  return (
    <div className="flex flex-col pb-6 sm:flex-row">
      <div className="flex w-full flex-col border-b p-6 text-zinc-400 sm:w-1/2 sm:border-b-0 sm:border-r">
        <div className="py-6">
          <h2 className="text-alt mb-1 text-lg font-semibold">Teste grid</h2>
          <p className="text-base font-normal leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nobis voluptate atque deleniti tempore illum, odit culpa eaque velit
            rem natus corrupti officiis molestiae cum quidem expedita id
            excepturi sapiente?
          </p>
        </div>
      </div>
      <div className="w-full p-6 sm:w-1/2">
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
