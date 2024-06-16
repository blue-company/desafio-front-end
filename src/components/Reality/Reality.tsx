"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Legend,
} from "recharts";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { data } from "./data";
import { RealityProps } from "./types";


export function Reality() {
  return (
    <Card className="col-span-12 xl:col-span-3 bg-white   pb-4">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="flex flex-col gap-3 text-base">
          Realidade
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
            dataKey="month"
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: "14px" }} />
          <Bar
            barSize={20}
            strokeWidth={10}
            dataKey="contratosFinalizados"
            fill="#4AB58E"
          />
          <Bar
            barSize={20}
            strokeWidth={10}
            dataKey="aguadando"
            fill="#FFCF00"
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
