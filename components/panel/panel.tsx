import { useState } from "react";
import styled from "styled-components";
import { PropTypes } from "../types/panel.types";
import Logo from "../../svg/avocolo-logo.svg";
import Dropdown from "./dropdown";
import Button from "../button";
import { COLOR, SCREEN } from "../variables";
import { VscEdit } from "react-icons/vsc";

const Wrapper = styled.aside`
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 10px 0 20px -6px rgba(58, 58, 98, 0.15);
  position: fixed;
  width: 250px;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${COLOR.green};
  }

  .brand {
    padding: 12px 24px;
    display: flex;
    align-items: center;

    .icon {
      margin: 0 8px 0 0;
    }

    .logo {
      width: 84px;
    }
  }
`;

export default function Panel(props: PropTypes) {
  const [activeDropdown, setActiveDropdown] = useState<string[]>([]);

  const { selections, handleChange } = props;

  const handleDropdownClick = (value: string) => {
    if (activeDropdown.includes(value)) {
      const filtered = activeDropdown.filter((active) => active !== value);
      setActiveDropdown(filtered);
      return;
    }

    setActiveDropdown([...activeDropdown, value]);
  };

  const newVal = {
    navigation: {
      container_background_color: "blue",
      container_text_color: "orange",
      logo_color: "black",
    },
  };

  return (
    <Wrapper>
      <div className="brand">
        <span className="icon">
          <VscEdit />
        </span>
        <span className="logo">
          <Logo />
        </span>
      </div>
      <Dropdown
        label="Navigation"
        handleDropdownClick={handleDropdownClick}
        handleChange={handleChange}
        activeDropdown={activeDropdown}
        selections={selections}
      />
      <Dropdown
        label="Banner"
        handleDropdownClick={handleDropdownClick}
        handleChange={handleChange}
        activeDropdown={activeDropdown}
        selections={selections}
      />
      <Dropdown
        label="Features"
        handleDropdownClick={handleDropdownClick}
        handleChange={handleChange}
        activeDropdown={activeDropdown}
        selections={selections}
      />
      <Dropdown
        label="CTA"
        handleDropdownClick={handleDropdownClick}
        handleChange={handleChange}
        activeDropdown={activeDropdown}
        selections={selections}
      />
      <Dropdown
        label="Slides"
        handleDropdownClick={handleDropdownClick}
        handleChange={handleChange}
        activeDropdown={activeDropdown}
        selections={selections}
      />
      <Dropdown
        label="Accordion"
        handleDropdownClick={handleDropdownClick}
        handleChange={handleChange}
        activeDropdown={activeDropdown}
        selections={selections}
      />
      <Dropdown
        label="Footer"
        handleDropdownClick={handleDropdownClick}
        handleChange={handleChange}
        activeDropdown={activeDropdown}
        selections={selections}
      />
    </Wrapper>
  );
}