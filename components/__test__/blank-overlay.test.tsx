import { render, screen } from "@testing-library/react";
import BlankOverlay from "../blank-overlay";

describe("Blank Overlay", () => {
  it("should render", () => {
    render(<BlankOverlay triggerFunction={() => {}} paramValue="" />);

    const blankElement = screen.getByRole("presentation");
    expect(blankElement).toBeInTheDocument();
  });
});
