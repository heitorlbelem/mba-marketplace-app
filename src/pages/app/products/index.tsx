import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'

import { getProductsList } from '../../../api/get-products-list'
import { AppHeader } from '../../../components/app-header'
import { ProductCard } from './product-card'
import { ProductsFilter } from './products-filter'

export function Products() {
  const [searchParams] = useSearchParams()

  const search = searchParams.get('search') || null
  const status = searchParams.get('status') || null

  const { data: productsListResponse } = useQuery({
    queryKey: ['products', search, status],
    queryFn: () => getProductsList({ search, status }),
  })

  return (
    <>
      <Helmet title="Produtos" />
      <AppHeader.Root>
        <AppHeader.Info
          title="Seus produtos"
          description="Acesse gerencie a sua lista de produtos à venda"
        />
      </AppHeader.Root>
      <div className="flex items-start gap-4">
        <ProductsFilter />
        <div className="grid flex-1 grid-cols-2 gap-4">
          {productsListResponse?.products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                name={product.title}
                description={product.description}
                price={product.priceInCents / 100}
                imageUrl={product.attachments[0].url}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
