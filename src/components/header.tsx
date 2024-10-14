import { BoxIcon, ChartLineIcon, PlusIcon } from 'lucide-react'

import logo from '../assets/logo.svg'
import { NavLink } from './NavLink'

export function Header() {
  return (
    <header className="flex items-center justify-between p-5 border-b-shape border-b-[1px]">
      <img src={logo} alt="" className="w-14 h-10" />
      <nav className="flex gap-2 items-center">
        <NavLink to="/">
          <ChartLineIcon />
          Dashboard
        </NavLink>
        <NavLink to="/products">
          <BoxIcon />
          Produtos
        </NavLink>
      </nav>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-2.5 bg-orange-base text-white rounded-lg font-base text-sm">
          <PlusIcon />
          Novo produto
        </button>
        <img
          src="https://github.com/heitorlbelem.png"
          alt=""
          className="w-12 h-12 rounded-lg"
        />
      </div>
    </header>
  )
}
