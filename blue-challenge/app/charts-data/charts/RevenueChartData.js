import { faker } from "@faker-js/faker";

const labels = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];

export const Data = {
  type: "bar",
  data: {
    labels,
    datasets: [
      {
        label: "Aguardando",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 25 })),
        backgroundColor: "#0095FF",
        borderRadius: 2,
        borderWidth: 3,
        borderColor: "#fff",
        borderRadius: 4,
        barThickness: 15,
      },
      {
        label: "Implantadas",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 25 })),
        backgroundColor: "#00E096",
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
          color: "#374557",
          boxWidth: 6,
          boxHeight: 6,
          padding: 15,
          font: {
            size: 10,
            family: "Roboto",
          },
        },
      },
    },
    scales: {
      display: false,
      responsive: true,
      x: {
        ticks: {
          maxRotation: 0, // Define o ângulo máximo de rotação dos ticks do eixo x
          minRotation: 0,
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
          callback: function (value, index, values) {
            return value + "K"; // Adiciona 'K' ao final de cada valor
          },
          color: "#CDCDCD", // Altera a cor dos números do eixo X
          font: {
            size: 10,
            family: "Roboto",
          },
        },
        grid: {
          display: true,
          color: "#F9F9F9",
        },
      },
    },
  },
};
