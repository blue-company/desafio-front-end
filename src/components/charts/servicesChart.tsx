import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function ServicesChart() {
  return (
    <BarChart
      colors={["#00E096", "#0095FF"]}
      series={[
        { data: [3, 4, 1, 6, 5], stack: "A", label: "Series A1" },
        { data: [4, 3, 1, 5, 8], stack: "A", label: "Series A2" },
      ]}
      width={800}
      height={300}
    />
  );
}
