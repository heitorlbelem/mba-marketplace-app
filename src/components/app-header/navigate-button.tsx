import { ArrowLeftIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function NavigateButton() {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <button
      onClick={handleGoBack}
      className="m-0 flex items-center gap-2 p-0 text-orange-base"
    >
      <ArrowLeftIcon />
      Voltar
    </button>
  )
}
