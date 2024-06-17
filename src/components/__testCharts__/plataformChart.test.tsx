import { render, screen } from "@testing-library/react";
import PlataformChart from "@/components/charts/plataformChart";

describe("PlataformChart", () => {
  test("renders the chart", () => {
    render(<PlataformChart />);
    const chartElement = screen.getByTestId("chart");
    expect(chartElement).toBeInTheDocument();
  });
});
