import { Helmet } from 'react-helmet-async'

import { AppHeader } from '../../../components/app-header'
import { Metrics } from './metrics'
import { VisitsPerDayChart } from './visits-per-day-chart'

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
        <Metrics />
        <VisitsPerDayChart />
      </div>
    </>
  )
}
