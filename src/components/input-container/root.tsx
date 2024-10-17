import { ReactNode } from 'react'

type RootProps = {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return (
    <div className="flex w-full items-center gap-2 border-b-2 py-2 focus-within:border-b-orange-base">
      {children}
    </div>
  )
}
