import { ElementType } from 'react'

type IconElementProps = {
  icon: ElementType
}

export function IconElement({ icon: Icon }: IconElementProps) {
  return <Icon className="w-6 h-6 text-gray-200" />
}
