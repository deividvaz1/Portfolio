import { SideNavTitle } from './SideNavTitle'

export function SideNav() {
  return (
    <div className="px-7 py-4">
      <SideNavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Meu portfólio</li>
        <SideNavTitle title="P" subTitle="rojetos" />
      </ul>
      <ul>
        <li className="sidenavLi">Web Developtment</li>
        <li className="sidenavLi">Web Developtment</li>
        <li className="sidenavLi">Web Developtment</li>
      </ul>
      <SideNavTitle title="M" subTitle="eu contato" />
      <ul>
        <li className="sidenavLi">+55 (51)984840959</li>
        <li className="sidenavLi">@gmail.com</li>
      </ul>
    </div>
  )
}
