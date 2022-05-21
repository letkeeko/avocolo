import styled from "styled-components";
import { PropTypes } from "./types/heading.types";
import { SCREEN } from "../components/variables";

const Wrapper = styled.div`
  h1 {
    font-size: 1.7rem;
    font-weight: 700;
    @media ${SCREEN.tablet} {
      font-size: 2.5rem;
    }
    @media ${SCREEN.desktop} {
      font-size: 2.8rem;
    }
  }

  h2 {
    font-size: 1.45rem;
    font-weight: 700;
    @media ${SCREEN.tablet} {
      font-size: 2rem;
    }
    @media ${SCREEN.desktop} {
      font-size: 2.2rem;
    }
  }
`;

export default function Button(props: PropTypes) {
  const { children, className, as } = props;

  return (
    <Wrapper className={className}>
      {as === "h1" && <h1>{children}</h1>}

      {as === "h2" && <h2>{children}</h2>}
    </Wrapper>
  );
}
