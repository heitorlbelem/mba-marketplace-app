import { UsersIcon } from 'lucide-react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts'

const chartData = [
  { date: '01', amount: 1942 },
  { date: '02', amount: 2240 },
  { date: '03', amount: 2371 },
  { date: '04', amount: 2371 },
  { date: '05', amount: 1234 },
  { date: '06', amount: 1077 },
  { date: '07', amount: 1144 },
  { date: '08', amount: 2440 },
  { date: '09', amount: 1685 },
  { date: '10', amount: 1899 },
  { date: '11', amount: 2397 },
  { date: '12', amount: 2232 },
  { date: '13', amount: 1556 },
  { date: '14', amount: 1358 },
  { date: '15', amount: 1347 },
  { date: '16', amount: 1575 },
  { date: '17', amount: 1479 },
  { date: '18', amount: 1562 },
  { date: '19', amount: 1939 },
  { date: '20', amount: 1199 },
  { date: '21', amount: 1500 },
  { date: '22', amount: 1138 },
  { date: '23', amount: 2485 },
  { date: '24', amount: 1155 },
  { date: '25', amount: 1724 },
  { date: '26', amount: 1110 },
  { date: '27', amount: 1368 },
  { date: '28', amount: 1253 },
  { date: '29', amount: 1289 },
  { date: '30', amount: 1873 },
]

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<string, number>) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col gap-2 rounded-xl bg-white p-3 shadow-lg">
        <p className="font-base text-[10px]">{label}</p>
        <p className="flex items-center gap-2 text-xs text-gray-300">
          <UsersIcon size={16} />
          {payload[0].value} visitantes
        </p>
      </div>
    )
  }

  return null
}

export function LineChartCard() {
  return (
    <div className="flex w-full flex-col gap-7 rounded-[20px] bg-white p-6">
      <header className="flex items-center justify-between">
        <h3 className="font-title text-lg font-bold">Visitantes</h3>
        <p>26 de junho - 25 de julho</p>
      </header>
      <ResponsiveContainer width="100%" height={266}>
        <LineChart data={chartData} style={{ fontSize: 12 }}>
          <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
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
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dot={false}
            strokeWidth={3}
            dataKey="amount"
            stroke="#5EC5FD"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
