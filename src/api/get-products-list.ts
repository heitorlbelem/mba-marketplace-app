import { api } from '../lib/axios'
import { Product } from './get-product'

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
