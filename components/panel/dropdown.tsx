import styled from "styled-components";
import { PropTypes } from "../types/dropdown.types";
import Button from "../button";
import {
  VscRefresh,
  VscChevronRight,
  VscCheck,
  VscChromeMinimize,
} from "react-icons/vsc";

import { SCREEN } from "../variables";

const Wrapper = styled.div`
  .heading-trigger {
    padding: 12px 24px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-top: 1px solid #e8e8e8;

    &--active {
      background-color: #e8e8e8;

      .icon {
        transform: rotate(90deg);
        margin: 0 8px -2px 0;
      }
    }
  }

  .label {
    font-size: 1.05rem;
  }

  .icon {
    margin: 0 8px -4px 0;
  }

  .color {
    background: blue;
    min-width: 12px;
    min-height: 12px;
    display: inline-block;
    margin: 0 6px 0 0;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.175);
  }

  .list-option {
  }

  .option {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 9px 24px;

    &--nested {
      padding: 9px 36px;
    }

    &--trigger {
    }

    &--active {
      background-color: #f4f4f4;
    }
  }
`;

export default function Dropdown(props: PropTypes) {
  const {
    label,
    selections,
    handleDropdownClick,
    handleChange,
    activeDropdown,
  } = props;

  const objKey = label.toLowerCase();

  const selection = selections[objKey] || {};

  const getValueAndUpdate = (key: string, val: string) => {
    console.log(objKey);
    console.log(key, val);
  };

  const isDropdownOpen = activeDropdown.includes(objKey);

  const isNestedDropdown = activeDropdown.includes(objKey + "-nested");

  const getActiveClassName = () => {
    if (isDropdownOpen) return "heading-trigger heading-trigger--active";

    return "heading-trigger";
  };

  const getActiveNestedClassName = () => {
    if (isNestedDropdown) {
      return "option option--nested option--trigger option--active";
    }

    return "option option--nested option--trigger";
  };

  return (
    <Wrapper>
      <div
        className={getActiveClassName()}
        onClick={() => handleDropdownClick(objKey)}
      >
        <span className="icon">
          <VscChevronRight />
        </span>
        <span className="label">{label}</span>
      </div>
      {isDropdownOpen && (
        <div className="list-option">
          {!!selection["featured_image"] && (
            <div className="option">
              <span className="icon">
                <VscRefresh />
              </span>
              <span className="label">Image</span>
            </div>
          )}

          {!!selection["container_background_color"] && (
            <div
              className="option"
              onClick={() =>
                getValueAndUpdate("container_background_color", "gold")
              }
            >
              <span
                className="color"
                style={{
                  backgroundColor: selection["container_background_color"],
                }}
              ></span>
              <span className="label">Background</span>
            </div>
          )}

          {!!selection["container_text_color"] && (
            <div className="option">
              <span
                className="color"
                style={{
                  backgroundColor: selection["container_text_color"],
                }}
              ></span>
              <span className="label">Text</span>
            </div>
          )}

          {!!selection["logo_color"] && (
            <div className="option">
              <span className="color"></span>
              <span className="label">Logo</span>
            </div>
          )}

          {!!selection["dots_color"] && (
            <>
              <div
                className={getActiveNestedClassName()}
                onClick={() => handleDropdownClick(objKey + "-nested")}
              >
                <span className="icon">
                  <VscChevronRight />
                </span>
                <span className="label">Dots</span>
              </div>
              {isNestedDropdown && (
                <>
                  <div className="option option--nested">
                    <span className="color"></span>
                    <span className="label">Inactive</span>
                  </div>
                  <div className="option option--nested">
                    <span className="color"></span>
                    <span className="label">Active</span>
                  </div>
                </>
              )}
            </>
          )}

          {!!selection["button_background_color"] && (
            <>
              <div
                className={getActiveNestedClassName()}
                onClick={() => handleDropdownClick(objKey + "-nested")}
              >
                <span className="icon">
                  <VscChevronRight />
                </span>
                <span className="label">Button</span>
              </div>
              {isNestedDropdown && (
                <>
                  <div className="option option--nested">
                    <span className="color"></span>
                    <span className="label">Background</span>
                  </div>
                  <div className="option option--nested">
                    <span className="color"></span>
                    <span className="label">Text</span>
                  </div>
                  <div className="option option--nested">
                    <span className="icon">
                      <VscCheck />
                    </span>
                    <span className="label">Fill</span>
                  </div>
                </>
              )}
            </>
          )}

          {!!selection["icon_color"] && (
            <div className="option">
              <span className="color"></span>
              <span className="label">Icon</span>
            </div>
          )}

          {!!selection["active_trigger_color"] && (
            <div className="option">
              <span className="color"></span>
              <span className="label">Trigger</span>
            </div>
          )}
        </div>
      )}
    </Wrapper>
  );
}
