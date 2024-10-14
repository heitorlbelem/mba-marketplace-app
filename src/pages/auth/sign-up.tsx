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
      <div className="w-[563px] flex flex-col gap-8 px-20 py-16 rounded-3xl bg-white my-6 mx-auto">
        <header className="flex flex-col gap-2">
          <h1 className="font-title font-bold text-gray-500 text-2xl">
            Criar sua conta
          </h1>
          <p className="font-base font-normal text-gray-300 text-sm">
            Informe os seus dados pessoais e de acesso
          </p>
        </header>

        <form className="flex flex-col gap-8">
          <fieldset className="flex flex-col gap-5">
            <legend className="font-title font-bold text-lg text-gray-500 mb-5">
              Perfil
            </legend>

            <div className="relative rounded-xl bg-orange-base/10 w-48 h-48 flex items-center justify-center focus-within:border-2 focus-within:border-orange-base">
              <label htmlFor="avatar" className="sr-only">
                Escolha uma imagem de perfil
              </label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                className="w-full h-full opacity-0 absolute hover:cursor-pointer"
                accept=".png, .jpeg, .jpg"
              />
              <ImageUpIcon className="w-12 h-12 text-orange-base align-center" />
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
            <legend className="font-title font-bold text-lg text-gray-500 mb-5">
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

          <button className="bg-orange-base text-white rounded-xl flex items-center justify-between p-5 mt-4 hover:bg-orange-base/95">
            Cadastrar
            <ArrowRight />
          </button>
        </form>

        <div className="flex flex-col gap-5 mt-[132px]">
          <p className="font-base font-normal text-normal text-gray-300">
            Já tem uma conta?
          </p>
          <button className="bg-white text-orange-base border-2 border-orange-base rounded-xl flex items-center justify-between p-5">
            Acessar
            <ArrowRight className="text-orange-base" />
          </button>
        </div>
      </div>
    </>
  )
}
