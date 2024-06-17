"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

type CardMappingSalesProps = {
  className?: string;
};

export function CardMappingSales({ className }: CardMappingSalesProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Mapeando vendas por UF</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src="/brazil.svg"
          alt="Mapa do Brasil"
          className="w-full"
          width={230}
          height={230}
        />
      </CardContent>
    </Card>
  );
}
