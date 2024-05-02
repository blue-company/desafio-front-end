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
    <div className="flex flex-col items-center w-[98%] h-full">
      <div className="flex w-full mb-5">
        <h1 className="text-13 font-bold">Plataformas</h1>
      </div>

      <Line data={Data.data} options={Data.options} width={"500px"} />
    </div>
  );
};

export default PlatformsChart;
