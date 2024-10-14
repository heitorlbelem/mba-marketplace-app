import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'

const chartData = [
  { date: '01', receipt: 1942 },
  { date: '02', receipt: 2240 },
  { date: '03', receipt: 2371 },
  { date: '04', receipt: 2371 },
  { date: '05', receipt: 1234 },
  { date: '06', receipt: 1077 },
  { date: '07', receipt: 1144 },
  { date: '08', receipt: 2440 },
  { date: '09', receipt: 1685 },
  { date: '10', receipt: 1899 },
  { date: '11', receipt: 2397 },
  { date: '12', receipt: 2232 },
  { date: '13', receipt: 1556 },
  { date: '14', receipt: 1358 },
  { date: '15', receipt: 1347 },
  { date: '16', receipt: 1575 },
  { date: '17', receipt: 1479 },
  { date: '18', receipt: 1562 },
  { date: '19', receipt: 1939 },
  { date: '20', receipt: 1199 },
  { date: '21', receipt: 1500 },
  { date: '22', receipt: 1138 },
  { date: '23', receipt: 2485 },
  { date: '24', receipt: 1155 },
  { date: '25', receipt: 1724 },
  { date: '26', receipt: 1110 },
  { date: '27', receipt: 1368 },
  { date: '28', receipt: 1253 },
  { date: '29', receipt: 1289 },
  { date: '30', receipt: 1873 },
]

export function LineChartCard() {
  return (
    <div className="flex w-full flex-col gap-7 rounded-[20px] bg-white p-6">
      <header className="flex items-center justify-between">
        <h3 className="font-title text-lg font-bold">Visitantes</h3>
        <p>26 de junho - 25 de julho</p>
      </header>
      <ResponsiveContainer width={800} height={266}>
        <LineChart data={chartData} style={{ fontSize: 12 }}>
          <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
          <YAxis
            stroke="#888"
            axisLine={false}
            tickLine={false}
            width={80}
            tickFormatter={(value: number) => {
              return value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })
            }}
          />
          <CartesianGrid vertical={false} className="stroke-muted" />

          <Line
            dot={false}
            type="monotone"
            strokeWidth={2}
            dataKey="receipt"
            stroke="#5EC5FD"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
