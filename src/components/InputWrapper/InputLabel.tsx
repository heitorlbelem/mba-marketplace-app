import { LabelHTMLAttributes, ReactNode } from 'react'

type InputLabelProps = {
  children: ReactNode
} & LabelHTMLAttributes<HTMLLabelElement>

export function InputLabel({ children, ...rest }: InputLabelProps) {
  return (
    <label className="text-xs font-base text-gray-300 uppercase" {...rest}>
      {children}
    </label>
  )
}
