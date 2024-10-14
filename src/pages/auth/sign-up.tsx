import {
  ArrowRight,
  ImageUpIcon,
  KeyRoundIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { InputField } from '../../components/InputField'
import { InputWrapper } from '../../components/InputWrapper'

export function SignUp() {
  return (
    <>
      <Helmet title="Criar conta" />
      <div className="mx-auto my-6 flex w-[563px] flex-col gap-8 rounded-3xl bg-white px-20 py-16">
        <header className="flex flex-col gap-2">
          <h1 className="font-title text-2xl font-bold text-gray-500">
            Criar sua conta
          </h1>
          <p className="font-base text-sm font-normal text-gray-300">
            Informe os seus dados pessoais e de acesso
          </p>
        </header>

        <form className="flex flex-col gap-8">
          <fieldset className="flex flex-col gap-5">
            <legend className="mb-5 font-title text-lg font-bold text-gray-500">
              Perfil
            </legend>

            <div className="relative flex h-48 w-48 items-center justify-center rounded-xl bg-orange-base/10 focus-within:border-2 focus-within:border-orange-base">
              <label htmlFor="avatar" className="sr-only">
                Escolha uma imagem de perfil
              </label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                className="absolute h-full w-full opacity-0 hover:cursor-pointer"
                accept=".png, .jpeg, .jpg"
              />
              <ImageUpIcon className="align-center h-12 w-12 text-orange-base" />
            </div>

            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="name">Nome</InputWrapper.Label>
              <InputField.Root>
                <InputField.Icon icon={UserIcon} />
                <InputField.Field placeholder="Seu nome completo" id="name" />
              </InputField.Root>
            </InputWrapper.Root>

            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="phone">Telefone</InputWrapper.Label>
              <InputField.Root>
                <InputField.Icon icon={PhoneIcon} />
                <InputField.Field placeholder="(00) 00000-0000" id="phone" />
              </InputField.Root>
            </InputWrapper.Root>
          </fieldset>

          <fieldset className="flex flex-col gap-5">
            <legend className="mb-5 font-title text-lg font-bold text-gray-500">
              Acesso
            </legend>

            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="email">E-mail</InputWrapper.Label>
              <InputField.Root>
                <InputField.Icon icon={MailIcon} />
                <InputField.Field
                  placeholder="Seu e-mail de acesso"
                  id="email"
                  type="email"
                />
              </InputField.Root>
            </InputWrapper.Root>

            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="password">Senha</InputWrapper.Label>
              <InputField.Root>
                <InputField.Icon icon={KeyRoundIcon} />
                <InputField.Field
                  placeholder="Senha de acesso"
                  id="password"
                  type="password"
                />
              </InputField.Root>
            </InputWrapper.Root>

            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="confirm-password">
                Confirmar senha
              </InputWrapper.Label>
              <InputField.Root>
                <InputField.Icon icon={KeyRoundIcon} />
                <InputField.Field
                  placeholder="Confirme a senha"
                  id="confirm-password"
                  type="password"
                />
              </InputField.Root>
            </InputWrapper.Root>
          </fieldset>

          <button className="mt-4 flex items-center justify-between rounded-xl bg-orange-base p-5 text-white hover:bg-orange-base/95">
            Cadastrar
            <ArrowRight />
          </button>
        </form>

        <div className="mt-[132px] flex flex-col gap-5">
          <p className="text-normal font-base font-normal text-gray-300">
            Já tem uma conta?
          </p>
          <button className="flex items-center justify-between rounded-xl border-2 border-orange-base bg-white p-5 text-orange-base">
            Acessar
            <ArrowRight className="text-orange-base" />
          </button>
        </div>
      </div>
    </>
  )
}
