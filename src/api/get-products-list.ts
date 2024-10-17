import { api } from '../lib/axios'

interface Attachment {
  id: string
  url: string
}

interface Category {
  id: string
  title: string
  slug: string
}

interface Product {
  id: string
  title: string
  description: string
  priceInCents: number
  status: string
  attachments: Attachment[]
  category: Category
}

interface ProductsListResponse {
  products: Product[]
}

interface GetProductsListParams {
  search?: string | null
  status?: string | null
}

export async function getProductsList({
  search,
  status,
}: GetProductsListParams) {
  const response = await api.get<ProductsListResponse>('/products/me', {
    params: { search, status },
  })
  return response.data
}
