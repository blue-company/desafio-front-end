"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  SubtitleFooter,
  SubtitleFooterContent,
  SubtitleFooterTitle,
  SubtitleFooterAmount,
} from "../subtitle-footer";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import { serviceLevelData } from "~/mock/service-level";
import { Circle } from "lucide-react";

type CardServiceLevelProps = {
  className?: string;
};

export function CardServiceLevel({ className }: CardServiceLevelProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Nível de serviço</CardTitle>
      </CardHeader>
      <CardContent className="h-[230px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={serviceLevelData} barCategoryGap={16}>
            <Tooltip />
            <Bar
              dataKey="reality"
              stackId="a"
              fill="#00E096"
              radius={[1, 1, 0, 0]}
            />
            <Bar
              dataKey="expectation"
              stackId="a"
              fill="#0095FF"
              radius={[1, 1, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex justify-center">
        <SubtitleFooter separate={true}>
          <SubtitleFooterContent>
            <Circle
              fill="#69B7E5"
              color="#13CB8D"
              size={8}
              strokeWidth={1.75}
            />
            <SubtitleFooterTitle>Expectativa</SubtitleFooterTitle>
          </SubtitleFooterContent>
          <SubtitleFooterAmount>1,135</SubtitleFooterAmount>
        </SubtitleFooter>

        <SubtitleFooter>
          <SubtitleFooterContent>
            <Circle
              fill="#13CB8D"
              color="#13CB8D"
              size={8}
              strokeWidth={1.75}
            />
            <SubtitleFooterTitle>Realidade</SubtitleFooterTitle>
          </SubtitleFooterContent>
          <SubtitleFooterAmount>635</SubtitleFooterAmount>
        </SubtitleFooter>
      </CardFooter>
    </Card>
  );
}
