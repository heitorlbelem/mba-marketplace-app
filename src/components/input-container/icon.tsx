import { ElementType } from 'react'

type IconProps = {
  icon: ElementType
}

export function Icon({ icon: Icon }: IconProps) {
  return <Icon className="h-6 w-6 text-gray-200" />
}
