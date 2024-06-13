// src/components/ServicesChart.tsx

import * as React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { GenericSubComponent } from "../subComponentsCharts";
import blueCircle from "@/assets/icons/blueCircle.png";
import greenCircle from "@/assets/icons/greenCircle.png";
import { servicesChartData, servicesChartOptions } from "@/utils/data.charts";

export default function ServicesChart() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  return (
    <div className="relative flex flex-col items-center w-full h-full">
      <div style={{ width: "100%", height: "80%" }}>
        <Bar data={servicesChartData} options={servicesChartOptions} />
      </div>
      <div className="flex w-full items-center justify-center gap-14 text-xs mt-5">
        <GenericSubComponent
          display="none"
          size={10}
          leftImage={blueCircle}
          leftLabel="Expectativa"
          firstValue="1.152"
          rightImage={greenCircle}
          secondLabel="Realidade"
          secondValue="635"
        />
      </div>
    </div>
  );
}
