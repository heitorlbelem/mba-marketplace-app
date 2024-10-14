import { LabelHTMLAttributes, ReactNode } from 'react'

type InputLabelProps = {
  children: ReactNode
} & LabelHTMLAttributes<HTMLLabelElement>

export function InputLabel({ children, ...rest }: InputLabelProps) {
  return (
    <label className="font-base text-xs uppercase text-gray-300" {...rest}>
      {children}
    </label>
  )
}
