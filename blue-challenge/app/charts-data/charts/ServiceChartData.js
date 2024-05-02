import { faker } from "@faker-js/faker";

const labels = ["January", "February", "March", "April", "May", "June"];

export const Data = {
  data: {
    labels,
    datasets: [
      {
        label: "Realidade",
        data: labels.map(() => faker.datatype.number({ min: 50, max: 1000 })),
        backgroundColor: "#00e096",
        stack: "Stack 0",
        borderRadius: 2,
        barThickness: 10,
      },
      {
        label: "Expectativa",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#0095ff",
        stack: "Stack 0",
        borderRadius: 2,
        barThickness: 10,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        align: "center",
        position: "bottom",
        maxHeight: 30,
        labels: {
          color: "rgb(148, 163, 184)",
          boxWidth: 6,
          boxHeight: 6,
          padding: 15,
          font: {
            size: 12,
            family: "Poppins",
          },
        },
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
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
        ticks: {
          display: false,
        },
        stacked: true,
        grid: {
          display: false,
        },
      },
    },
  },
};
