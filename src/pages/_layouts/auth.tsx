import { Outlet } from 'react-router-dom'

import background from '../../assets/auth-background.png'
import logo from '../../assets/logo.svg'

export function AuthLayout() {
  return (
    <div className="min-h-screen w-screen bg-background">
      <div className="mx-auto flex max-w-screen-2xl items-start gap-6 p-6">
        <div className="flex flex-col gap-14">
          <div className="flex items-center gap-5 p-4">
            <img src={logo} alt="" />
            <h2 className="flex flex-col gap-1 font-title text-2xl font-bold text-gray-500">
              Marketplace
              <small className="font-base text-base font-normal text-gray-300">
                Painel de Vendedor
              </small>
            </h2>
          </div>
          <img src={background} alt="" className="max-w-[755px]" />
        </div>

        <main className="flex max-w-[560px] flex-1 flex-col rounded-3xl bg-white px-20 py-[72px]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
