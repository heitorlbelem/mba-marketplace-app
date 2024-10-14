import { PercentCircleIcon } from 'lucide-react'

export function MetricCard() {
  return (
    <div className="flex items-start gap-4 rounded-[20px] bg-white py-3 pl-3 pr-7">
      <div className="rounded-xl bg-blue-100 p-6 text-center text-blue-dark">
        <PercentCircleIcon size={40} />
      </div>
      <div className="flex w-24 flex-col gap-2">
        <h2 className="font-title text-[28px] font-bold text-gray-400">24</h2>
        <p className="font-base text-xs text-gray-300">Produtos vendidos</p>
      </div>
    </div>
  )
}
