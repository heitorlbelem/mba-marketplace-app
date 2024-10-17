import { BanIcon, CheckIcon } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { AppHeader } from '../../components/app-header'
import { FileInput } from '../../components/file-input'
import { InputContainer } from '../../components/input-container'
import { InputWrapper } from '../../components/input-wrapper'

export function ShowProduct() {
  return (
    <>
      <Helmet title="Editar produto" />
      <AppHeader.Root>
        <AppHeader.NavigateButton />
        <AppHeader.Info
          title="Editar produto"
          description="Gerencie as informações do produto cadastrado"
        >
          <AppHeader.Actions>
            <AppHeader.ActionButton
              icon={CheckIcon}
              title="Marcar como vendido"
            />
            <AppHeader.ActionButton icon={BanIcon} title="Desativar anúncio" />
          </AppHeader.Actions>
        </AppHeader.Info>
      </AppHeader.Root>

      <form action="" className="flex items-start gap-6">
        <FileInput id="product" label="Selecione a imagem do produto" />

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
                  <InputContainer.SelectField id="category">
                    <option value="">Selecione</option>
                    <option value="mobile">Móvel</option>
                  </InputContainer.SelectField>
                </InputContainer.Root>
              </InputWrapper.Root>
            </div>
          </div>
          <div className="col-span-2 mt-10 flex items-center gap-4">
            <button className="mt-4 flex flex-1 items-center justify-center rounded-xl border-2 border-orange-base bg-white p-5 text-orange-base">
              Cancelar
            </button>
            <button className="mt-4 flex flex-1 items-center justify-center rounded-xl bg-orange-base p-5 text-white hover:bg-orange-base/95">
              Salvar e atualizar
            </button>
          </div>
        </fieldset>
      </form>
    </>
  )
}
