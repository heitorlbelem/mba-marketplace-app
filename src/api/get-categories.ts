import { api } from '../lib/axios'

interface Category {
  id: string
  title: string
  slug: string
}

interface GetCategoriesResponse {
  categories: Category[]
}

export async function getCategories() {
  const response = await api.get<GetCategoriesResponse>('/categories')
  return response.data
}
