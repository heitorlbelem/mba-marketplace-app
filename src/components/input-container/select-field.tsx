import { forwardRef, ReactNode, SelectHTMLAttributes } from 'react'

type SelectFieldProps = {
  children: ReactNode
} & SelectHTMLAttributes<HTMLSelectElement>

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ children, ...rest }, ref) => {
    return (
      <select
        className="flex-1 bg-transparent font-base text-base font-normal text-gray-200 outline-none"
        ref={ref}
        {...rest}
      >
        {children}
      </select>
    )
  },
)

SelectField.displayName = 'SelectField'
