import { BoxIcon, ChartLineIcon, PlusIcon } from 'lucide-react'
import { Outlet, useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { NavLink } from '../../components/nav-link'
import { UserDialog } from '../../components/user-dialog'

export function AppLayout() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="align-center mx-auto flex w-11/12 justify-between border-b-[1px] border-b-shape p-5">
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
          <button
            onClick={() => {
              navigate('/products/new')
            }}
            className="flex items-center gap-2 rounded-lg bg-orange-base px-4 py-2.5 font-base text-sm text-white"
          >
            <PlusIcon />
            Novo produto
          </button>

          <UserDialog />
        </div>
      </header>
      <main className="mx-auto my-16 w-full max-w-[1130px]">
        <div className="flex flex-col gap-10">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
