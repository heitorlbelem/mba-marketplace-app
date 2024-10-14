import { Outlet } from 'react-router-dom'

import background from '../../assets/auth-background.png'
import logo from '../../assets/logo.svg'

export function AuthLayout() {
  return (
    <div className="flex h-screen w-screen gap-6 bg-background">
      <div>
        <div className="flex items-center gap-5 p-10">
          <img src={logo} alt="" />
          <div>
            <h2 className="font-title text-xl font-bold text-gray-500">
              Marketplace
            </h2>
            <p className="font-base text-base font-normal text-gray-400">
              Painel de Vendedor
            </p>
          </div>
        </div>

        <img src={background} alt="" className="max-w-[755px]" />
      </div>
      <Outlet />
    </div>
  )
}
