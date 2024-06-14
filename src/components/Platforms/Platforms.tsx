"use client";

import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface PlataformsProps {
  tdConsultoria: number;
  rikoPlataforma: number;
  blueServicos: number;
  month: string;
}
const data: PlataformsProps[] = [
    {
        tdConsultoria: 400,
        rikoPlataforma: 240,
        blueServicos: 240,
        month: "Jan",
    },
    {
        tdConsultoria: 300,
        rikoPlataforma: 139,
        blueServicos: 221,
        month: "Fev",
    },
    {
        tdConsultoria: 200,
        rikoPlataforma: 380,
        blueServicos: 229,
        month: "Mar",
    },
    {
        tdConsultoria: 278,
        rikoPlataforma: 390,
        blueServicos: 200,
        month: "Abr",
    },
    {
        tdConsultoria: 189,
        rikoPlataforma: 480,
        blueServicos: 218,
        month: "Mai",
    },
    {
        tdConsultoria: 239,
        rikoPlataforma: 380,
        blueServicos: 250,
        month: "Jun",
    },
    {
        tdConsultoria: 349,
        rikoPlataforma: 430,
        blueServicos: 210,
        month: "Jul",
    },
    {
        tdConsultoria: 400,
        rikoPlataforma: 240,
        blueServicos: 240,
        month: "Ago",
    },
    {
        tdConsultoria: 300,
        rikoPlataforma: 139,
        blueServicos: 221,
        month: "Set",
    },
    {
        tdConsultoria: 200,
        rikoPlataforma: 280,
        blueServicos: 229,
        month: "Out",
    },
    {
        tdConsultoria: 278,
        rikoPlataforma: 390,
        blueServicos: 200,
        month: "Nov",
    },
    {
        tdConsultoria: 189,
        rikoPlataforma: 480,
        blueServicos: 218,
        month: "Dez",
    },
];

export function Plataforms() {
  return (
    <Card className ="bg-white mt-10 max-w-xl w-full">
            <CardHeader className="flex flex-row justify-between">
          <CardTitle className="flex flex-col gap-3">
            Plataformas
          </CardTitle>
        </CardHeader>
    
      <ResponsiveContainer width="100%" height={350}>
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

    </Card>

    
  );
}
