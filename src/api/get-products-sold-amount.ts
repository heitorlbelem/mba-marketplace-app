import { api } from '../lib/axios'

interface GetProductsSoldAmountResponse {
  amount: number
}

export async function getProductsSoldAmount() {
  const response = await api.get<GetProductsSoldAmountResponse>(
    '/sellers/metrics/products/sold',
  )
  return response.data
}
