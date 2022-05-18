import { render, screen } from "@testing-library/react";
import Button from "../button";

describe("Button", () => {
  it("should render", () => {
    render(<Button>Click me</Button>);

    const buttonElement = screen.getByText("Click me");

    expect(buttonElement).toBeInTheDocument();
  });
});
