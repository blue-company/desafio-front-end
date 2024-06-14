import { render, screen } from "@testing-library/react";
import ServicesChart from "@/components/charts/servicesChart";

describe("ServicesChart", () => {
  test("renders the chart", () => {
    render(<ServicesChart />);
    const chartElement = screen.getByTestId("chart");
    expect(chartElement).toBeInTheDocument();
  });

  test("renders the GenericSubComponent", () => {
    render(<ServicesChart />);
    const genericSubComponentElement = screen.getByTestId(
      "generic-sub-component"
    );
    expect(genericSubComponentElement).toBeInTheDocument();
  });
});
