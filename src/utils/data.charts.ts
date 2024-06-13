export const lifesChartData = {
  options: {
    series: [
      {
        name: "TD Consultoria",
        data: [31, 40, 28, 51, 42, 29, 40],
      },
      {
        name: "RIKO Plataforma",
        data: [35, 45, 45, 60, 50, 52, 45],
      },
    ],
    legend: {
      show: false,
    },
    chart: {
      height: 250,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    markers: {
      size: 5,
      colors: ["#0084ff", "#00f43d"],
      strokeWidth: 3,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  },
  lifesModuleData: {
    display: "block",
    size: 30,
    leftImage: {
      src: "/assets/icons/iconBlue.png",
      height: 30,
      width: 30,
    },
    leftLabel: "Ultimo mês",
    firstValue: "3.451",
    rightImage: {
      src: "/assets/icons/iconGreen.png",
      height: 30,
      width: 30,
    },
    secondLabel: "Este mês",
    secondValue: "4.525",
  },
};

export const mapChartData = {
  data: [
    ["Estado", "vendas"],
    ["Santa Catarina", "R$ 55.000"],
    ["Pernambuco", "R$ 70.000"],
    ["São Paulo", "R$ 55.000"],
    ["Rio Grande do Sul", "R$ 90.000"],
    ["Bahia", "R$ 69.000"],
    ["Amazonas", "R$ 23.000"],
    ["Acre", "R$ 70.000"],
  ],
  options: {
    region: "BR",
    displayMode: "regions",
    resolution: "provinces",
    colorAxis: { colors: ["#2500ff", "#2500ff"] },
    datalessRegionColor: "#D4D4D4",
  },
};

export const performanceChartData = {
  colors: ["#0084ff", "#00fbb8"],
  series: [
    {
      name: "Aguardando",
      data: [44, 55, 57, 56, 61, 58, 60],
    },
    {
      name: "Implantados",
      data: [76, 85, 101, 98, 87, 35, 40],
    },
  ],
  chart: {
    type: "bar",
    height: 300,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "35%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
      "Domingo",
    ],
  },
  yaxis: {
    labels: {
      formatter: function (val: number) {
        return val + "k";
      },
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val: number) {
        return "$ " + val + " mil";
      },
    },
  },
};

export const plataformChartData = {
  colors: ["#9C27B0", "#00f43d", "#f20c0c"],
  series: [
    {
      name: "TD Consultoria",
      data: [31, 40, 28, 51, 42, 29, 40],
    },
    {
      name: "RIKO Plataforma",
      data: [26, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "Blue Serviços",
      data: [22, 42, 25, 32, 44, 32, 38],
    },
  ],
  chart: {
    height: 300,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "date",
    categories: [
      "jan",
      "fev",
      "mar",
      "abr",
      "mai",
      "jun",
      "jul",
      "ago",
      "set",
      "out",
      "nov",
      "dez",
    ],
  },
};

export const realChartOptions = {
  colors: ["#4AB58E", "#FFCF00"],
  series: [
    {
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ],
  chart: {
    type: "bar",
    height: 200,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "85%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  legend: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    opacity: 1,
  },
};

export const servicesChartLabels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
];

export const servicesChartData = {
  labels: servicesChartLabels,
  datasets: [
    {
      data: [23, 34, 64, 54, 40, 35],
      backgroundColor: "#00e096",
      stack: "Stack 0",
      borderRadius: 2,
      barThickness: 10,
    },
    {
      data: [23, 34, 64, 54, 60, 50],
      backgroundColor: "#0095ff",
      stack: "Stack 0",
      borderRadius: 2,
      barThickness: 10,
    },
  ],
};

export const servicesChartOptions = {
  plugins: {
    legend: {
      display: false,
      align: "center",
      position: "bottom",
      maxHeight: 30,
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
  interaction: {
    mode: "index" as const,
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
      display: false,
    },
  },
};
