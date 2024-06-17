import { render, screen } from "@testing-library/react";
import LifesCharts from "@/components/charts/lifesCharts";

describe("LifesCharts", () => {
  test("renders the chart", () => {
    render(<LifesCharts />);
    const chartElement = screen.getByTestId("chart");
    expect(chartElement).toBeInTheDocument();
  });

  test("renders the GenericSubComponent", () => {
    render(<LifesCharts />);
    const genericSubComponentElement = screen.getByTestId(
      "generic-sub-component"
    );
    expect(genericSubComponentElement).toBeInTheDocument();
  });
});
