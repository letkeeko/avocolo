import { render, screen } from "@testing-library/react";
import Heading from "../heading";

describe("Heading", () => {
  it("should render", () => {
    render(<Heading>Morning</Heading>);

    const headingElement = screen.getByText("Morning");

    expect(headingElement).toBeInTheDocument();
  });
});
