import { render, screen } from "@testing-library/react";
import BlankOverlay from "../panel/blank-overlay";

describe("Blank Overlay", () => {
  it("should render", () => {
    render(<BlankOverlay setActiveColorPicker={() => {}} />);

    const blankElement = screen.getByRole("presentation");
    expect(blankElement).toBeInTheDocument();
  });
});
