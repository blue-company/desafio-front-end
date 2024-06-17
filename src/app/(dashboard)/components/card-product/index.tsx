"use client";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { productData } from "~/mock/product";
import { text } from "./style";

type CardProductProps = {
  className?: string;
};

export function CardProduct({ className }: CardProductProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Top Produtos</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Alavancagem</TableHead>
              <TableHead>%</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productData.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>
                    <Progress value={item.leverage} type={item.type as any} />
                  </TableCell>
                  <TableCell>
                    <p className={text({ type: item.type as any })}>
                      {item.percent}
                    </p>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
