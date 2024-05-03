"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { Data } from "../charts/PlatformsChartData";

const PlatformsChart = () => {
  return (
    <div
      data-testid="PlatformsChart"
      className="flex flex-col items-center w-[98%] h-full"
    >
      <div className="flex w-full mb-5 text-13 font-bold">
        <h1>Plataformas</h1>
      </div>

      <Line data={Data.data} options={Data.options} width={"500px"} />
    </div>
  );
};

export default PlatformsChart;
