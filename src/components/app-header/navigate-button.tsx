import { ArrowLeftIcon } from 'lucide-react'

import { NavLink } from '../nav-link'

export function NavigateButton() {
  return (
    <NavLink to="/" type="back" className="m-0 flex items-center gap-2 p-0">
      <ArrowLeftIcon />
      Voltar
    </NavLink>
  )
}
