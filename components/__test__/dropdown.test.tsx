import { render, screen } from "@testing-library/react";
import Dropdown from "../panel/dropdown";

describe("Blank Overlay", () => {
  it("should render", () => {
    render(
      <Dropdown
        label="Title"
        handleDropdownClick={() => {}}
        handleChange={() => {}}
        activeDropdown={[]}
        selections={{}}
        variants={{}}
      />
    );

    const dropdownElement = screen.getByText("Title");
    expect(dropdownElement).toBeInTheDocument();
  });
});
