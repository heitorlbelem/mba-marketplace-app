import { SearchIcon, TicketPercent } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { InputContainer } from '../../../components/input-container'

const filtersFormSchema = z.object({
  search: z.string().nullable(),
  status: z.enum(['available', 'sold', 'canceled', '']).nullable(),
})

type FilterFormType = z.infer<typeof filtersFormSchema>

export function ProductsFilter() {
  const { handleSubmit, register } = useForm<FilterFormType>()

  const [, setSearchParams] = useSearchParams()

  async function handleFilter({ search, status }: FilterFormType) {
    setSearchParams((state) => {
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
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="flex w-[320px] flex-col gap-6 rounded-xl bg-white p-6"
    >
      <h3 className="font-title text-lg font-bold text-gray-300">Filtrar</h3>
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
            <option value="cancelled">Cancelado</option>
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
  )
}
