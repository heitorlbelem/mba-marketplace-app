import { Helmet } from 'react-helmet-async'

import { LineChartCard } from './LineChartCard'
import { MetricCard } from './MetricCard'

export function Dashboard() {
  return (
    <>
      <Helmet title="Página Inicial" />
      <main className="flex flex-col gap-10 px-40 py-16">
        <div className="flex flex-col gap-2">
          <h1 className="font-title text-2xl font-bold leading-tight text-gray-500">
            Últimos 30 dias
          </h1>
          <p className="font-base text-sm text-gray-300">
            Confira as estatísticas da sua loja no último mês
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex flex-col gap-4">
            <MetricCard />
            <MetricCard />
            <MetricCard />
          </div>
          <LineChartCard />
        </div>
      </main>
    </>
  )
}
