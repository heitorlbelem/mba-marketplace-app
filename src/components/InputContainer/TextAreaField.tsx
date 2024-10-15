import { TextareaHTMLAttributes } from 'react'

export function TextAreaField(
  props: TextareaHTMLAttributes<HTMLTextAreaElement>,
) {
  return (
    <textarea
      className="min-h-32 flex-1 bg-transparent font-base text-base font-normal text-gray-200 outline-none"
      {...props}
    />
  )
}
