import { api } from '../lib/axios'

interface GetProductsAvailableAmountResponse {
  amount: number
}

export async function getProductsAvailableAmount() {
  const response = await api.get<GetProductsAvailableAmountResponse>(
    '/sellers/metrics/products/available',
  )
  return response.data
}
