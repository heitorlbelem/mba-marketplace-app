import { forwardRef, TextareaHTMLAttributes } from 'react'

export const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => {
  return (
    <textarea
      ref={ref}
      className="min-h-32 flex-1 bg-transparent font-base text-base font-normal text-gray-200 outline-none"
      {...props}
    />
  )
})

TextAreaField.displayName = 'TextAreaField'
