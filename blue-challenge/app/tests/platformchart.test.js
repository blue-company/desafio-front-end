import { render } from "@testing-library/react";
import PlatformsChart from "../charts-data/charts-components/PlatformsChart";

describe("Teste para Gráfico das plataformas", () => {
  it("deve renderizar o gráfico corretamente", () => {
    const { getByTestId } = render(<PlatformsChart />);
    const platformsChart = getByTestId("PlatformsChart");
    expect(platformsChart).toBeInTheDocument();
  });
});
