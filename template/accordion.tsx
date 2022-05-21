import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Heading from "../components/heading";
import { SCREEN, whileInView } from "../components/variables";
import { defaultColor, accordionList } from "./_static_data";
import { BsFillPlayFill } from "react-icons/bs";

type WrapperProps = {
  backgroundColor: string;
  textColor: string;
  activeTriggerColor: string;
};

const Wrapper = styled.section<WrapperProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 130px 0 130px 0;

  .flex-row {
    display: flex;

    .col {
      color: ${({ textColor }) => textColor};

      &--one {
        width: 55%;
        padding: 0 70px 0 0;
        @media ${SCREEN.desktop} {
          padding: 0 90px 0 0;
        }

        .accordion-list {
          margin: 45px 0 0 0;

          &__each {
            .heading-trigger {
              position: relative;
              cursor: pointer;
              padding: 18px 0 15px 0;
              display: flex;
              align-items: flex-start;

              .icon-arrow {
                svg {
                  font-size: 1.4rem;
                  transition: transform 0.2s ease-in-out;
                }
              }

              .label {
                font-weight: 700;
                font-size: 0.9rem;
                margin: 0 0 0 6px;
                @media ${SCREEN.tablet} {
                  font-size: 1.075rem;
                }
              }

              &::before {
                content: "";
                background-color: ${({ textColor }) => textColor};
                position: absolute;
                height: 1px;
                display: block;
                width: 100%;
                opacity: 0.3;
                top: 0;
              }

              &--active {
                color: ${({ activeTriggerColor }) => activeTriggerColor};

                .icon-arrow {
                  svg {
                    transform: rotate(-30deg);
                  }
                }
              }
            }

            .description {
              margin: 0 0 15px 0;
              padding: 0 0 0 27px;
              p {
                font-weight: 400;
                font-size: 0.9rem;
                padding: 0 0 15px 0;
                @media ${SCREEN.tablet} {
                  font-size: 1.075rem;
                }
              }
            }
          }
        }
      }

      &--two {
        width: 45%;

        img {
          display: block;
          width: 100%;
          border-radius: 6px;
        }
      }
    }
  }
`;

export default function Accordion() {
  const [currentActives, setCurrentActives] = useState<number[]>([0]);

  const {
    container_background_color,
    container_text_color,
    active_trigger_color,
  } = defaultColor.accordion;

  const getClassName = (index: number) => {
    if (currentActives.includes(index))
      return "heading-trigger heading-trigger--active";

    return "heading-trigger";
  };

  const handleClick = (index: number) => {
    if (currentActives.includes(index)) {
      const filtered = currentActives.filter((active) => active !== index);
      setCurrentActives(filtered);
      return;
    }

    setCurrentActives([...currentActives, index]);
  };

  return (
    <Wrapper
      backgroundColor={container_background_color}
      textColor={container_text_color}
      activeTriggerColor={active_trigger_color}
    >
      <div className="inner-wrapper">
        <div className="flex-row">
          <motion.div className="col col--one" {...whileInView}>
            <Heading as="h2">Feugiat vestibulum enim sed nec</Heading>
            <div>
              <ul className="accordion-list">
                {accordionList.map((item, index) => (
                  <li className="accordion-list__each" key={index}>
                    <h4
                      className={getClassName(index)}
                      onClick={() => handleClick(index)}
                      role="button"
                    >
                      <span className="icon-arrow">
                        <BsFillPlayFill />
                      </span>{" "}
                      <span className="label">{item.heading}</span>
                    </h4>
                    {currentActives.includes(index) && (
                      <motion.div
                        className="description"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div className="col col--two" {...whileInView}>
            <img src="https://picsum.photos/900/568" alt="Amazing asset" />
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
}
