import { ButtonHTMLAttributes, ElementType } from 'react'

type ActionProps = {
  icon: ElementType
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Action({ icon: Icon, ...rest }: ActionProps) {
  return (
    <button {...rest} className="h-6 w-6 text-gray-100 hover:cursor-pointer">
      <Icon size={24} />
    </button>
  )
}
