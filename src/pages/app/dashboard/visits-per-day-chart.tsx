import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { useMemo } from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { getReceivedViewsAmountPerDay } from '../../../api/get-received-views-amount-per-day'
import { VisitsPerDayChartTooltip } from './visits-per-day-chart-tooltip'

export function VisitsPerDayChart() {
  const { data: chartData } = useQuery({
    queryKey: ['metrics', 'views-per-day'],
    queryFn: getReceivedViewsAmountPerDay,
  })

  const showedDateRange = useMemo(() => {
    if (!chartData) return null
    const lastChartDataIndex = chartData.viewsPerDay.length - 1
    const startDate = chartData.viewsPerDay[0].date
    const endDate = chartData.viewsPerDay[lastChartDataIndex].date
    const formattedStartDate = format(startDate, "dd 'de' MMMM", {
      locale: ptBR,
    })
    const formattedEndDate = format(endDate, "dd 'de' MMMM", { locale: ptBR })
    return `${formattedStartDate} - ${formattedEndDate}`
  }, [chartData])

  return (
    <div className="flex w-full flex-col gap-7 rounded-[20px] bg-white p-6">
      <header className="flex items-center justify-between">
        <h3 className="font-title text-lg font-bold">Visitantes</h3>
        {showedDateRange && (
          <p className="flex items-center gap-2 font-base text-[10px] font-medium uppercase text-gray-300">
            <CalendarIcon size={16} className="text-blue-dark" />
            {showedDateRange}
          </p>
        )}
      </header>
      {chartData && (
        <ResponsiveContainer width="100%" height={266}>
          <LineChart data={chartData.viewsPerDay} style={{ fontSize: 12 }}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickFormatter={(label: string) => {
                return format(label, 'dd')
              }}
              axisLine={false}
              dy={16}
            />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) => {
                return value.toLocaleString('pt-BR')
              }}
            />
            <CartesianGrid
              stroke="#ccc"
              strokeDasharray="15 15"
              vertical={false}
            />
            <Tooltip content={<VisitsPerDayChartTooltip />} />
            <Line
              type="monotone"
              dot={false}
              strokeWidth={3}
              dataKey="amount"
              stroke="#5EC5FD"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
