import { ElementType } from 'react'

type IconElementProps = {
  icon: ElementType
}

export function IconElement({ icon: Icon }: IconElementProps) {
  return <Icon className="h-6 w-6 text-gray-200" />
}
