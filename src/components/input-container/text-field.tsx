import { forwardRef, InputHTMLAttributes } from 'react'

export const TextField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      ref={ref}
      className="flex-1 bg-transparent font-base text-base font-normal text-gray-200 outline-none"
      {...props}
    />
  )
})

TextField.displayName = 'TextField'
