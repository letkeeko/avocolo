import styled, { css } from "styled-components";
import { PropTypes } from "./types/button.types";
import Link from "next/link";
import { COLOR, SCREEN } from "./variables";

type WrapperProps = {
  selectedStyles: {
    textColor: string;
    backgroundColor: string;
    isFill: boolean;
    isSpecialBorder?: boolean;
  };
  hoverStyles: any;
};

const specialBorder = css`
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
`;

const Wrapper = styled.div<WrapperProps>`
  button,
  a {
    background-color: ${({ selectedStyles }) =>
      selectedStyles.isFill ? selectedStyles.backgroundColor : "transparent"};
    color: ${({ selectedStyles }) => selectedStyles.textColor};
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
    border-style: solid;
    border-width: ${({ selectedStyles }) =>
      selectedStyles.isSpecialBorder ? "1px" : "2px"};
    border-color: ${({ selectedStyles }) => selectedStyles.backgroundColor};
    transition: all 0.2s ease-in-out;
    @media ${SCREEN.tablet} {
      font-size: 1.05rem;
      padding: 5px 36px;
    }
    @media ${SCREEN.cursor} {
      &:hover {
        ${({ hoverStyles }) => hoverStyles}
      }
    }

    ${({ selectedStyles }) => selectedStyles.isSpecialBorder && specialBorder};
  }
`;

export default function Button(props: PropTypes) {
  const { children, href, customStyles } = props;

  // avocolo's theme brand
  const defaultStyles = {
    textColor: COLOR.white,
    backgroundColor: COLOR.green,
    isFill: true,
    isSpecialBorder: true,
  };

  const selectedStyles = customStyles || defaultStyles;

  const getHoverStyles = () => {
    // for filled button
    if (!!customStyles) {
      if (customStyles.isFill === true) {
        return css`
          background-color: transparent;
          color: ${customStyles.backgroundColor};
        `;
      }

      // for stroked button
      if (customStyles.isFill === false) {
        return css`
          background-color: ${customStyles.backgroundColor};
          color: ${customStyles.containerColor};
        `;
      }
    }

    // default to avocolo's green
    return css`
      background-color: ${COLOR.white};
      color: ${COLOR.green};
    `;
  };

  return (
    <Wrapper selectedStyles={selectedStyles} hoverStyles={getHoverStyles()}>
      {!!href ? (
        <Link href={href}>{children}</Link>
      ) : (
        <button>{children}</button>
      )}
    </Wrapper>
  );
}
