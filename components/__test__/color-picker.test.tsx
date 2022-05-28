import { render, screen } from "@testing-library/react";
import ColorPicker from "../panel/color-picker";

describe("Color Picker", () => {
  it("should render", () => {
    render(
      <ColorPicker
        color="#b7d4cf"
        objKey="icon_color"
        getValueAndUpdate={() => {}}
      />
    );

    const colorPickerElement = screen.getByLabelText("Color");
    expect(colorPickerElement).toBeInTheDocument();
  });
});
