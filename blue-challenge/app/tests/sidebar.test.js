import { render, fireEvent } from "@testing-library/react";
import Sidebar from "../components/Sidebar";

describe("Teste para Sidebar", () => {
  it("deve renderizar sidebar corretamente", () => {
    const { getByTestId } = render(<Sidebar />);
    const dashboardButton = getByTestId("sidebar");
    expect(dashboardButton).toBeInTheDocument();
  });
  it("deve fazer a troca de cor dos elemento ao clicar", () => {
    const { getByTestId } = render(<Sidebar />);
    const dashboardButton = getByTestId("dashboardSection");
    const leaderboardButton = getByTestId("dashboardSection");
    fireEvent.click(dashboardButton);
    fireEvent.click(leaderboardButton);
    expect(dashboardButton).toHaveClass("bg-blue-250");
    expect(leaderboardButton).toHaveClass("bg-blue-250");
  });
});
