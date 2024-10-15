import { ArrowRightIcon, EyeIcon, KeyRoundIcon, MailIcon } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import { AuthFormHeader } from '../../components/AuthFormHeader'
import { InputContainer } from '../../components/InputContainer'
import { InputWrapper } from '../../components/InputWrapper'

export function SignIn() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet title="Entrar" />
      <>
        <AuthFormHeader
          pageTitle="Acesse sua conta"
          pageDescription="Informe seu e-mail e senha para entrar"
        />
        <form className="flex flex-col gap-12">
          <fieldset className="flex flex-col gap-5">
            <InputWrapper.Root>
              <InputWrapper.Label>e-mail</InputWrapper.Label>
              <InputContainer.Root>
                <InputContainer.Icon icon={MailIcon} />
                <InputContainer.TextField placeholder="Seu e-mail cadastrado" />
              </InputContainer.Root>
            </InputWrapper.Root>

            <InputWrapper.Root>
              <InputWrapper.Label>Senha</InputWrapper.Label>
              <InputContainer.Root>
                <InputContainer.Icon icon={KeyRoundIcon} />
                <InputContainer.TextField
                  placeholder="Sua senha de acesso"
                  type="password"
                />
                <InputContainer.Action icon={EyeIcon} />
              </InputContainer.Root>
            </InputWrapper.Root>
          </fieldset>

          <button
            type="submit"
            className="flex items-center justify-between rounded-[10px] bg-orange-base p-5 text-white"
          >
            Acessar
            <ArrowRightIcon />
          </button>
        </form>

        <div className="mt-[131px] flex flex-col gap-5">
          <p className="font-base text-base text-gray-300">
            Ainda não tem uma conta?
          </p>
          <button
            type="button"
            className="flex items-center justify-between rounded-lg border-2 border-orange-base bg-white p-5 text-orange-base"
            onClick={() => navigate('/sign-up')}
          >
            Cadastrar
            <ArrowRightIcon />
          </button>
        </div>
      </>
    </>
  )
}
