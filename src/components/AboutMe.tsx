export function AboutMe() {
  return (
    <div className="flex pb-6">
      <div className="borderRight flex w-1/2 flex-col  p-6 text-zinc-400">
        <h2 className="text-alt mb-1 text-lg font-semibold">Teste grid</h2>
        <p className="text-base font-normal leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          nobis voluptate atque deleniti tempore illum, odit culpa eaque velit
          rem natus corrupti officiis molestiae cum quidem expedita id excepturi
          sapiente?
        </p>
      </div>
      <div className="w-1/2 p-6">
        <ul>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Teste</span>
            Teste
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Teste</span>
            Teste
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Teste</span>
            Teste
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Teste</span>
            Teste
          </li>
        </ul>
      </div>
    </div>
  )
}
