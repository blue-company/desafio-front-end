"use client";

import { Chart } from "react-google-charts";

const MapChart = () => {
  const Data = [
    ["Estado", "População"],
    ["Amazonas", 28962558],
    ["Bahia", 19581981],
    ["Pernambuco", 19581981],
  ];

  const Options = {
    region: "BR",
    displayMode: "regions",
    resolution: "provinces",
    colorAxis: { colors: ["#2500ff", "#2500ff"] },
    datalessRegionColor: "#D4D4D4",
  };

  return (
    <div
      data-testid="MapChart"
      className="flex flex-col items-center w-[98%] h-full"
    >
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
