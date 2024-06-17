import React from "react";
import ReactApexChart from "react-apexcharts";

const PercentageChart = () => {
  const series = [75];

  return (
    <div>
      <div id="card">
        <div id="chart">
          <ReactApexChart
            options={{
              chart: {
                height: 450,
                type: "radialBar",
                toolbar: {
                  show: true,
                },
              },
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 225,
                  hollow: {
                    margin: 0,
                    size: "70%",
                    background: "#fff",
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: "front",
                    dropShadow: {
                      enabled: true,
                      top: 3,
                      left: 0,
                      blur: 4,
                      opacity: 0.24,
                    },
                  },
                  track: {
                    background: "#ffffff",
                    strokeWidth: "67%",
                    margin: 0,
                    dropShadow: {
                      enabled: true,
                      top: -3,
                      left: 0,
                      blur: 4,
                      opacity: 0.35,
                    },
                  },
                  dataLabels: {
                    show: true,
                    name: {
                      offsetY: -10,
                      show: true,
                      color: "#888",
                      fontSize: "17px",
                    },
                    value: {
                      formatter: function (val: any) {
                        return parseInt(val).toString();
                      },
                      color: "#111",
                      fontSize: "36px",
                      show: true,
                    },
                  },
                },
              },
              fill: {
                type: "gradient",
                gradient: {
                  shade: "dark",
                  type: "horizontal",
                  shadeIntensity: 0.5,
                  gradientToColors: ["#00f947c7"],
                  inverseColors: false,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100],
                },
              },
              stroke: {
                lineCap: "round",
              },
              labels: ["Meta Mensal 🚀"],
            }}
            series={series}
            type="radialBar"
            height={350}
          />
     
        </div>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PercentageChart;
