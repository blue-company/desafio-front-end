"use client";

import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { Card, CardHeader, CardTitle } from "../ui/card";

import { data } from "./data";

export function Plataforms() {
  return (
    <Card className ="bg-white w-full col-span-12 xl:col-span-5 pb-4">
          <CardHeader className="flex flex-row justify-between">
          <CardTitle className="flex flex-col gap-3 text-base">
            Plataformas
          </CardTitle>
        </CardHeader>
    
      <ResponsiveContainer width="100%" height={200}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis tick={{fontSize:"10px"}} dataKey="month" tickLine={false} axisLine={false} />
        <YAxis tick={{fontSize:"10px"}} tickLine={false} axisLine={false} />
        <CartesianGrid vertical={false} />
        <Tooltip />
        <Line strokeWidth={3} dataKey="tdConsultoria" stroke="#a700ff" type="monotone" dot={false}/>
        <Line strokeWidth={3} dataKey="rikoPlataforma" stroke="#ef4444" type="monotone" dot={false}/>
        <Line strokeWidth={3} dataKey="blueServicos" stroke="#3cd856" type="monotone" dot={false}/>
        <Legend wrapperStyle={{ fontSize: '10px' }} iconType="square"  />
      </LineChart>
    </ResponsiveContainer>

    </Card>

    
  );
}
