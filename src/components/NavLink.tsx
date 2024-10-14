import { ReactNode } from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'

type NavLinkProps = {
  children: ReactNode
} & LinkProps

export function NavLink({ children, ...rest }: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      {...rest}
      data-current={rest.to === pathname}
      className="rounded-[10px] text-sm font-base flex items-center gap-2 py-2.5 px-4 data-[current=true]:text-orange-base data-[current=true]:bg-shape"
    >
      {children}
    </Link>
  )
}
