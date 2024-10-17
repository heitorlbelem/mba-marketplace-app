import { api } from '../lib/axios'

interface GetReceivedViewsAmountResponse {
  amount: number
}

export async function getReceivedViewsAmount() {
  const response = await api.get<GetReceivedViewsAmountResponse>(
    '/sellers/metrics/views',
  )
  return response.data
}
