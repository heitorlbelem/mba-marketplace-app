import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import {
  ArrowRightIcon,
  KeyRoundIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { signUp } from '../../api/sign-up'
import { uploadAttachment } from '../../api/upload-attachment'
import { AuthFormHeader } from '../../components/auth-form-header'
import { FileInput } from '../../components/file-input'
import { InputContainer } from '../../components/input-container'
import { InputWrapper } from '../../components/input-wrapper'

const signUpSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  passwordConfirmation: z.string().min(6),
})

type SignUpFormType = z.infer<typeof signUpSchema>

export function SignUp() {
  const [userImage, setUserImage] = useState<File | null>(null)
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpSchema),
  })

  const { mutateAsync: uploadAttachmentFn } = useMutation({
    mutationFn: uploadAttachment,
  })
  const { mutateAsync: signUpFn } = useMutation({
    mutationFn: signUp,
    onSuccess: () => navigate('/sign-in'),
  })

  async function handleSignUp(data: SignUpFormType) {
    const { name, phone, email, password, passwordConfirmation } = data
    let avatarId = null
    if (userImage) {
      const uploadedAvatar = (await uploadAttachmentFn(userImage)).data
      avatarId = uploadedAvatar.attachments[0].id
    }
    await signUpFn({
      name,
      phone,
      email,
      password,
      passwordConfirmation,
      avatarId,
    })
  }

  return (
    <>
      <Helmet title="Criar conta" />
      <>
        <AuthFormHeader
          pageTitle="Criar sua conta"
          pageDescription="Informe os seus dados pessoais e de acesso"
        />

        <form
          className="flex flex-col gap-12"
          onSubmit={handleSubmit(handleSignUp)}
        >
          <fieldset className="flex flex-col gap-5">
            <h2 className="font-title text-lg font-bold text-gray-500">
              Perfil
            </h2>

            <FileInput
              wrapperSize="sm"
              onFileChange={(file) => setUserImage(file)}
            />

            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="name">nome</InputWrapper.Label>
              <InputContainer.Root>
                <InputContainer.Icon icon={UserIcon} />
                <InputContainer.TextField
                  id="name"
                  placeholder="Seu nome completo"
                  {...register('name')}
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
                  {...register('phone')}
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
                  type="email"
                  placeholder="Seu e-mail cadastrado"
                  {...register('email')}
                />
              </InputContainer.Root>
            </InputWrapper.Root>

            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="password">senha</InputWrapper.Label>
              <InputContainer.Root>
                <InputContainer.Icon icon={KeyRoundIcon} />
                <InputContainer.TextField
                  id="password"
                  type="password"
                  placeholder="Sua senha de acesso"
                  {...register('password')}
                />
              </InputContainer.Root>
            </InputWrapper.Root>

            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="passwordConfirmation">
                confirmar senha
              </InputWrapper.Label>
              <InputContainer.Root>
                <InputContainer.Icon icon={KeyRoundIcon} />
                <InputContainer.TextField
                  id="passwordConfirmation"
                  type="password"
                  placeholder="Confirme sua senha"
                  {...register('passwordConfirmation')}
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
          <button
            type="button"
            className="flex items-center justify-between rounded-lg border-2 border-orange-base bg-white p-5 text-orange-base"
            onClick={() => navigate('/sign-in')}
          >
            Acessar
            <ArrowRightIcon />
          </button>
        </div>
      </>
    </>
  )
}
