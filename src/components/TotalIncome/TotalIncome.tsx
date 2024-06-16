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
import { data } from "./data";

export function TotalIncome() {
  return (
    <Card className="col-span-12 xl:col-span-6 bg-white pb-4">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="flex flex-col gap-3 text-base">
          Rendimento Total
        </CardTitle>
      </CardHeader>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            tick={{ fontSize: "10px" }}
            dataKey="day"
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />
          <YAxis
            tick={{ fontSize: "10px" }}
            tickLine={false}
            axisLine={false}
          />
          <CartesianGrid vertical={false} />
          <Legend iconType="circle" wrapperStyle={{ fontSize: "12px" }} />
          <Bar
            barSize={16}
            strokeWidth={10}
            dataKey="Aguardando"
            fill="#0095ff"
          />
          <Bar
            barSize={16}
            strokeWidth={10}
            dataKey="Implantadas"
            fill="#00e096"
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
