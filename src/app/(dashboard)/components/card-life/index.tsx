"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import { lifeData } from "~/mock/life";
import { GitCommitHorizontal } from "lucide-react";
import {
  SubtitleFooter,
  SubtitleFooterContent,
  SubtitleFooterTitle,
  SubtitleFooterAmount,
} from "../subtitle-footer";

type CardLifeProps = {
  className?: string;
};

export function CardLife({ className }: CardLifeProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Vidas</CardTitle>
      </CardHeader>
      <CardContent className="h-[230px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={lifeData}>
            <defs>
              <linearGradient id="lastMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#6698de" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFFF" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="thisMonth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#CAF9E9" stopOpacity={1} />
                <stop offset="200%" stopColor="#FFFF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="lastMonth"
              name="Último mês"
              stroke="#007ED7"
              fillOpacity={1}
              strokeWidth={3}
              fill="url(#lastMonth)"
              dot
            />
            <Area
              type="monotone"
              dataKey="thisMonth"
              name="Este mês"
              stroke="#13CB8D"
              fillOpacity={1}
              strokeWidth={3}
              fill="url(#thisMonth)"
              dot
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="flex justify-center">
        <SubtitleFooter separate={true}>
          <SubtitleFooterContent>
            <GitCommitHorizontal
              fill="#69B7E5"
              color="#69B7E5"
              size={28}
              strokeWidth={1.75}
            />
            <SubtitleFooterTitle>Ultimo mês</SubtitleFooterTitle>
          </SubtitleFooterContent>
          <SubtitleFooterAmount>3.432</SubtitleFooterAmount>
        </SubtitleFooter>

        <SubtitleFooter>
          <SubtitleFooterContent>
            <GitCommitHorizontal
              fill="#13CB8D"
              color="#13CB8D"
              size={28}
              strokeWidth={1.75}
            />
            <SubtitleFooterTitle>Este mês</SubtitleFooterTitle>
          </SubtitleFooterContent>
          <SubtitleFooterAmount>4.504</SubtitleFooterAmount>
        </SubtitleFooter>
      </CardFooter>
    </Card>
  );
}
