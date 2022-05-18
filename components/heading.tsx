import styled from "styled-components";
import { PropTypes } from "./types/heading.types";
import { SCREEN } from "../components/variables";

const Wrapper = styled.div`
  h1 {
    font-size: 1.7rem;
    font-weight: 700;
    @media ${SCREEN.tablet} {
      font-size: 2.8rem;
    }
  }
`;

export default function Button(props: PropTypes) {
  const { children } = props;

  return (
    <Wrapper>
      <h1>{children}</h1>
    </Wrapper>
  );
}
