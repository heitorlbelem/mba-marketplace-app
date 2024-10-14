import { ReactNode } from 'react'

type RootProps = {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return (
    <div className="w-full border-b-2 py-2 focus-within:border-b-orange-base flex gap-2 items-center">
      {children}
    </div>
  )
}
