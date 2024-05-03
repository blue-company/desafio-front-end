"use client";

import { Chart } from "react-google-charts";
import { Data, Options } from "../charts/MapChartData";

const MapChart = () => {
  return (
    <div className="flex flex-col items-center w-[98%] h-full">
      <div className="flex w-full mb-5 text-13 font-bold">
        <h1>Mapeamento de vendas por UF</h1>
      </div>
      <Chart
        width={"100%"}
        height={"100%"}
        chartType="GeoChart"
        data={Data}
        options={Options}
      />
    </div>
  );
};

export default MapChart;
