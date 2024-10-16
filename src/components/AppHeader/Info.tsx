import { ReactNode } from 'react'

type InfoProps = {
  title: string
  description: string
  children?: ReactNode
}

export function Info({ title, description, children }: InfoProps) {
  return (
    <div className="flex items-end justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="font-title text-2xl font-bold leading-tight text-gray-500">
          {title}
        </h1>
        <p className="font-base text-sm text-gray-300">{description}</p>
      </div>
      {children}
    </div>
  )
}
