import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { createProduct } from '../../api/create-product'
import { getCategories } from '../../api/get-categories'
import { uploadAttachment } from '../../api/upload-attachment'
import { AppHeader } from '../../components/app-header'
import { FileInput } from '../../components/file-input'
import { InputContainer } from '../../components/input-container'
import { InputWrapper } from '../../components/input-wrapper'

const newProductFormSchema = z.object({
  title: z.string(),
  description: z.string(),
  categoryId: z.string().uuid(),
  priceInCents: z.number(),
})

type NewProductFormType = z.infer<typeof newProductFormSchema>

export function NewProduct() {
  const [productImage, setProductImage] = useState<File | null>(null)
  const { register, handleSubmit, reset } = useForm<NewProductFormType>({
    resolver: zodResolver(newProductFormSchema),
  })

  const { data: getCategoriesResponse } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })
  const categories = getCategoriesResponse?.categories || null

  const { mutateAsync: createProductFn } = useMutation({
    mutationFn: createProduct,
  })

  const { mutateAsync: uploadAttachmentFn } = useMutation({
    mutationFn: uploadAttachment,
  })

  async function handleCreateProduct({
    title,
    description,
    priceInCents,
    categoryId,
  }: NewProductFormType) {
    let imageId = null
    if (productImage) {
      const uploadedImage = (await uploadAttachmentFn(productImage)).data
      imageId = uploadedImage.attachments[0].id
    }

    await createProductFn({
      title,
      description,
      priceInCents,
      categoryId,
      attachmentsIds: [imageId],
    })
  }

  async function handleCancelSubmit() {
    setProductImage(null)
    reset()
  }

  return (
    <>
      <Helmet title="Novo produto" />
      <AppHeader.Root>
        <AppHeader.Info
          title="Novo produto"
          description="Cadastre um produto para venda no marketplace"
        />
      </AppHeader.Root>

      <form
        onSubmit={handleSubmit(handleCreateProduct)}
        className="flex items-start gap-6"
      >
        <FileInput
          onFileChange={(file) => setProductImage(file)}
          id="product"
          label="Selecione a imagem do produto"
        />

        <fieldset className="flex-1 rounded-xl bg-white p-8">
          <h3 className="mb-8 font-title text-lg font-bold text-gray-300">
            Dados do produto
          </h3>

          <div className="grid grid-cols-[307px_1fr] gap-5">
            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="title">Título</InputWrapper.Label>
              <InputContainer.Root>
                <InputContainer.TextField
                  id="title"
                  placeholder="Nome do produto"
                  {...register('title')}
                />
              </InputContainer.Root>
            </InputWrapper.Root>
            <InputWrapper.Root>
              <InputWrapper.Label htmlFor="price">Valor</InputWrapper.Label>
              <InputContainer.Root>
                <InputContainer.Prefix prefix="R$" />
                <InputContainer.TextField
                  id="price"
                  placeholder="0,00"
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
                    placeholder="Escreva detalhes sobre o produto, tamanho, características"
                    {...register('description')}
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
                  <InputContainer.SelectField
                    id="category"
                    {...register('categoryId')}
                  >
                    <option value="">Selecione</option>
                    {categories &&
                      categories.map((category) => {
                        return (
                          <option value={category.id} key={category.id}>
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
            <button
              onClick={handleCancelSubmit}
              className="mt-4 flex flex-1 items-center justify-center rounded-xl border-2 border-orange-base bg-white p-5 text-orange-base"
            >
              Cancelar
            </button>
            <button className="mt-4 flex flex-1 items-center justify-center rounded-xl bg-orange-base p-5 text-white hover:bg-orange-base/95">
              Salvar e publicar
            </button>
          </div>
        </fieldset>
      </form>
    </>
  )
}
