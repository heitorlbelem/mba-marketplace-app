import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { UsersIcon } from 'lucide-react'
import { TooltipProps } from 'recharts'

export const VisitsPerDayChartTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<string, number>) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col gap-2 rounded-xl bg-white p-3 shadow-lg">
        <p className="font-base text-[10px] uppercase">
          {format(new Date(label), "dd 'de' MMMM", { locale: ptBR })}
        </p>
        <p className="flex items-center gap-2 text-xs text-gray-300">
          <UsersIcon size={16} />
          {payload[0].value} visitantes
        </p>
      </div>
    )
  }
  return null
}
