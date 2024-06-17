"use client";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { performanceData } from "~/mock/performance";

type CardPeformanceProps = {
  className?: string;
};

export function CardPeformance({ className }: CardPeformanceProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Rendimento Total</CardTitle>
      </CardHeader>
      <CardContent className="h-[230px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={performanceData} barGap={4} barCategoryGap={38}>
            <CartesianGrid horizontal={true} vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={{ strokeWidth: 0 }}
            />
            <YAxis
              axisLine={false}
              ticks={[0, 5000, 10000, 15000, 20000, 25000]}
              tickFormatter={(value) =>
                value === 0 ? "0" : `${value / 1000}k`
              }
            />
            <Tooltip />
            <Legend iconType="circle" />
            <Bar dataKey="Aguardando" fill="#0095FF" radius={3} />
            <Bar dataKey="Implantadas" fill="#00E096" radius={3} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
