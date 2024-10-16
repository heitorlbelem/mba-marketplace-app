import { ReactNode } from 'react'

export function Actions({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-4 pr-3">{children}</div>
}
