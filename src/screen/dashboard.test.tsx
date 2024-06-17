import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Dashboard from "@/screen/dashboard";

describe("Dashboard", () => {
  test("renders sales card", () => {
    render(<Dashboard />);
    const salesCardElement = screen.getByTestId("sales-card");
    expect(salesCardElement).toBeInTheDocument();
  });

  test("renders platform chart", () => {
    render(<Dashboard />);
    const platformChartElement = screen.getByTestId("platform-chart");
    expect(platformChartElement).toBeInTheDocument();
  });

  test("renders performance chart", () => {
    render(<Dashboard />);
    const performanceChartElement = screen.getByTestId("performance-chart");
    expect(performanceChartElement).toBeInTheDocument();
  });

});
