"use client";

import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { Card, CardHeader, CardTitle } from "../ui/card";

interface TotalIncomeProps {
    Aguardando: number;
    Implantadas: number;
    day: string;
}

const data: TotalIncomeProps[] = [
    { Aguardando: 15000, Implantadas: 12500, day: "Seg" },
    { Aguardando: 17500, Implantadas: 20000, day: "Ter" },
    { Aguardando: 10000, Implantadas: 8000, day: "Qua" },
    { Aguardando: 12000, Implantadas: 15000, day: "Qui" },
    { Aguardando: 9000, Implantadas: 10000, day: "Sex" },
    { Aguardando: 20000, Implantadas: 18000, day: "Sáb" },
    { Aguardando: 10000, Implantadas: 12000, day: "Dom" },
];

export function TotalIncome() {
  return (
    <Card className ="bg-white mt-10">
            <CardHeader className="flex flex-row justify-between">
          <CardTitle className="flex flex-col gap-3">
            Rendimento Total
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
        <XAxis dataKey="day" tickLine={false} axisLine={false}/>
        <Tooltip />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <YAxis tickLine={false} axisLine={false} />
        <CartesianGrid vertical={false} />
        <Legend />
        <Bar barSize={16} strokeWidth={10} dataKey="Aguardando" fill="#0095ff"/>
        <Bar barSize={16} strokeWidth={10} dataKey="Implantadas" fill="#00e096"/>
      </BarChart>
    </ResponsiveContainer>

  </Card>
  );
}