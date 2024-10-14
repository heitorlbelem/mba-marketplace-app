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
      className="flex items-center gap-2 rounded-[10px] px-4 py-2.5 font-base text-sm data-[current=true]:bg-shape data-[current=true]:text-orange-base"
    >
      {children}
    </Link>
  )
}
