import { SideNavTitle } from './SideNavTitle'

export function SideNav() {
  return (
    <div className="px-7 py-4">
      <SideNavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Meu portfólio</li>
        <SideNavTitle title="P" subTitle="rojetos Hospedados" />
      </ul>
      <ul>
        <li className="sidenavLi">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://restaurante-php.000webhostapp.com/projetophp/restaurante.php"
          >
            Restaurante Fictício
          </a>
        </li>
        <li className="sidenavLi">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://projeto-nlw-five.vercel.app/"
          >
            Cápsula do Tempo
          </a>
        </li>
      </ul>
      <SideNavTitle title="M" subTitle="eu contato" />
      <ul>
        <li className="sidenavLi">+55 (51) 98484-0959</li>
        <li className="sidenavLi">deividvaz100@gmail.com</li>
      </ul>
    </div>
  )
}
