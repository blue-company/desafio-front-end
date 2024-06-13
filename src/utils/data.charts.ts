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
