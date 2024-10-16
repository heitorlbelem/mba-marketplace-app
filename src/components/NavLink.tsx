import { ReactNode } from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'
import { tv, VariantProps } from 'tailwind-variants'

const navLink = tv({
  base: 'flex items-center gap-2 rounded-[10px] font-base text-sm hover:text-orange-base data-[current=true]:bg-shape data-[current=true]:text-orange-base',
  variants: {
    type: {
      default: 'px-4 py-2.5',
      back: 'p-0 mb-2 text-orange-base hover:text-orange-dark',
    },
  },
  defaultVariants: {
    type: 'default',
  },
})

type NavLinkProps = {
  children: ReactNode
} & LinkProps &
  VariantProps<typeof navLink>

export function NavLink({ type, children, ...rest }: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      {...rest}
      data-current={rest.to === pathname}
      className={navLink({ type })}
    >
      {children}
    </Link>
  )
}
