import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { GenericSubComponent } from "@/components/subComponentsCharts";
import { lifesChartData } from "@/utils/data.charts";
import iconBlue from '@/assets/icons/iconBlue.png'
import iconGreen from "@/assets/icons/iconGreen.png";

const LifesCharts: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = lifesChartData.options;

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  const {
    display,
    size,
    leftLabel,
    firstValue,
    secondLabel,
    secondValue,
  } = lifesChartData.lifesModuleData;

  return (
    <div>
      <div>
        <div id="chart" ref={chartRef}></div>
        <GenericSubComponent
          display={display}
          size={size}
          leftImage={iconBlue}
          leftLabel={leftLabel}
          firstValue={firstValue}
          rightImage={iconGreen}
          secondLabel={secondLabel}
          secondValue={secondValue}
        />
      </div>
    </div>
  );
};

export default LifesCharts;
