import { useState } from "react";
import styled from "styled-components";
import { PropTypes } from "../types/panel.types";
import Logo from "../../svg/avocolo-logo.svg";
import Dropdown from "./dropdown";
import Button from "../button";
import { COLOR, SCREEN } from "../variables";
import { VscEdit } from "react-icons/vsc";

const Wrapper = styled.aside`
  background-color: rgba(255, 255, 255, 0);
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  z-index: 1;
`;

export default function BlankOverlay(props: {
  setActiveColorPicker: (val: string) => void;
}) {
  const { setActiveColorPicker } = props;

  return (
    <Wrapper
      id="blank-overlay"
      onClick={() => setActiveColorPicker("")}
    ></Wrapper>
  );
}
