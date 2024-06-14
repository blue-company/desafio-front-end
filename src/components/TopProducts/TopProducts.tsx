"use client";

import { Card, CardHeader, CardTitle } from "../ui/card";
import { TopProductsDataTable } from "./TopProductsDataTable";



export function TopProducts() {
  return (
    <Card className ="bg-white mt-10">
            <CardHeader className="flex flex-row justify-between">
          <CardTitle className="flex flex-col gap-3">
            Top Produtos
          </CardTitle>
        </CardHeader>
        <TopProductsDataTable />
        

  </Card>
  );
}