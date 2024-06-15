"use client";

import { Card, CardHeader, CardTitle } from "../ui/card";
import { TopProductsDataTable } from "./TopProductsDataTable";

export function TopProducts() {
  return (
    <Card className="col-span-12 xl:col-span-6 bg-white   pb-4">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="flex flex-col gap-3 text-base">
          Top Produtos
        </CardTitle>
      </CardHeader>
      <TopProductsDataTable />
    </Card>
  );
}
