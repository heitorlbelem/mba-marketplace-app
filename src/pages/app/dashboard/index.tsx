import { StoreIcon, TicketPercentIcon, UsersIcon } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { AppHeader } from '../../../components/AppHeader'
import { LineChartCard } from './LineChartCard'
import { MetricCard } from './MetricCard'

export function Dashboard() {
  return (
    <>
      <Helmet title="Página Inicial" />

      <AppHeader.Root>
        <AppHeader.Info
          title="Últimos 30 dias"
          description="Confira as estatísticas da sua loja no último mês"
        />
      </AppHeader.Root>

      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-4">
          <MetricCard
            value={22}
            description="Produtos vendidos"
            icon={TicketPercentIcon}
          />
          <MetricCard
            value={56}
            description="Produtos anunciados"
            icon={StoreIcon}
          />
          <MetricCard
            value={1238}
            description="Pessoas visitantes"
            icon={UsersIcon}
            variant="ghost"
          />
        </div>

        <LineChartCard />
      </div>
    </>
  )
}
