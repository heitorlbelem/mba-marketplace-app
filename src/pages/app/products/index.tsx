import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { SearchIcon, TicketPercent } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getProductsList } from '../../../api/get-products-list'
import { AppHeader } from '../../../components/app-header'
import { InputContainer } from '../../../components/input-container'
import { Product } from './product'

const filtersFormSchema = z.object({
  search: z.string().nullable(),
  status: z.enum(['available', 'sold', 'canceled', '']).nullable(),
})

type FilterFormType = z.infer<typeof filtersFormSchema>

export function Products() {
  const { register, handleSubmit } = useForm<FilterFormType>({
    resolver: zodResolver(filtersFormSchema),
  })

  const [searchParams, setSearchParams] = useSearchParams()

  const search = searchParams.get('search')
  const status = searchParams.get('status')

  const { data: productsListResponse } = useQuery({
    queryKey: ['products', search, status],
    queryFn: () => getProductsList({ search, status }),
  })

  async function handleFilter({ search, status }: FilterFormType) {
    setSearchParams((state) => {
      console.log('oi')

      if (search) {
        state.set('search', search)
      } else {
        state.delete('search')
      }
      if (status) {
        state.set('status', status)
      } else {
        state.delete('status')
      }

      return state
    })
  }

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
        <form
          onSubmit={handleSubmit(handleFilter)}
          className="flex w-[320px] flex-col gap-6 rounded-xl bg-white p-6"
        >
          <h3 className="font-title text-lg font-bold text-gray-300">
            Filtrar
          </h3>
          <div className="mb-7 flex flex-col gap-5">
            <InputContainer.Root>
              <InputContainer.Icon icon={SearchIcon} />
              <InputContainer.TextField
                placeholder="Pesquisar"
                id="search"
                {...register('search')}
              />
            </InputContainer.Root>
            <InputContainer.Root>
              <InputContainer.Icon icon={TicketPercent} />
              <InputContainer.SelectField id="status" {...register('status')}>
                <option value="">Status</option>
                <option value="available">Anunciado</option>
                <option value="sold">Vendido</option>
                <option value="canceled">Cancelado</option>
              </InputContainer.SelectField>
            </InputContainer.Root>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center rounded-xl bg-orange-base p-5 text-white"
          >
            Aplicar filtro
          </button>
        </form>
        <div className="grid flex-1 grid-cols-2 gap-4">
          {productsListResponse?.products.map((product) => {
            return (
              <Product
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
