// src/components/MapChart.tsx

"use client";

import { Chart } from "react-google-charts";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { mapChartData } from "@/utils/data.charts";

const MapChart = () => {
  const [loading, setLoading] = useState(true);

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
          <CircularProgress />
        </div>
      )}
      <Chart
        width={"90%"}
        height={"95%"}
        chartType="GeoChart"
        data={mapChartData.data}
        options={mapChartData.options}
        chartEvents={[{ eventName: "ready", callback: handleChartReady }]}
      />
    </div>
  );
};

export default MapChart;
