import styled from "styled-components";
import { PropTypes } from "./types/text.types";
import { SCREEN } from "../components/variables";
const Wrapper = styled.p`
  font-weight: 400;
  font-size: 0.9rem;
  @media ${SCREEN.tablet} {
    font-size: 1.075rem;
  }
`;

export default function Button(props: PropTypes) {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
}
