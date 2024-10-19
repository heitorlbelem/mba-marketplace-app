import { api } from '../lib/axios'

interface CreateProductParams {
  title: string
  description: string
  categoryId: string
  priceInCents: number
  attachmentsIds: string[]
}

export async function createProduct({
  title,
  description,
  categoryId,
  priceInCents,
  attachmentsIds,
}: CreateProductParams) {
  await api.post('/products', {
    title,
    description,
    categoryId,
    priceInCents,
    attachmentsIds,
  })
}
