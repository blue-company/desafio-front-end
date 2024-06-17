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
  Plugin,
} from "chart.js";
import { GenericSubComponent } from "../subComponentsCharts";
import blueCircle from "@/assets/icons/blueCircle.png";
import greenCircle from "@/assets/icons/greenCircle.png";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ServicesChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [23, 34, 64, 54, 40, 35],
        backgroundColor: "#00e096",
        stack: "Stack 0",
        borderRadius: 2,
        barThickness: 10,
      },
      {
        label: "Dataset 2",
        data: [23, 34, 64, 54, 60, 50],
        backgroundColor: "#0095ff",
        stack: "Stack 0",
        borderRadius: 2,
        barThickness: 10,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        align: "center",
        position: "bottom",
        labels: {
          color: "rgb(148, 163, 184)",
          boxWidth: 10,
          boxHeight: 10,
          padding: 15,
          font: {
            size: 14,
            family: "Poppins",
          },
        },
      } as unknown as Plugin<"bar", Object>,
    },
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        ticks: {
          display: false,
        },
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="relative flex flex-col items-center w-full h-full">
      <div style={{ width: "100%", height: "80%" }}>
        <Bar
          data={data}
          options={{
            plugins: {
              legend: {
                display: false,
                align: "center",
                position: "bottom",
                labels: {
                  color: "rgb(148, 163, 184)",
                  boxWidth: 10,
                  boxHeight: 10,
                  padding: 15,
                  font: {
                    size: 14,
                    family: "Poppins",
                  },
                },
              },
            },
            responsive: true,
            maintainAspectRatio: false,

            scales: {
              x: {
                ticks: {
                  display: false,
                },
                stacked: true,
                grid: {
                  display: false,
                },
              },
              y: {
                display: false,
              },
            },
          }}
        />
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
};

export default ServicesChart;
