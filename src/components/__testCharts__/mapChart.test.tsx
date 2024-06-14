import { render, screen } from "@testing-library/react";
import MapChart from "@/components/charts/mapChart";

describe("MapChart", () => {
  test("renders the chart", () => {
    render(<MapChart />);
    const chartElement = screen.getByTestId("MapChart");
    expect(chartElement).toBeInTheDocument();
  });

  test("renders the loading spinner initially", () => {
    render(<MapChart />);
    const loadingSpinner = screen.getByRole("progressbar");
    expect(loadingSpinner).toBeInTheDocument();
  });

  test("hides the loading spinner after chart is ready", () => {
    render(<MapChart />);
    const loadingSpinner = screen.getByRole("progressbar");
    const chartElement = screen.getByTestId("MapChart");

    // Simulate chart ready event
    chartElement.dispatchEvent(new Event("ready"));

    expect(loadingSpinner).not.toBeInTheDocument();
  });
});
