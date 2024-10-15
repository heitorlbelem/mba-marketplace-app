import {
  ArrowRightIcon,
  KeyRoundIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { AuthFormHeader } from '../../components/AuthFormHeader'
import { InputContainer } from '../../components/InputContainer'
import { InputWrapper } from '../../components/InputWrapper'

export function SignUp() {
  return (
    <>
      <Helmet title="Criar conta" />
      <>
        <AuthFormHeader
          pageTitle="Criar sua conta"
          pageDescription="Informe os seus dados pessoais e de acesso"
        />

        <form className="flex flex-col gap-12">
          <fieldset className="flex flex-col gap-5">
            <h2 className="font-title text-lg font-bold text-gray-500">
              Perfil
            </h2>
            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="name">nome</InputWrapper.Label>
              <InputContainer.Root>
                <InputContainer.Icon icon={UserIcon} />
                <InputContainer.TextField
                  id="name"
                  placeholder="Seu nome completo"
                />
              </InputContainer.Root>
            </InputWrapper.Root>

            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="phone">telefone</InputWrapper.Label>
              <InputContainer.Root>
                <InputContainer.Icon icon={PhoneIcon} />
                <InputContainer.TextField
                  id="phone"
                  placeholder="(00) 00000-0000"
                />
              </InputContainer.Root>
            </InputWrapper.Root>
          </fieldset>

          <fieldset className="flex flex-col gap-5">
            <h2 className="font-title text-lg font-bold text-gray-500">
              Acesso
            </h2>

            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="email">e-mail</InputWrapper.Label>
              <InputContainer.Root>
                <InputContainer.Icon icon={MailIcon} />
                <InputContainer.TextField
                  id="email"
                  placeholder="Seu e-mail de acesso"
                />
              </InputContainer.Root>
            </InputWrapper.Root>

            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="password">senha</InputWrapper.Label>
              <InputContainer.Root>
                <InputContainer.Icon icon={KeyRoundIcon} />
                <InputContainer.TextField
                  id="password"
                  placeholder="Senha de acesso"
                />
              </InputContainer.Root>
            </InputWrapper.Root>

            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="confirm-password">
                confirmar senha
              </InputWrapper.Label>
              <InputContainer.Root>
                <InputContainer.Icon icon={KeyRoundIcon} />
                <InputContainer.TextField
                  id="confirm-password"
                  placeholder="Confirme a senha"
                />
              </InputContainer.Root>
            </InputWrapper.Root>
          </fieldset>

          <button
            type="submit"
            className="flex items-center justify-between rounded-[10px] bg-orange-base p-5 text-white"
          >
            Cadastrar
            <ArrowRightIcon />
          </button>
        </form>

        <div className="mt-20 flex flex-col gap-5">
          <p className="font-base text-base text-gray-300">Já tem uma conta?</p>
          <button className="flex items-center justify-between rounded-lg border-2 border-orange-base bg-white p-5 text-orange-base">
            Acessar
            <ArrowRightIcon />
          </button>
        </div>
      </>
    </>
  )
}
