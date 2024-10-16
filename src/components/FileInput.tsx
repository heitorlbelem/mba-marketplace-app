import { ImageUpIcon } from 'lucide-react'
import { ComponentProps, useState } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const fileInput = tv({
  base: 'relative flex flex-col items-center justify-center gap-4 rounded-xl bg-orange-base/10 text-orange-base hover:cursor-pointer transition focus-within:ring-2 focus-within:ring-orange-base',
  variants: {
    wrapperSize: {
      default: 'h-96 w-96',
      sm: 'h-32 w-32',
    },
  },
  defaultVariants: {
    wrapperSize: 'default',
  },
})

type FileInputProps = ComponentProps<'input'> &
  VariantProps<typeof fileInput> & {
    label?: string
  }

export function FileInput({
  id,
  wrapperSize,
  label,
  ...props
}: FileInputProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setImagePreview(URL.createObjectURL(file))
    }
  }

  return (
    <div className={fileInput({ wrapperSize })}>
      <label htmlFor={id} className="sr-only">
        Selecione um arquivo para upload
      </label>
      <input
        {...props}
        id={id}
        type="file"
        className="absolute inset-0 h-full w-full opacity-0"
        accept=".png, .jpeg, .jpg"
        onChange={handleFileChange}
      />
      {imagePreview ? (
        <img
          src={imagePreview}
          alt=""
          className="h-full w-full rounded-xl object-cover"
        />
      ) : (
        <>
          <ImageUpIcon className="h-10 w-10 text-orange-base" />
          {label && (
            <p className="max-w-40 text-center text-sm text-gray-300">
              {label}
            </p>
          )}
        </>
      )}
    </div>
  )
}
