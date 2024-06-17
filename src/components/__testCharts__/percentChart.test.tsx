import { render, screen } from "@testing-library/react";
import PercentageChart from "@/components/charts/percentChart";

describe("PercentageChart", () => {
  test("renders the chart", () => {
    render(<PercentageChart />);
    const chartElement = screen.getByTestId("chart");
    expect(chartElement).toBeInTheDocument();
  });
});
