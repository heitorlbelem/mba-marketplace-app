import { ReactNode } from 'react'

type RootProps = {
  children: ReactNode
}

export function Root({ children }: RootProps) {
  return <div className="flex flex-col gap-1">{children}</div>
}
