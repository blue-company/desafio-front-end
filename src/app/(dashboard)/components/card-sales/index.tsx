import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { salesTodayData } from "~/mock/sales-today";
import { content, item, title, subTitle, paragraph } from "./style";
import { Button } from "~/components/ui/button";
import { Upload } from "lucide-react";

type CardSalesProps = {
  className?: string;
};

export function CardSales({ className }: CardSalesProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex-row justify-between items-center">
        <div className="space-y-2">
          <CardTitle>Vendas hoje</CardTitle>
          <CardDescription>Resumo de vendas</CardDescription>
        </div>

        <Button variant="outline">
          <Upload className="h-4 w-4" />
          Exportar
        </Button>
      </CardHeader>
      <CardContent className={content()}>
        {salesTodayData.map((itemCard) => {
          return (
            <div key={itemCard.label} className={item({ type: itemCard.type })}>
              {itemCard.icon()}
              <h2 className={title()}>{itemCard.amount}</h2>
              <h3 className={subTitle()}>{itemCard.label}</h3>
              <p className={paragraph()}>{itemCard.percent} a mais que ontem</p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
