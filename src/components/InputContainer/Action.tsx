import { ElementType } from 'react'

export function Action({ icon: Icon }: { icon: ElementType }) {
  return (
    <Icon size={24} className="h-6 w-6 text-gray-100 hover:cursor-pointer" />
  )
}
