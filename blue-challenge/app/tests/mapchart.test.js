import { render } from "@testing-library/react";
import MapChart from "../charts-data/charts-components/MapChart";

describe("Teste para Gráfico de mapa", () => {
  it("deve renderizar o gráfico corretamente", () => {
    const { getByTestId } = render(<MapChart />);
    const mapChart = getByTestId("MapChart");
    expect(mapChart).toBeInTheDocument();
  });
});
