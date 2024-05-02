import { faker } from "@faker-js/faker";

const labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"];

export const Data = {
  type: "bar",
  data: {
    labels,
    datasets: [
      {
        data: labels.map(() => faker.datatype.number({ min: 0, max: 25 })),
        backgroundColor: "#23ad80",
        borderRadius: 4,
      },
      {
        data: labels.map(() => faker.datatype.number({ min: 0, max: 25 })),
        backgroundColor: "#FFCF00",
        borderRadius: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      display: false,
      responsive: true,
      x: {
        ticks: {
          font: {
            size: 10,
            family: "Roboto",
          },
          padding: 0,
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
