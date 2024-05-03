import { render } from "@testing-library/react";
import RevenueChart from "../charts-data/charts-components/RevenueChart";

describe("Teste para Gráfico do rendimento", () => {
  it("deve renderizar o gráfico corretamente", () => {
    const { getByTestId } = render(<RevenueChart />);
    const revenueChart = getByTestId("RevenueChart");
    expect(revenueChart).toBeInTheDocument();
  });
});
