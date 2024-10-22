import { api } from '../lib/axios'

interface GetProductParams {
  id: string
}

interface Attachment {
  id: string
  url: string
}

interface Category {
  id: string
  title: string
  slug: string
}

export interface Product {
  id: string
  title: string
  description: string
  priceInCents: number
  status: string
  attachments: Attachment[]
  category: Category
}

interface GetProductResponse {
  product: Product
}

export async function getProduct({ id }: GetProductParams) {
  const response = await api.get<GetProductResponse>(`/products/${id}`)
  return response.data
}
