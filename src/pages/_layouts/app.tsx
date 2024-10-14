import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'

export function AppLayout() {
  return (
    <div className="min-h-screen w-screen bg-background">
      <Header />
      <Outlet />
    </div>
  )
}
