import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { PropTypes } from "../types/panel.types";
import Logo from "../../svg/avocolo-logo.svg";
import Dropdown from "./dropdown";
import { COLOR } from "../variables";
import { VscEdit, VscSave, VscArrowLeft, VscRedo } from "react-icons/vsc";

const Wrapper = styled(motion.aside)`
  box-shadow: 10px 0 20px -6px rgba(58, 58, 98, 0.15);
  position: fixed;
  width: 250px;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  overflow: auto;
  display: flex;
  flex-direction: column;

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
    cursor: pointer;

    .icon {
      margin: 0 8px 0 0;
    }

    .logo {
      width: 84px;
    }
  }

  .other-action {
    margin: auto 0 0 0;

    .btn {
      padding: 12px 24px;
      display: flex;
      align-items: center;
      border-top: 1px solid #e8e8e8;
      cursor: pointer;

      .icon {
        margin: 0 8px -4px 0;
      }
    }
  }
`;

type SidebarToggleProps = {
  isSidebarOpen: boolean;
};

const SidebarToggle = styled.div<SidebarToggleProps>`
  background-color: ${COLOR.white};
  position: fixed;
  bottom: 18px;
  left: 16px;
  z-index: 110;
  width: 154px;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 2px 15px -2px rgba(82, 74, 78, 0.4);

  .flex-row {
    display: flex;
    align-items: center;

    svg {
      font-size: 1rem;
      margin: 0 8px 0 0;
    }

    .logo {
      width: 84px;
    }
  }
`;

// framer motion variants props
const animateContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.06,
    },
  },
};

const animateItem = {
  hidden: { opacity: 0, x: 35 },
  show: { opacity: 1, x: 0 },
};

export default function Panel(props: PropTypes) {
  const [activeDropdown, setActiveDropdown] = useState<string[]>([]);

  const {
    selections,
    handleChange,
    toggleSidebar,
    isSidebarOpen,
    handleReset,
  } = props;

  const handleDropdownClick = (value: string) => {
    if (activeDropdown.includes(value)) {
      // user toggle - remove if already in there
      const filtered = activeDropdown.filter((active) => active !== value);

      setActiveDropdown(filtered);

      return;
    }

    // only accept multiple array value if with nested dropdown
    if (value.includes("-nested")) {
      setActiveDropdown([...activeDropdown, value]);

      return;
    }

    setActiveDropdown([value]);
  };

  return (
    <>
      {isSidebarOpen && (
        <Wrapper variants={animateContainer} initial="hidden" animate="show">
          <div>
            <motion.div
              className="brand"
              variants={animateItem}
              onClick={toggleSidebar}
            >
              <span className="icon">
                <VscArrowLeft />
              </span>
              <span className="logo">
                <Logo />
              </span>
            </motion.div>
            <Dropdown
              label="Navigation"
              handleDropdownClick={handleDropdownClick}
              handleChange={handleChange}
              activeDropdown={activeDropdown}
              selections={selections}
              variants={animateItem}
            />
            <Dropdown
              label="Banner"
              handleDropdownClick={handleDropdownClick}
              handleChange={handleChange}
              activeDropdown={activeDropdown}
              selections={selections}
              variants={animateItem}
            />
            <Dropdown
              label="Features"
              handleDropdownClick={handleDropdownClick}
              handleChange={handleChange}
              activeDropdown={activeDropdown}
              selections={selections}
              variants={animateItem}
            />
            <Dropdown
              label="CTA"
              handleDropdownClick={handleDropdownClick}
              handleChange={handleChange}
              activeDropdown={activeDropdown}
              selections={selections}
              variants={animateItem}
            />
            <Dropdown
              label="Slides"
              handleDropdownClick={handleDropdownClick}
              handleChange={handleChange}
              activeDropdown={activeDropdown}
              selections={selections}
              variants={animateItem}
            />
            <Dropdown
              label="Accordion"
              handleDropdownClick={handleDropdownClick}
              handleChange={handleChange}
              activeDropdown={activeDropdown}
              selections={selections}
              variants={animateItem}
            />
            <Dropdown
              label="Footer"
              handleDropdownClick={handleDropdownClick}
              handleChange={handleChange}
              activeDropdown={activeDropdown}
              selections={selections}
              variants={animateItem}
            />
          </div>
          <div className="other-action">
            <div className="btn">
              <span className="icon">
                <VscSave />
              </span>
              <span className="label">Save and share</span>
            </div>
            <div className="btn" onClick={handleReset}>
              <span className="icon">
                <VscRedo />
              </span>
              <span className="label">Reset</span>
            </div>
          </div>
        </Wrapper>
      )}

      {!isSidebarOpen && (
        <SidebarToggle isSidebarOpen={isSidebarOpen} onClick={toggleSidebar}>
          <div className="flex-row">
            <VscEdit />
            <span className="logo">
              <Logo />
            </span>
          </div>
        </SidebarToggle>
      )}
    </>
  );
}
