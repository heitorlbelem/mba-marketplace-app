import { InputHTMLAttributes } from 'react'

export function TextField(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="flex-1 bg-transparent font-base text-base font-normal text-gray-200 outline-none"
      {...props}
    />
  )
}
