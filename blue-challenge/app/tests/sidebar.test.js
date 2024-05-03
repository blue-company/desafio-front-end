import { render } from "@testing-library/react";
import Sidebar from "../components/Sidebar";

describe("Teste para Sidebar", () => {
  it("deve renderizar sidebar corretamente", () => {
    const { getByTestId } = render(<Sidebar />);
    const sideBar = getByTestId("sidebar");
    expect(sideBar).toBeInTheDocument();
  });
});
