import { render, screen } from "@testing-library/react";
import TopProductsChart from "@/components/charts/topProducstChart";

describe("TopProductsChart", () => {
  test("renders the chart", () => {
    render(<TopProductsChart />);
    const chartElement = screen.getByTestId("chart");
    expect(chartElement).toBeInTheDocument();
  });

  test("renders the table headers", () => {
    render(<TopProductsChart />);
    const headers = screen.getAllByRole("columnheader");
    expect(headers).toHaveLength(4);
    expect(headers[0]).toHaveTextContent("#");
    expect(headers[1]).toHaveTextContent("Produto");
    expect(headers[2]).toHaveTextContent("Alavancagem");
    expect(headers[3]).toHaveTextContent("%/");
  });

  test("renders the table rows", () => {
    render(<TopProductsChart />);
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(5); // Including the header row
  });

  test("renders the product names", () => {
    render(<TopProductsChart />);
    const productNames = screen.getAllByRole("cell", { name: /start pro/i });
    expect(productNames).toHaveLength(4);
    expect(productNames[0]).toHaveTextContent("Green Start Pro");
    expect(productNames[1]).toHaveTextContent("Red Start Pro");
    expect(productNames[2]).toHaveTextContent("Yellow Start Pro");
    expect(productNames[3]).toHaveTextContent("Blue Start Pro");
  });

  test("renders the graph bars", () => {
    render(<TopProductsChart />);
    const graphBars = screen.getAllByTestId("graph-bar");
    expect(graphBars).toHaveLength(4);
    expect(graphBars[0]).toHaveStyle("width: 70%");
    expect(graphBars[1]).toHaveStyle("width: 50%");
    expect(graphBars[2]).toHaveStyle("width: 80%");
    expect(graphBars[3]).toHaveStyle("width: 40%");
  });

  test("renders the graph percentages", () => {
    render(<TopProductsChart />);
    const graphPercentages = screen.getAllByTestId("graph-percentage");
    expect(graphPercentages).toHaveLength(4);
    expect(graphPercentages[0]).toHaveTextContent("70%");
    expect(graphPercentages[1]).toHaveTextContent("50%");
    expect(graphPercentages[2]).toHaveTextContent("80%");
    expect(graphPercentages[3]).toHaveTextContent("40%");
  });
});
