"use client";

import { Card, CardHeader, CardTitle } from "../ui/card";
import { Chart } from 'react-google-charts';
import { data } from './data';


const options = {
  region: 'BR',
  displayMode: 'regions',
  resolution: 'provinces',
  colorAxis: { colors: ['#CCCCCC', '#2500FF'] },
  legend: 'none',
  magnifyingGlass: { enable: true, zoomFactor: 10 },
};


export function Map() {
  return (
    <Card className="col-span-12 lg:col-span-3 bg-white   pb-4">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="flex flex-col gap-3 text-base">Mapeamento de Vendas por UF</CardTitle>
      </CardHeader>
      <Chart
      chartType="GeoChart"
      width="100%"
      data={data}
      options={options}
      className="flex justify-center"
    />
    </Card>
  );
}
