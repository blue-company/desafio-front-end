import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    "Ultimo mês": 320,
    "Este mês": 250,
  },
  {
    month: "Fev",
    "Ultimo mês": 300,
    "Este mês": 220,
  },
  {
    month: "Mar",
    "Ultimo mês": 260,
    "Este mês": 180,
  },
  {
    month: "Abr",
    "Ultimo mês": 200,
    "Este mês": 130,
  },
  {
    month: "Mai",
    "Ultimo mês": 190,
    "Este mês": 180,
  },
  {
    month: "Jun",
    "Ultimo mês": 220,
    "Este mês": 280,
  },
  {
    month: "Jul",
    "Ultimo mês": 280,
    "Este mês": 350,
  },
  {
    month: "Ago",
    "Ultimo mês": 310,
    "Este mês": 340,
  },
  {
    month: "Set",
    "Ultimo mês": 300,
    "Este mês": 320,
  },
  {
    month: "Out",
    "Ultimo mês": 280,
    "Este mês": 280,
  },
  {
    month: "Nov",
    "Ultimo mês": 180,
    "Este mês": 200,
  },
  {
    month: "Dez",
    "Ultimo mês": 140,
    "Este mês": 140,
  },
];

export default function LifesChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid horizontal={true} vertical={false} />
        <XAxis dataKey="month" axisLine={{ strokeWidth: 0 }} tickLine={false} />
        <YAxis
          axisLine={false}
          ticks={[0, 100, 200, 300, 400]}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Legend iconType="square" iconSize={10} />
        <Line
          type="monotone"
          dataKey="Ultimo mês"
          stroke="#9C27B0"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Este mês"
          stroke="#F44336"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
