import { api } from '../lib/axios'

interface UpdateProductParams {
  id: string
  title: string
  description: string
  categoryId: string
  priceInCents: number
  attachmentsIds: string[]
}

export async function updateProduct({
  id,
  title,
  description,
  categoryId,
  priceInCents,
  attachmentsIds,
}: UpdateProductParams) {
  await api.put(`/products/${id}`, {
    title,
    description,
    categoryId,
    priceInCents,
    attachmentsIds,
  })
}
