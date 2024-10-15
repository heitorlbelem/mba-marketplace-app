import { SearchIcon, TicketPercent } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { InputContainer } from '../../../components/InputContainer'
import { Product } from './Product'

export function Products() {
  return (
    <>
      <Helmet title="Produtos" />
      <main className="mx-auto max-w-screen-lg py-16">
        <header className="mb-10 flex flex-col gap-2">
          <h1 className="font-title text-2xl font-bold text-gray-500">
            Seus produtos
          </h1>
          <p className="font-base text-sm text-gray-300">
            Acesse e gerencie a sua lista de produtos à venda
          </p>
        </header>
        <div className="flex items-start gap-6">
          <form className="flex w-[321px] flex-col gap-6 rounded-xl bg-white p-6">
            <h3 className="font-title text-lg font-bold text-gray-300">
              Filtrar
            </h3>
            <div className="mb-7 flex flex-col gap-5">
              <InputContainer.Root>
                <InputContainer.Icon icon={SearchIcon} />
                <InputContainer.TextField placeholder="Pesquisar" />
              </InputContainer.Root>
              <InputContainer.Root>
                <InputContainer.Icon icon={TicketPercent} />
                <InputContainer.TextField placeholder="Status" />
              </InputContainer.Root>
            </div>
            <button className="flex items-center justify-center rounded-xl bg-orange-base p-5 text-white">
              Aplicar filtro
            </button>
          </form>
          <div className="grid flex-1 grid-cols-2 gap-6">
            {Array.from({ length: 5 }).map((_, id) => (
              <Product
                key={id}
                name="Sofá"
                description="Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em..."
                price={Math.random() * 1000}
                imageUrl="https://picsum.photos/200/300"
              />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
