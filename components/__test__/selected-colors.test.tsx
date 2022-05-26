import { render, screen } from "@testing-library/react";
import SelectedColors from "../modal/selected-colors";

describe("Selected Colors", () => {
  it("should render", () => {
    render(
      <SelectedColors setIsModalSelectedColors={() => {}} selections={{}} />
    );

    const selectedColorsElement = screen.getByRole("dialog");
    expect(selectedColorsElement).toBeInTheDocument();
  });
});
