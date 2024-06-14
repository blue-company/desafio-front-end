"use client";

import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { Card, CardHeader, CardTitle } from "../ui/card";

interface ServiceLevelProps {
    esteMes: number;
    ultimoMes: number;
}

const data: ServiceLevelProps[] = [
    { ultimoMes: 80, esteMes: 75 },
    { ultimoMes: 90, esteMes: 85 },
    { ultimoMes: 70, esteMes: 65 },
    { ultimoMes: 85, esteMes: 80 },
    { ultimoMes: 75, esteMes: 70 },
    { ultimoMes: 95, esteMes: 90 },
];

export function Lifes() {
  return (
      <Card className ="bg-white mt-10">
            <CardHeader className="flex flex-row justify-between">
          <CardTitle className="flex flex-col gap-3">
            Vidas
          </CardTitle>
        </CardHeader>
        <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <defs>
            <linearGradient id="esteMesColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c9f9e9" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#d9f9ef" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="ultimoMesColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#b3e4fa" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#cae8f5" stopOpacity={0}/>
            </linearGradient>
        </defs>
        <Tooltip />
        <Legend payload={[{value: "Este mês", id: "esteMes"}, {value: "Último mês", id: "ultimoMes"}]}/>
        <Area dot={true} type="monotone" strokeWidth={3} stackId="1" dataKey="esteMes" stroke="#0095ff" fillOpacity={1} fill="url(#ultimoMesColor)" />
        <Area dot={true} type="monotone" strokeWidth={3} stackId="1" dataKey="ultimoMes" stroke="#07e098" fillOpacity={1} fill="url(#esteMesColor)" />
      </AreaChart>
    </ResponsiveContainer>
        </Card>

    
  );
}