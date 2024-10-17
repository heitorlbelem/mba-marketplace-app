import { api } from '../lib/axios'

interface ViewsPerDay {
  date: string
  amount: number
}

interface GetReceivedViewsAmountResponse {
  viewsPerDay: ViewsPerDay[]
}

export async function getReceivedViewsAmountPerDay() {
  const response = await api.get<GetReceivedViewsAmountResponse>(
    '/sellers/metrics/views/days',
  )
  return response.data
}
