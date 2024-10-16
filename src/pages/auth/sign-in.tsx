import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { ArrowRightIcon, EyeIcon, KeyRoundIcon, MailIcon } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { signIn } from '../../api/sign-in'
import { AuthFormHeader } from '../../components/AuthFormHeader'
import { InputContainer } from '../../components/InputContainer'
import { InputWrapper } from '../../components/InputWrapper'

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type SignInFormType = z.infer<typeof signInSchema>

export function SignIn() {
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<SignInFormType>({
    resolver: zodResolver(signInSchema),
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: SignInFormType) {
    try {
      const { email, password } = data
      await authenticate({ email, password })
    } catch {
      console.error('Credenciais inválidas.')
    }
  }

  return (
    <>
      <Helmet title="Entrar" />
      <>
        <AuthFormHeader
          pageTitle="Acesse sua conta"
          pageDescription="Informe seu e-mail e senha para entrar"
        />

        <form
          className="flex flex-col gap-12"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <fieldset className="flex flex-col gap-5">
            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="email">e-mail</InputWrapper.Label>
              <InputContainer.Root>
                <InputContainer.Icon icon={MailIcon} />
                <input
                  className="flex-1 bg-transparent font-base text-base font-normal text-gray-200 outline-none"
                  placeholder="Seu e-mail cadastrado"
                  type="email"
                  id="email"
                  {...register('email')}
                />
              </InputContainer.Root>
            </InputWrapper.Root>

            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="password">senha</InputWrapper.Label>
              <InputContainer.Root>
                <InputContainer.Icon icon={KeyRoundIcon} />
                <input
                  className="flex-1 bg-transparent font-base text-base font-normal text-gray-200 outline-none"
                  placeholder="Sua senha de acesso"
                  type="password"
                  id="password"
                  {...register('password')}
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
