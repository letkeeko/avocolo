import { render, screen } from "@testing-library/react";
import Panel from "../panel/panel";

describe("Panel", () => {
  it("should render", () => {
    render(
      <Panel
        isSidebarOpen={true}
        selections={{}}
        handleChange={() => {}}
        toggleSidebar={() => {}}
        handleReset={() => {}}
      />
    );

    const panelElement = screen.getByText("Back to home");

    expect(panelElement).toBeInTheDocument();
  });
});
