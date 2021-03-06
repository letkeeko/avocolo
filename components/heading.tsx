import styled from "styled-components";
import { PropTypes } from "./{types}/heading.types";
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

  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1.5;
    @media ${SCREEN.tablet} {
      font-size: 1.4rem;
    }
    @media ${SCREEN.desktop} {
      font-size: 1.5rem;
    }
  }
`;

export default function Button(props: PropTypes) {
  const { children, className, as } = props;

  return (
    <Wrapper className={className}>
      {as === "h1" && <h1>{children}</h1>}

      {as === "h2" && <h2>{children}</h2>}

      {as === "h3" && <h3>{children}</h3>}
    </Wrapper>
  );
}
