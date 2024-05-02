import { faker } from "@faker-js/faker";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const Data = {
  data: {
    labels,
    datasets: [
      {
        fill: true,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "#0095FF",
        backgroundColor: "#0095ff44",
        tension: 0.2,
      },
      {
        fill: true,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "#00E096",
        backgroundColor: "#00E09644",
        tension: 0.2,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      display: false,
      responsive: true,
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  },
};
