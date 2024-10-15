import { ImageUpIcon } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { InputContainer } from '../../../components/InputContainer'
import { InputWrapper } from '../../../components/InputWrapper'

export function NewProduct() {
  return (
    <>
      <Helmet title="Novo produto" />
      <main className="mx-auto max-w-[1030px] py-16">
        <header className="flex flex-col gap-2">
          <h1 className="font-title text-2xl font-bold text-gray-500">
            Novo Produto
          </h1>
          <p className="font-base text-sm text-gray-300">
            Cadastre um produto para venda no marketplace
          </p>
        </header>
        <form action="" className="mt-10 flex items-start gap-6">
          <div className="relative flex h-96 w-96 flex-col items-center justify-center gap-4 rounded-xl bg-orange-base/10 focus-within:border-2 focus-within:border-orange-base">
            <label htmlFor="product" className="sr-only">
              Selecione a imagem do produto
            </label>
            <input
              type="file"
              name="product"
              id="product"
              className="absolute h-full w-full opacity-0 hover:cursor-pointer"
              accept=".png, .jpeg, .jpg"
            />
            <ImageUpIcon className="align-center h-12 w-12 text-orange-base" />
            <p className="max-w-40 text-center font-base text-sm text-gray-300">
              Selecione a imagem do produto
            </p>
          </div>
          <fieldset className="flex-1 rounded-xl bg-white p-8">
            <h3 className="mb-8 font-title text-lg font-bold text-gray-300">
              Dados do produto
            </h3>
            <div className="grid grid-cols-[307px_1fr] gap-5">
              <InputWrapper.Root>
                <InputWrapper.Label htmlFor="title">Título</InputWrapper.Label>
                <InputContainer.Root>
                  <InputContainer.TextField
                    placeholder="Nome do produto"
                    id="title"
                  />
                </InputContainer.Root>
              </InputWrapper.Root>
              <InputWrapper.Root>
                <InputWrapper.Label htmlFor="price">Valor</InputWrapper.Label>
                <InputContainer.Root>
                  <InputContainer.Prefix prefix="R$" />
                  <InputContainer.TextField placeholder="0,00" id="price" />
                </InputContainer.Root>
              </InputWrapper.Root>
              <div className="col-span-2">
                <InputWrapper.Root>
                  <InputWrapper.Label htmlFor="description">
                    descrição
                  </InputWrapper.Label>
                  <InputContainer.Root>
                    <InputContainer.TextAreaField
                      id="description"
                      placeholder="Escreva detalhes sobre o produto, tamanho, características"
                    />
                  </InputContainer.Root>
                </InputWrapper.Root>
              </div>
              <div className="col-span-2">
                <InputWrapper.Root>
                  <InputWrapper.Label htmlFor="category">
                    categoria
                  </InputWrapper.Label>
                  <InputContainer.Root>
                    <InputContainer.TextField
                      placeholder="Selecione"
                      id="category"
                    />
                  </InputContainer.Root>
                </InputWrapper.Root>
              </div>
            </div>
            <div className="col-span-2 mt-10 flex items-center gap-4">
              <button className="mt-4 flex flex-1 items-center justify-center rounded-xl border-2 border-orange-base bg-white p-5 text-orange-base">
                Cancelar
              </button>
              <button className="mt-4 flex flex-1 items-center justify-center rounded-xl bg-orange-base p-5 text-white hover:bg-orange-base/95">
                Salvar e publicar
              </button>
            </div>
          </fieldset>
        </form>
      </main>
    </>
  )
}
