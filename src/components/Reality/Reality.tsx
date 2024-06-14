"use client";

import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { Card, CardHeader, CardTitle } from "../ui/card";

interface RealityProps {
    contratosFinalizados: number;
    aguadando: number;
    month: string;
}

const data: RealityProps[] = [
    { contratosFinalizados: 80, aguadando: 75, month: "Jan" },
    { contratosFinalizados: 90, aguadando: 85, month: "Feb" },
    { contratosFinalizados: 70, aguadando: 65, month: "Marc" },
    { contratosFinalizados: 85, aguadando: 80, month: "Abr" },
    { contratosFinalizados: 75, aguadando: 70, month: "Mai" },
    { contratosFinalizados: 95, aguadando: 90, month: "Jun" },
    { contratosFinalizados: 70, aguadando: 80, month: "Jul" },
];

export function Reality() {
  return (
    <Card className ="bg-white mt-10">
            <CardHeader className="flex flex-row justify-between">
          <CardTitle className="flex flex-col gap-3">
            Realidade
          </CardTitle>
        </CardHeader>
    <ResponsiveContainer width="100%" height={350} >
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="month" tickLine={false} axisLine={false}/>
        <Tooltip />
        <Legend />
        <Bar barSize={20} strokeWidth={10} dataKey="contratosFinalizados" fill="#4AB58E"/>
        <Bar barSize={20} strokeWidth={10} dataKey="aguadando" fill="#FFCF00"/>
      </BarChart>
    </ResponsiveContainer>

  </Card>
  );
}