import { InputHTMLAttributes } from 'react'

export function Field(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="outline-none font-base font-normal text-base text-gray-200 flex-1"
      {...props}
    />
  )
}
