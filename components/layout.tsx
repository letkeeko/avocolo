import styled from "styled-components";
import { PropTypes } from "./{types}/layout.types";
import { FONT, COLOR } from "./variables";

const Wrapper = styled.div`
  background-color: ${COLOR.white};
  color: ${COLOR.black};
  font-family: ${FONT.primary};
`;

export default function Layout(props: PropTypes) {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
}
