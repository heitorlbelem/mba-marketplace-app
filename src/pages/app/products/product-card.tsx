type ProductProps = {
  imageUrl?: string
  name: string
  description: string
  price: number
}

export function ProductCard({
  name,
  price,
  description,
  imageUrl,
}: ProductProps) {
  return (
    <div className="flex flex-col rounded-lg bg-white p-1">
      <div className="relative">
        <img src={imageUrl} alt="" className="h-36 w-full rounded-lg" />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="flex items-center justify-between">
          <h4 className="font-base text-base font-semibold text-gray-400">
            {name}
          </h4>
          <p className="font-title text-lg font-bold text-gray-500">
            <small className="font-base text-xs font-medium uppercase">
              R$
            </small>{' '}
            {price.toLocaleString('pt-BR')}
          </p>
        </div>
        <p className="font-base text-sm text-gray-300">{description}</p>
      </div>
    </div>
  )
}
