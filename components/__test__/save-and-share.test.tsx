import { render, screen } from "@testing-library/react";
import SaveAndShare from "../modal/save-and-share";

describe("Save and Share", () => {
  it("should render", () => {
    render(
      <SaveAndShare
        setIsModalShareOpen={() => {}}
        setIsModalSelectedColors={() => {}}
        selections={{}}
      />
    );

    const saveAndShareElement = screen.getByRole("dialog");
    expect(saveAndShareElement).toBeInTheDocument();
  });
});
