"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { realityData } from "~/mock/reality";
import { BriefcaseBusiness, Ticket } from "lucide-react";

type CardRealProps = {
  className?: string;
};

export function CardReal({ className }: CardRealProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Realidade</CardTitle>
      </CardHeader>
      <CardContent className="h-[230px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={realityData} barGap={4} barCategoryGap={4}>
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={{ strokeWidth: 0 }}
              tick={{
                fontSize: "12px",
                fontWeight: "500",
                fill: "#7B91B0",
              }}
            />
            <Tooltip />
            <Bar
              dataKey="contratosFinalizados"
              name="Contratos finalizados"
              fill="#4AB58E"
              radius={3}
            />
            <Bar
              dataKey="Aguardando"
              name="Aguardando"
              fill="#FFCF00"
              radius={3}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="bg-[#E2FFF3] p-2.5 rounded-lg">
            <BriefcaseBusiness size={16} color="#4AB58E" />
          </div>
          <div>
            <h3 className="text-sm font-bold">Contratos finalizados</h3>
            <p className="text-muted-foreground text-xs">Global</p>
          </div>
          <p className="text-[#4AB58E] text-sm">8.823</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-[#FFF4DE] p-2.5 rounded-lg">
            <Ticket size={16} color="#FFB21C" />
          </div>
          <div>
            <h3 className="text-sm font-bold">Aguardando</h3>
            <p className="text-muted-foreground text-xs">Comercial</p>
          </div>
          <p className="text-[#FFB21C] text-sm">12.122</p>
        </div>
      </CardFooter>
    </Card>
  );
}
