import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  {
    uv: 2000,
    pv: 4300,
    amt: 2400,
  },
  {
    uv: 2800,
    pv: 3800,
    amt: 2210,
  },
  {
    uv: 1500,
    pv: 4000,
    amt: 2210,
  },
  {
    uv: 1600,
    pv: 3000,
    amt: 2210,
  },
  {
    uv: 1900,
    pv: 4000,
    amt: 2210,
  },
  {
    uv: 1800,
    pv: 2700,
    amt: 2210,
  },
  {
    uv: 3000,
    pv: 5000,
    amt: 2210,
  },
];

export default function LifesChart() {
  return (
    <ResponsiveContainer width="108%" height={200}>
      <AreaChart
        width={830}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6698de" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FFFF" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#66de90" stopOpacity={0.8} />
            <stop offset="200%" stopColor="#FFFF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis hide dataKey="name" />
        <Legend />
        <YAxis hide />
        <CartesianGrid horizontal={false} vertical={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          name="Último mês"
          stroke="#1898de"
          fillOpacity={1}
          strokeWidth={3}
          fill="url(#colorUv)"
          dot
        />
        <Area
          type="monotone"
          dataKey="pv"
          name="Este mês"
          stroke="#82ca9d"
          fillOpacity={1}
          strokeWidth={3}
          fill="url(#colorPv)"
          dot
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
