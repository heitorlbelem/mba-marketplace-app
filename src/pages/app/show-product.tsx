import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { BanIcon, CheckIcon } from 'lucide-react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { z } from 'zod'

import { getCategories } from '../../api/get-categories'
import { getProduct } from '../../api/get-product'
import { updateProduct } from '../../api/update-product'
import { AppHeader } from '../../components/app-header'
import { FileInput } from '../../components/file-input'
import { InputContainer } from '../../components/input-container'
import { InputWrapper } from '../../components/input-wrapper'

const updateProductFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  categoryId: z.string().uuid(),
  priceInCents: z.number(),
})

type UpdateProductFormType = z.infer<typeof updateProductFormSchema>

export function ShowProduct() {
  const { id } = useParams()

  const { data: getProductResponse } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct({ id: id || '' }),
  })
  const product = getProductResponse?.product

  const { data: categoriesResponse } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })
  const categories = categoriesResponse?.categories

  const { mutateAsync: updateProductFn } = useMutation({
    mutationFn: updateProduct,
  })

  const { register, handleSubmit, reset } = useForm<UpdateProductFormType>({
    resolver: zodResolver(updateProductFormSchema),
    defaultValues: {
      title: product?.title ?? '',
      description: product?.description ?? '',
      categoryId: product?.category.id ?? '',
      priceInCents: product?.priceInCents ?? 1,
    },
  })

  async function handleUpdate(data: UpdateProductFormType) {
    if (!product) return

    await updateProductFn({
      id: product.id,
      description: data.description,
      title: data.title,
      priceInCents: data.priceInCents,
      categoryId: data.categoryId,
      attachmentsIds: [],
    })
  }

  useEffect(() => {
    if (product) {
      reset({
        title: product.title,
        description: product.description,
        categoryId: product.category.id,
        priceInCents: product.priceInCents,
      })
    }
  }, [product, reset])

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

      <form
        className="flex items-start gap-6"
        onSubmit={handleSubmit(handleUpdate)}
      >
        <FileInput
          onFileChange={(file) => {
            console.log(file)
          }}
          id="product"
          label="Selecione a imagem do produto"
        />

        <fieldset className="flex-1 rounded-xl bg-white p-8">
          <h3 className="mb-8 font-title text-lg font-bold text-gray-300">
            Dados do produto
          </h3>
          <div className="grid grid-cols-[307px_1fr] gap-5">
            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="title">Nome</InputWrapper.Label>
              <InputContainer.Root>
                <InputContainer.TextField
                  {...register('title')}
                  placeholder="Nome do produto"
                  id="title"
                />
              </InputContainer.Root>
            </InputWrapper.Root>
            <InputWrapper.Root>
              {getProductResponse && (
                <InputWrapper.Label htmlFor="price">valor</InputWrapper.Label>
              )}
              <InputContainer.Root>
                <InputContainer.Prefix prefix="R$" />
                <InputContainer.TextField
                  placeholder="0,00"
                  id="price"
                  {...register('priceInCents', { valueAsNumber: true })}
                />
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
                    {...register('description')}
                    placeholder="Escreva detalhes sobre o produto, tamanho, características"
                  />
                </InputContainer.Root>
              </InputWrapper.Root>
            </div>
            <div className="col-span-2">
              <InputWrapper.Root>
                <InputWrapper.Label htmlFor="category">
                  Categoria
                </InputWrapper.Label>
                <InputContainer.Root>
                  <InputContainer.SelectField
                    id="category"
                    {...register('categoryId')}
                  >
                    <option value="">Selecione</option>
                    {categories &&
                      categories.map((category) => {
                        return (
                          <option key={category.id} value={category.id}>
                            {category.title}
                          </option>
                        )
                      })}
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
