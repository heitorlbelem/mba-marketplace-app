import { useQuery } from '@tanstack/react-query'
import { StoreIcon, TicketPercentIcon, UsersIcon } from 'lucide-react'

import { getProductsAvailableAmount } from '../../../api/get-products-available-amount'
import { getProductsSoldAmount } from '../../../api/get-products-sold-amount'
import { getReceivedViewsAmount } from '../../../api/get-received-views-amount'
import { MetricCard } from './metric-card'

export function Metrics() {
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
  )
}
