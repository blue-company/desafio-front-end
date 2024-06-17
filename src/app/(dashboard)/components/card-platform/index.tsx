"use client";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { platformData } from "~/mock/plataform";

type CardPlatformProps = {
  className?: string;
};

export function CardPlatform({ className }: CardPlatformProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Plataformas</CardTitle>
      </CardHeader>
      <CardContent className="h-80 md:h-[444px] 2xl:h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={platformData}>
            <CartesianGrid horizontal={true} vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={{ strokeWidth: 0 }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              ticks={[0, 100, 200, 300, 400]}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip />
            <Legend iconType="square" iconSize={10} />
            <Line
              type="monotone"
              dataKey="TD Consultoria"
              stroke="#A700FF"
              strokeWidth={4}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="RIKO Plataforma"
              stroke="#EF4444"
              strokeWidth={4}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="Blue Serviços"
              stroke="#3CD856"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
