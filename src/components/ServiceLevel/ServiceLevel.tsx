"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { Card, CardHeader, CardTitle } from "../ui/card";

interface ServiceLevelProps {
  expectativa: number;
  realidade: number;
}

const data: ServiceLevelProps[] = [
  { expectativa: 80, realidade: 75 },
  { expectativa: 90, realidade: 85 },
  { expectativa: 70, realidade: 65 },
  { expectativa: 85, realidade: 80 },
  { expectativa: 75, realidade: 70 },
  { expectativa: 95, realidade: 90 },
  { expectativa: 54, realidade: 60 },
];
function totalKeys(key: keyof ServiceLevelProps) {
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

export function ServiceLevel() {
  return (
    <Card className="col-span-12 lg:col-span-3 bg-white   pb-4">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="flex flex-col gap-3 text-base">Nivel de Serviço</CardTitle>
      </CardHeader>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Legend wrapperStyle={{ fontSize: '14px' }} content={renderLegend} />
          <Tooltip />
          <Bar
            barSize={20}
            strokeWidth={3}
            stackId="a"
            dataKey="expectativa"
            fill="#00e096"
          />
          <Bar
            barSize={20}
            strokeWidth={3}
            stackId="a"
            dataKey="realidade"
            fill="#0095ff"
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
