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
    "TD Consultoria": 320,
    "RIKO Plataforma": 250,
    "Blue Serviços": 280,
  },
  {
    month: "Fev",
    "TD Consultoria": 300,
    "RIKO Plataforma": 220,
    "Blue Serviços": 360,
  },
  {
    month: "Mar",
    "TD Consultoria": 260,
    "RIKO Plataforma": 180,
    "Blue Serviços": 350,
  },
  {
    month: "Abr",
    "TD Consultoria": 200,
    "RIKO Plataforma": 130,
    "Blue Serviços": 300,
  },
  {
    month: "Mai",
    "TD Consultoria": 190,
    "RIKO Plataforma": 180,
    "Blue Serviços": 210,
  },
  {
    month: "Jun",
    "TD Consultoria": 220,
    "RIKO Plataforma": 280,
    "Blue Serviços": 200,
  },
  {
    month: "Jul",
    "TD Consultoria": 280,
    "RIKO Plataforma": 350,
    "Blue Serviços": 240,
  },
  {
    month: "Ago",
    "TD Consultoria": 310,
    "RIKO Plataforma": 340,
    "Blue Serviços": 290,
  },
  {
    month: "Set",
    "TD Consultoria": 300,
    "RIKO Plataforma": 320,
    "Blue Serviços": 310,
  },
  {
    month: "Out",
    "TD Consultoria": 280,
    "RIKO Plataforma": 280,
    "Blue Serviços": 300,
  },
  {
    month: "Nov",
    "TD Consultoria": 180,
    "RIKO Plataforma": 200,
    "Blue Serviços": 240,
  },
  {
    month: "Dez",
    "TD Consultoria": 140,
    "RIKO Plataforma": 140,
    "Blue Serviços": 200,
  },
];

export default function PlatformsChart() {
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
          dataKey="TD Consultoria"
          stroke="#9C27B0"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="RIKO Plataforma"
          stroke="#F44336"
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Blue Serviços"
          stroke="#4CAF50"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
