import { ReactNode, SelectHTMLAttributes } from 'react'

type SelectFieldProps = {
  children: ReactNode
} & SelectHTMLAttributes<HTMLSelectElement>

export function SelectField({ children, ...rest }: SelectFieldProps) {
  return (
    <select
      className="flex-1 bg-transparent font-base text-base font-normal text-gray-200 outline-none"
      {...rest}
    >
      {children}
    </select>
  )
}
