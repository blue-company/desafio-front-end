import { render, screen } from "@testing-library/react";
import RealChart from "@/components/charts/realCharts";

describe("RealChart", () => {
  test("renders the chart", () => {
    render(<RealChart />);
    const chartElement = screen.getByTestId("chart");
    expect(chartElement).toBeInTheDocument();
  });

  test("renders the RealChartsComponent with correct props", () => {
    render(<RealChart />);
    const realChartsComponentElements = screen.getAllByTestId(
      "real-charts-component"
    );

    expect(realChartsComponentElements).toHaveLength(2);

    const firstRealChartsComponent = realChartsComponentElements[0];
    expect(firstRealChartsComponent).toHaveTextContent("Contratos finalizados");
    expect(firstRealChartsComponent).toHaveTextContent("Global");
    expect(firstRealChartsComponent).toHaveTextContent("2.343");

    const secondRealChartsComponent = realChartsComponentElements[1];
    expect(secondRealChartsComponent).toHaveTextContent("Aguardando");
    expect(secondRealChartsComponent).toHaveTextContent("Commercial");
    expect(secondRealChartsComponent).toHaveTextContent("12.122");
  });
});
