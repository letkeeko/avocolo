import { render, screen } from "@testing-library/react";
import Text from "../text";

describe("Text", () => {
  it("should render", () => {
    render(<Text>Hello</Text>);

    const paragraphElement = screen.getByText("Hello");

    expect(paragraphElement).toBeInTheDocument();
  });
});
