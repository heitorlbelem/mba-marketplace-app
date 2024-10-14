import { ArrowRightIcon, KeyRoundIcon, MailIcon } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { InputField } from '../../components/InputField'
import { InputWrapper } from '../../components/InputWrapper'

export function SignIn() {
  return (
    <>
      <Helmet title="Entrar" />
      <div className="mx-auto my-6 flex w-[563px] flex-col rounded-3xl bg-white px-20 py-16">
        <header className="mb-12 flex flex-col gap-2">
          <h1 className="font-title text-2xl font-bold text-gray-500">
            Acessar sua conta
          </h1>
          <p className="font-base text-sm font-normal text-gray-300">
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

          <button className="mt-9 flex items-center justify-between rounded-xl bg-orange-base p-5 text-white hover:bg-orange-base/95">
            Acessar
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </form>
        <div className="mt-[132px] flex flex-col gap-5">
          <p className="text-normal font-base font-normal text-gray-300">
            Ainda não tem uma conta?
          </p>
          <Link
            to="/sign-up"
            className="flex items-center justify-between rounded-xl border-2 border-orange-base bg-white p-5 text-orange-base"
          >
            Acessar
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  )
}
