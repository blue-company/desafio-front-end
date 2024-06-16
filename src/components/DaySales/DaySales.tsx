import { Upload } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { DaySalesCard } from "./DaySalesCard/DaySalesCard";
import { data } from "./DaySalesCard/data";

export function DaySales() {
  return (
    <Card className="bg-white  w-full col-span-12 xl:col-span-7">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="flex flex-col gap-3 text-base">
          Vendas Hoje
          <CardDescription>Resumo de vendas</CardDescription>
        </CardTitle>
        <Button variant="outline" className="w-32 flex gap-2">
          <Upload className="w-4" />
          Exportar
        </Button>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-center md:justify-between gap-1">
        {data.map((item, index) => (
          <DaySalesCard
            key={index}
            icon={item.icon}
            color={item.color}
            number={index===0 ? `R$ ${item.number}` : item.number}
            title={item.title}
            description={item.description}
          />
        ))}
      </CardContent>
    </Card>
  );
}
