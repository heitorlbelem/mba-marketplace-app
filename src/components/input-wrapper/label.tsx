import { LabelHTMLAttributes, ReactNode } from 'react'

type LabelProps = {
  children: ReactNode
} & LabelHTMLAttributes<HTMLLabelElement>

export function Label({ children, ...rest }: LabelProps) {
  return (
    <label className="font-base text-xs uppercase text-gray-300" {...rest}>
      {children}
    </label>
  )
}
