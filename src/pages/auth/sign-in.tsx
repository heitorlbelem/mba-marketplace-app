import { ArrowRightIcon, KeyRoundIcon, MailIcon } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { InputField } from '../../components/InputField'
import { InputWrapper } from '../../components/InputWrapper'
import { AuthAside } from './components/AuthAside'

export function SignIn() {
  return (
    <>
      <Helmet title="Entrar" />
      <div className="h-screen w-screen bg-background flex gap-6">
        <AuthAside />
        <div className="w-[563px] flex flex-col px-20 py-16 rounded-3xl bg-white my-6 mx-auto">
          <header className="flex flex-col gap-2 mb-12">
            <h1 className="font-title font-bold text-gray-500 text-2xl">
              Acessar sua conta
            </h1>
            <p className="font-base font-normal text-gray-300 text-sm">
              Informe seu e-mail e senha para entrar
            </p>
          </header>
          <form className="flex flex-col gap-5">
            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="email">e-mail</InputWrapper.Label>
              <InputField.Root>
                <InputField.Icon icon={MailIcon} />
                <InputField.Field
                  placeholder="Seu e-mail cadastrado"
                  id="email"
                />
              </InputField.Root>
            </InputWrapper.Root>

            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="password">senha</InputWrapper.Label>
              <InputField.Root>
                <InputField.Icon icon={KeyRoundIcon} />
                <InputField.Field
                  placeholder="Sua senha de acesso"
                  id="password"
                />
              </InputField.Root>
            </InputWrapper.Root>

            <button className="bg-orange-base text-white rounded-xl flex items-center justify-between p-5 mt-9 hover:bg-orange-base/95">
              Acessar
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </form>
          <div className="flex flex-col gap-5 mt-[132px]">
            <p className="font-base font-normal text-normal text-gray-300">
              Ainda não tem uma conta?
            </p>
            <button className="bg-white text-orange-base border-2 border-orange-base rounded-xl flex items-center justify-between p-5">
              Acessar
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
