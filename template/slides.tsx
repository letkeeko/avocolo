import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Heading from "../components/heading";
import Text from "../components/text";
import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";
import { SCREEN, whileInView } from "../components/variables";
import { defaultColor, slideList } from "./_static_data";

type WrapperProps = {
  backgroundColor: string;
  textColor: string;
  dotsColor: string;
  activeDotColor: string;
  quoteColor: string;
};

const Wrapper = styled.section<WrapperProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  padding: 130px 0 130px 0;

  .description {
    text-align: center;
    max-width: 750px;
    margin: 0 auto 80px auto;
  }

  .slide-list {
    min-height: 250px;
    position: relative;

    &__each {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);

      .flex-row {
        display: flex;
        justify-content: center;

        .col {
          &--one {
            img {
              display: block;
              width: 120px;
              border-radius: 50%;
            }
          }

          &--two {
            max-width: 640px;
            width: max-content;
            padding: 0 0 0 70px;
            position: relative;

            .subdescription {
              p {
                font-weight: 400;
                font-size: 0.825rem;
                margin: 0 0 15px 0;
                @media ${SCREEN.tablet} {
                  font-size: 0.975rem;
                }
              }
            }

            .icon-quote {
              color: ${({ quoteColor }) => quoteColor};
              font-size: 2.4rem;
              position: absolute;
              top: -20px;
              left: 20px;
            }
          }
        }
      }
    }
  }

  .dots {
    display: flex;
    justify-content: center;

    &__each {
      all: unset;
      cursor: pointer;
      width: 12px;
      height: 12px;
      display: block;
      background-color: ${({ dotsColor }) => dotsColor};
      border-radius: 50%;
      margin: 0 10px;

      &--active {
        background-color: ${({ activeDotColor }) => activeDotColor};
      }
    }
  }
`;

// framer motion variants props
const animateContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const animateItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Slides() {
  const [currentActive, setCurrentActive] = useState(0);

  const {
    container_background_color,
    container_text_color,
    dots_color,
    active_dot_color,
    quote_color,
  } = defaultColor.slides;

  const getClassName = (index: number) => {
    if (index === currentActive) return "dots__each dots__each--active";

    return "dots__each";
  };

  return (
    <Wrapper
      backgroundColor={container_background_color}
      textColor={container_text_color}
      dotsColor={dots_color}
      activeDotColor={active_dot_color}
      quoteColor={quote_color}
    >
      <div className="inner-wrapper">
        <motion.div className="description" {...whileInView}>
          <Heading className="mb" as="h2">
            Lorem ipsum dolor sit amet
          </Heading>
          <Text>
            Maecenas fermentum imperdiet velit, sed condimentum justo gravida
            eget. Sed in convallis nisi, ac bibendum neque. In varius, mauris
            quis ultricies dictum, leo sem varius quam.
          </Text>
        </motion.div>

        <motion.div className="slide-list" {...whileInView}>
          {slideList.map((item, index) => (
            <AnimatePresence key={index}>
              {currentActive === index && (
                <div className="slide-list__each">
                  <motion.div
                    className="flex-row"
                    variants={animateContainer}
                    initial="hidden"
                    animate="show"
                  >
                    <motion.div className="col col--one" variants={animateItem}>
                      <img src={item.image} alt="Amazing portrait" />
                    </motion.div>
                    <div className="col col--two">
                      <motion.div
                        className="subdescription"
                        variants={animateItem}
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                      <motion.div variants={animateItem}>
                        <strong>{item.name}</strong> / {item.company}
                      </motion.div>
                      <div className="icon-quote" aria-hidden="true">
                        <RiDoubleQuotesL />
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          ))}
        </motion.div>

        <div className="dots">
          {slideList.map((_, index) => (
            <button
              className={getClassName(index)}
              key={index}
              onClick={() => setCurrentActive(index)}
            ></button>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
