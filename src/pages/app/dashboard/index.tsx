import { useQuery } from '@tanstack/react-query'
import { StoreIcon, TicketPercentIcon, UsersIcon } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { getProductsAvailableAmount } from '../../../api/get-products-available-amount'
import { getProductsSoldAmount } from '../../../api/get-products-sold-amount'
import { getReceivedViewsAmount } from '../../../api/get-received-views-amount'
import { AppHeader } from '../../../components/app-header'
import { LineChartCard } from './line-chart-card'
import { MetricCard } from './metric-card'

export function Dashboard() {
  const { data: productsSoldAmount } = useQuery({
    queryKey: ['metrics', 'products-sold'],
    queryFn: getProductsSoldAmount,
  })
  const { data: productsAvailableAmount } = useQuery({
    queryKey: ['metrics', 'products-available'],
    queryFn: getProductsAvailableAmount,
  })
  const { data: receivedViewsAmount } = useQuery({
    queryKey: ['metrics', 'received-views'],
    queryFn: getReceivedViewsAmount,
  })

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
            value={productsSoldAmount?.amount || 0}
            description="Produtos vendidos"
            icon={TicketPercentIcon}
          />
          <MetricCard
            value={productsAvailableAmount?.amount || 0}
            description="Produtos anunciados"
            icon={StoreIcon}
          />
          <MetricCard
            value={receivedViewsAmount?.amount || 0}
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
