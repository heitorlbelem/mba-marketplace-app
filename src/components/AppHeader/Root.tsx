import { ReactNode } from 'react'

export function Root({ children }: { children: ReactNode }) {
  return <header className="flex flex-col gap-2">{children}</header>
}
