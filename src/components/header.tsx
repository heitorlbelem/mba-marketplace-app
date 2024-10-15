import { BoxIcon, ChartLineIcon, PlusIcon } from 'lucide-react'

import logo from '../assets/logo.svg'
import { NavLink } from './NavLink'

export function Header() {
  return (
    <header className="mx-auto flex max-w-[1366px] items-center justify-between border-b-[1px] border-b-shape p-5">
      <img src={logo} alt="" className="h-10 w-14" />
      <nav className="flex items-center gap-2">
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
        <button className="flex items-center gap-2 rounded-lg bg-orange-base px-4 py-2.5 font-base text-sm text-white">
          <PlusIcon />
          Novo produto
        </button>
        <img
          src="https://github.com/heitorlbelem.png"
          alt=""
          className="h-12 w-12 rounded-lg"
        />
      </div>
    </header>
  )
}
