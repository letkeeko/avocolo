import styled from "styled-components";
import { PropTypes } from "./types/button.types";
import Link from "next/link";
import { COLOR, SCREEN } from "./variables";

const Wrapper = styled.div`
  button,
  a {
    background-color: ${COLOR.green};
    color: ${COLOR.white};
    font-weight: 500;
    font-size: 0.925rem;
    line-height: 30px;
    padding: 3px 32px;
    display: inline-block;
    letter-spacing: 1px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    border: 1px ${COLOR.green} solid;
    @media ${SCREEN.tablet} {
      font-size: 1.05rem;
      padding: 5px 36px;
    }
    @media ${SCREEN.cursor} {
      &:hover {
        background-color: ${COLOR.white};
        color: ${COLOR.green};
      }
    }

    &::after {
      content: "";
      border: 1px ${COLOR.green} solid;
      position: absolute;
      left: -6px;
      top: -6px;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border-radius: 5px;
      transition: transform 0.2s ease-in-out;
      @media ${SCREEN.tablet} {
        width: calc(100% + 12px);
        height: calc(100% + 12px);
        left: -7px;
        top: -7px;
      }
    }
  }
`;

export default function Button(props: PropTypes) {
  const { children, href } = props;

  return (
    <Wrapper>
      {!!href ? (
        <Link href={href}>{children}</Link>
      ) : (
        <button>{children}</button>
      )}
    </Wrapper>
  );
}
