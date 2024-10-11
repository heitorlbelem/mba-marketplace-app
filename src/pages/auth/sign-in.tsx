import { ArrowRightIcon, KeyRoundIcon, MailIcon } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import backgroundAuth from '../../assets/auth-background.png'
import logo from '../../assets/logo.svg'

export function SignIn() {
  return (
    <>
      <Helmet title="Entrar" />
      <div className="h-screen w-screen bg-background">
        <div className="flex mx-auto max-w-[1380px] gap-6">
          <div className="flex flex-col">
            <div className="flex gap-5 items-center p-10">
              <img src={logo} alt="" />
              <p className="flex flex-col gap-1 font-title font-bold text-2xl">
                Marketplace
                <span className="font-base font-normal text-base">
                  Painel de Vendedor
                </span>
              </p>
            </div>
            <img src={backgroundAuth} alt="" className="w-[755px] h-[496px]" />
          </div>
          <form className="mt-6 bg-white rounded-[32px] py-16 px-20">
            <header className="flex flex-col gap-2 mb-12">
              <h1 className="font-title font-bold text-2xl">
                Acesse sua conta
              </h1>
              <p className="font-base font-normal text-sm text-gray-300">
                Informe seu e-mail e senha para entrar
              </p>
            </header>

            <fieldset className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label
                  className="text-xs font-base text-gray-300 uppercase"
                  htmlFor="email"
                >
                  e-mail
                </label>
                <div className="border-b-2 py-2 focus-within:border-b-orange-base flex gap-2 items-center">
                  <MailIcon className="w-6 h-6 text-gray-200" />
                  <input
                    type="email"
                    id="email"
                    className="outline-none font-base font-normal text-base text-gray-200 flex-1"
                    placeholder="Seu e-mail cadastrado"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  className="text-xs font-base text-gray-300 uppercase"
                  htmlFor="password"
                >
                  senha
                </label>
                <div className="border-b-2 py-2 focus-within:border-b-orange-base flex gap-2 items-center">
                  <KeyRoundIcon className="w-6 h-6 text-gray-200" />
                  <input
                    type="password"
                    id="password"
                    className="outline-none font-base font-normal text-base text-gray-200 flex-1"
                    placeholder="Sua senha de acesso"
                  />
                </div>
              </div>
            </fieldset>

            <button className="bg-orange-base text-white p-5 flex items-center justify-between w-full mt-12 rounded-xl hover:bg-orange-base/95 transition-all">
              Acessar
              <ArrowRightIcon className="text-white w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
