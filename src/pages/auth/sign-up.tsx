import {
  ArrowRight,
  EyeIcon,
  ImageUpIcon,
  KeyRoundIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

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
      </>
    </>
  )
}
