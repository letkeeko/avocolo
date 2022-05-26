import styled from "styled-components";
import { PropTypes } from "./{types}/blank-overlay.types";

type WrapperProps = {
  backgroundColor?: string;
};

const Wrapper = styled.div<WrapperProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

// mainly use for closing element by clicking anywhere
export default function BlankOverlay(props: PropTypes) {
  const { triggerFunction, paramValue, backgroundColor } = props;

  return (
    <Wrapper
      id="blank-overlay"
      role="presentation"
      onClick={() => triggerFunction(paramValue)}
      backgroundColor={backgroundColor}
    ></Wrapper>
  );
}
