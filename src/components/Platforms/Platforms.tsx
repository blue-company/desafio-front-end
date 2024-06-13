"use client";

import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

interface PlataformsProps {
  tdConsultoria: number;
  rikoPlataforma: number;
  blueServicos: number;
  month: string;
}
const data: PlataformsProps[] = [
  {
    tdConsultoria: 4000,
    rikoPlataforma: 2400,
    blueServicos: 2400,
    month: "Jan",
  },
  {
    tdConsultoria: 3000,
    rikoPlataforma: 1398,
    blueServicos: 2210,
    month: "Fev",
  },
  {
    tdConsultoria: 2000,
    rikoPlataforma: 9800,
    blueServicos: 2290,
    month: "Mar",
  },
  {
    tdConsultoria: 2780,
    rikoPlataforma: 3908,
    blueServicos: 2000,
    month: "Abr",
  },
  {
    tdConsultoria: 1890,
    rikoPlataforma: 4800,
    blueServicos: 2181,
    month: "Mai",
  },
  {
    tdConsultoria: 2390,
    rikoPlataforma: 3800,
    blueServicos: 2500,
    month: "Jun",
  },
  {
    tdConsultoria: 3490,
    rikoPlataforma: 4300,
    blueServicos: 2100,
    month: "Jul",
  },
  {
    tdConsultoria: 4000,
    rikoPlataforma: 2400,
    blueServicos: 2400,
    month: "Ago",
  },
  {
    tdConsultoria: 3000,
    rikoPlataforma: 1398,
    blueServicos: 2210,
    month: "Set",
  },
  {
    tdConsultoria: 2000,
    rikoPlataforma: 9800,
    blueServicos: 2290,
    month: "Out",
  },
  {
    tdConsultoria: 2780,
    rikoPlataforma: 3908,
    blueServicos: 2000,
    month: "Nov",
  },
  {
    tdConsultoria: 1890,
    rikoPlataforma: 4800,
    blueServicos: 2181,
    month: "Dez",
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350} className="bg-white rounded-md border">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <CartesianGrid vertical={false} />
        <Tooltip />
        <Line strokeWidth={3} dataKey="tdConsultoria" stroke="#a700ff" type="monotone" dot={false}/>
        <Line strokeWidth={3} dataKey="rikoPlataforma" stroke="#ef4444" type="monotone" dot={false}/>
        <Line strokeWidth={3} dataKey="blueServicos" stroke="#3cd856" type="monotone" dot={false}/>
        <Legend iconType="square"  />
      </LineChart>
    </ResponsiveContainer>
  );
}
