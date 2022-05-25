import styled from "styled-components";
import { COLOR } from "../variables";
import { PropTypes } from "../types/color-picker.types";
import { HexColorPicker, HexColorInput } from "react-colorful";

const Wrapper = styled.div`
  background-color: ${COLOR.white};
  position: absolute;
  top: 37px;
  z-index: 10;
  border-radius: 6px;

  input {
    width: 100%;
    margin: 10px 0 0 0;
    padding: 5px;
  }
`;

export default function ColorPicker(props: PropTypes) {
  const { color, objKey, getValueAndUpdate } = props;

  return (
    <Wrapper>
      <HexColorPicker
        color={color}
        onChange={(returnedColor) => getValueAndUpdate(objKey, returnedColor)}
      />
      <HexColorInput
        color={color}
        onChange={(returnedColor) => getValueAndUpdate(objKey, returnedColor)}
      />
    </Wrapper>
  );
}
