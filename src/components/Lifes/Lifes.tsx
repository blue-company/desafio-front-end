"use client";

import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { Card, CardHeader, CardTitle } from "../ui/card";

interface LifesProps {
    esteMes: number;
    ultimoMes: number;
}

const data: LifesProps[] = [
    { ultimoMes: 80, esteMes: 75 },
    { ultimoMes: 90, esteMes: 85 },
    { ultimoMes: 70, esteMes: 65 },
    { ultimoMes: 85, esteMes: 80 },
    { ultimoMes: 75, esteMes: 70 },
    { ultimoMes: 95, esteMes: 90 },
];

function totalKeys(key: keyof LifesProps) {
  const total = data.reduce((total, item) => total + item[key], 0);
  return total;
}

const renderLegend = (props: any) => {
  const { payload } = props;

  return (
    <div className="flex gap-4 mt-3 border-t">
      {payload.map((entry: any, index: any) => (
        <div key={`item-${index}`} className="flex flex-col capitalize ">
          <div className="text-[#96A5B8] flex items-center gap-1">
            <div className='w-3 h-3 rounded-full' style={{backgroundColor:entry.color}}></div>
            {entry.value}
          </div>
          <p className="font-bold ml-4">{totalKeys(entry.value)}</p>
        </div>
      ))}
    </div>
  );
};

export function Lifes() {
  return (
      <Card className ="col-span-12 lg:col-span-3 bg-white   pb-4">
            <CardHeader className="flex flex-row justify-between">
          <CardTitle className="flex flex-col gap-3 text-base">
            Vidas
          </CardTitle>
        </CardHeader>
        <ResponsiveContainer width="100%" height={250}>
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
        <Legend content={renderLegend} wrapperStyle={{ fontSize: '14px' }} />
        <Area dot={true} type="monotone" strokeWidth={3} stackId="1" dataKey="ultimoMes" stroke="#0095ff" fillOpacity={1} fill="url(#esteMesColor)" />
        <Area dot={true} type="monotone" strokeWidth={3} stackId="1" dataKey="esteMes" stroke="#07e098" fillOpacity={1} fill="url(#ultimoMesColor)" />
      </AreaChart>
    </ResponsiveContainer>
        </Card>

    
  );
}