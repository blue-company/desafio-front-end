"use client";

import { Chart } from "react-google-charts";
import { CircularProgress } from "@mui/material";
import { useState } from "react";

const MapChart = () => {
    const [loading, setLoading] = useState(true);
  const Data = [
    ["Estado", "vendas"],
    ["santa catarina", "R$ 55.000"],
    ["Pernambuco", "R$ 70.000"],
    ["São paulo", "R$ 55.000"],
    ["rio grande do sul", "R$ 90.000"],
    ["bahia", "R$ 69.000"],
    ["amazonas", "R$ 23.000"],
    ["acre", "R$ 70.000"],
  ];

  const Options = {
    region: "BR",
    displayMode: "regions",
    resolution: "provinces",
    colorAxis: { colors: ["#2500ff", "#2500ff"] },
    datalessRegionColor: "#D4D4D4",
  };

    const handleChartReady = () => {
      setLoading(false);
    };

  return (
    <div
      data-testid="MapChart"
      className="flex flex-col items-end w-[100%] h-[100%] justify-end"
    >
      {loading && (
        <div className="flex">
          <CircularProgress  />
        </div>
      )}
      <Chart
        width={"90%"}
        height={"95%"}
        chartType="GeoChart"
        data={Data}
        options={Options}
        chartEvents={[{ eventName: "ready", callback: handleChartReady }]}
      />
    </div>
  );
};

export default MapChart;
