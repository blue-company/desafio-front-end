import { render, screen } from "@testing-library/react";
import PerformanceChart from "@/components/charts/performanceChart";

describe("PerformanceChart", () => {
  test("renders the chart", () => {
    render(<PerformanceChart />);
    const chartElement = screen.getByTestId("chart");
    expect(chartElement).toBeInTheDocument();
  });
});
