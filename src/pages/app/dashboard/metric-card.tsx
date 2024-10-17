import { ElementType } from 'react'

type MetricCardProps = {
  value: number
  description: string
  icon: ElementType
  variant?: 'ghost' | 'default'
}

export function MetricCard({
  value,
  description,
  icon: Icon,
  variant = 'default',
}: MetricCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-[20px] bg-white py-3 pl-3 pr-7">
      <div
        className="rounded-xl bg-blue-100 p-6 text-center text-blue-dark data-[ghost=true]:text-gray-300"
        data-ghost={variant === 'ghost'}
      >
        <Icon size={40} />
      </div>
      <div className="flex w-24 flex-col gap-2">
        <h2 className="font-title text-[28px] font-bold text-gray-400">
          {value.toLocaleString('pt-BR')}
        </h2>
        <p className="font-base text-xs text-gray-300">{description}</p>
      </div>
    </div>
  )
}
