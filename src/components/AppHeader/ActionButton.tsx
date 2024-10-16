import { ButtonHTMLAttributes, ElementType } from 'react'

type ActionButtonProps = {
  title: string
  icon: ElementType
} & ButtonHTMLAttributes<HTMLButtonElement>

export function ActionButton({
  title,
  icon: Icon,
  ...props
}: ActionButtonProps) {
  return (
    <button
      {...props}
      className="flex items-center gap-2 font-base text-sm font-medium text-orange-base hover:text-orange-dark"
    >
      <Icon className="h-5 w-5" />
      {title}
    </button>
  )
}
