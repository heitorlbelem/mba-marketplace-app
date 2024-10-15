import { ReactNode } from 'react'

export function Actions({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2 p-1">{children}</div>
  )
}
