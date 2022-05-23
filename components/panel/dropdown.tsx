import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { PropTypes } from "../types/dropdown.types";
import Button from "../button";
import BlankOverlay from "./blank-overlay";
import {
  VscRefresh,
  VscChevronRight,
  VscCheck,
  VscChromeMinimize,
} from "react-icons/vsc";
import { COLOR, SCREEN } from "../variables";

const Wrapper = styled(motion.div)`
  .heading-trigger {
    padding: 12px 24px;
    display: flex;
    align-items: center;
    border-top: 1px solid #e8e8e8;

    a {
      color: ${COLOR.black};
    }

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
    cursor: pointer;
  }

  .icon {
    margin: 0 8px -4px 0;
  }

  .color {
    min-width: 12px;
    min-height: 12px;
    display: inline-block;
    margin: 0 6px 0 0;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }

  .list-option {
    padding: 4px 0;
  }

  .option {
    display: flex;
    align-items: center;
    padding: 9px 24px;
    position: relative;

    &--nested {
      padding: 9px 36px;
    }

    &--trigger {
    }

    &--active {
      background-color: #f4f4f4;

      .icon {
        transform: rotate(90deg);
        margin: 0 8px -2px 0;
      }
    }

    .absolute-color-picker {
      background-color: ${COLOR.white};
      position: absolute;
      top: 37px;
      z-index: 10;
      border-radius: 6px;

      input {
        width: 100%;
        margin: 10px 0 0 0;
        padding: 5px;
      }
    }
  }
`;

export default function Dropdown(props: PropTypes) {
  const [activeColorPicker, setActiveColorPicker] = useState("");

  const {
    label,
    selections,
    handleDropdownClick,
    handleChange,
    activeDropdown,
    variants,
  } = props;

  const objKey = label.toLowerCase();

  const selection = selections[objKey] || {};

  const getValueAndUpdate = (key: string, val: string | boolean) => {
    // modify current object
    selections[objKey] = { ...selection, [key]: val };

    handleChange({ ...selections, selection });
  };

  const isDropdownOpen = activeDropdown.includes(objKey);

  const isNestedDropdown = activeDropdown.includes(objKey + "-nested");

  // *** color handler
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

  const handleActiveColorPicker = (val: string) => {
    if (activeColorPicker === val) {
      setActiveColorPicker("");

      return;
    }

    setActiveColorPicker(val);
  };

  const isColorPicker = (val: string) => {
    return activeColorPicker === val;
  };

  const renderColorPicker = (key: string) => {
    if (isColorPicker(key))
      return (
        <div className="absolute-color-picker">
          <HexColorPicker
            color={selection[key]}
            onChange={(e) => {
              getValueAndUpdate(key, e);
            }}
          />
          <HexColorInput
            color={selection[key]}
            onChange={(e) => {
              getValueAndUpdate(key, e);
            }}
          />
        </div>
      );

    return null;
  };
  // end color handler

  // *** button fill handler

  // end button fill handler

  return (
    <Wrapper variants={variants}>
      <div className={getActiveClassName()}>
        <span className="icon">
          <VscChevronRight />
        </span>
        <a
          className="label"
          href={"#" + objKey}
          onClick={() => handleDropdownClick(objKey)}
        >
          {label}
        </a>
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
            <div className="option">
              {renderColorPicker("container_background_color")}

              <span
                className="color"
                style={{
                  backgroundColor: selection["container_background_color"],
                }}
              ></span>

              <span
                className="label"
                onClick={() =>
                  handleActiveColorPicker("container_background_color")
                }
              >
                Background
              </span>
            </div>
          )}

          {!!selection["container_text_color"] && (
            <div className="option">
              {renderColorPicker("container_text_color")}

              <span
                className="color"
                style={{
                  backgroundColor: selection["container_text_color"],
                }}
              ></span>
              <span
                className="label"
                onClick={() => handleActiveColorPicker("container_text_color")}
              >
                Text
              </span>
            </div>
          )}

          {!!selection["logo_color"] && (
            <div className="option">
              {renderColorPicker("logo_color")}

              <span
                className="color"
                style={{
                  backgroundColor: selection["logo_color"],
                }}
              ></span>
              <span
                className="label"
                onClick={() => handleActiveColorPicker("logo_color")}
              >
                Logo
              </span>
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
                    {renderColorPicker("dots_color")}

                    <span
                      className="color"
                      style={{
                        backgroundColor: selection["dots_color"],
                      }}
                    ></span>
                    <span
                      className="label"
                      onClick={() => handleActiveColorPicker("dots_color")}
                    >
                      Inactive
                    </span>
                  </div>
                  <div className="option option--nested">
                    {renderColorPicker("active_dot_color")}

                    <span className="color"></span>
                    <span
                      className="label"
                      onClick={() =>
                        handleActiveColorPicker("active_dot_color")
                      }
                    >
                      Active
                    </span>
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
                    {renderColorPicker("button_background_color")}

                    <span
                      className="color"
                      style={{
                        backgroundColor: selection["button_background_color"],
                      }}
                    ></span>
                    <span
                      className="label"
                      onClick={() =>
                        handleActiveColorPicker("button_background_color")
                      }
                    >
                      Background
                    </span>
                  </div>
                  <div className="option option--nested">
                    {renderColorPicker("button_text_color")}

                    <span
                      className="color"
                      style={{
                        backgroundColor: selection["button_text_color"],
                      }}
                    ></span>
                    <span
                      className="label"
                      onClick={() =>
                        handleActiveColorPicker("button_text_color")
                      }
                    >
                      Text
                    </span>
                  </div>
                  <div className="option option--nested">
                    <span className="icon">
                      {selection["button_is_fill"] ? (
                        <VscCheck />
                      ) : (
                        <VscChromeMinimize />
                      )}
                    </span>
                    <span
                      className="label"
                      onClick={() =>
                        getValueAndUpdate(
                          "button_is_fill",
                          !selection["button_is_fill"]
                        )
                      }
                    >
                      Fill
                    </span>
                  </div>
                </>
              )}
            </>
          )}

          {!!selection["icon_color"] && (
            <div className="option">
              {renderColorPicker("icon_color")}

              <span
                className="color"
                style={{
                  backgroundColor: selection["icon_color"],
                }}
              ></span>
              <span
                className="label"
                onClick={() => handleActiveColorPicker("icon_color")}
              >
                Icon
              </span>
            </div>
          )}

          {!!selection["active_trigger_color"] && (
            <div className="option">
              {renderColorPicker("active_trigger_color")}

              <span
                className="color"
                style={{
                  backgroundColor: selection["active_trigger_color"],
                }}
              ></span>
              <span
                className="label"
                onClick={() => handleActiveColorPicker("active_trigger_color")}
              >
                Trigger
              </span>
            </div>
          )}
        </div>
      )}
      {!!activeColorPicker && (
        <BlankOverlay setActiveColorPicker={setActiveColorPicker} />
      )}
    </Wrapper>
  );
}
