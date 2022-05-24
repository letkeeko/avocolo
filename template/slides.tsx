import { useState } from "react";
import styled from "styled-components";
import { PropTypes } from "../components/types/template.types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Heading from "../components/heading";
import Text from "../components/text";
import { SCREEN, whileInView } from "../components/variables";
import { slideList } from "./_static_data";

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
  padding: 70px 0 70px 0;
  @media ${SCREEN.tablet} {
    padding: 110px 0 110px 0;
  }
  @media ${SCREEN.laptop} {
    padding: 130px 0 130px 0;
  }

  .description {
    text-align: center;
    max-width: 750px;
    margin: 0 auto 40px auto;
    @media ${SCREEN.tablet} {
      margin: 0 auto 60px auto;
    }
    @media ${SCREEN.laptop} {
      margin: 0 auto 80px auto;
    }
  }

  .slide-list {
    min-height: 356px;
    position: relative;
    @media ${SCREEN.tablet} {
      min-height: 300px;
    }
    @media ${SCREEN.laptop} {
      min-height: 250px;
    }

    &__each {
      position: absolute;
      top: 0;
      left: 0;
      @media ${SCREEN.tablet} {
        left: 50%;
        transform: translateX(-50%);
      }

      .flex-row {
        @media ${SCREEN.tablet} {
          display: flex;
          justify-content: center;
        }

        .col {
          &--one {
            border-radius: 50%;
            overflow: hidden;
            display: block;
            width: 100px;
            height: 100px;
            margin: 0 auto 20px auto;
            @media ${SCREEN.tablet} {
              margin: 0;
            }
            @media ${SCREEN.laptop} {
              width: 120px;
              height: 120px;
            }
          }

          &--two {
            position: relative;
            @media ${SCREEN.tablet} {
              width: max-content;
              max-width: 430px;
              padding: 0 0 0 20px;
            }
            @media ${SCREEN.laptop} {
              max-width: 640px;
              padding: 0 0 0 50px;
            }

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

export default function Slides(props: PropTypes) {
  const [currentActive, setCurrentActive] = useState(0);

  const {
    featured_image,
    container_background_color,
    container_text_color,
    dots_color,
    active_dot_color,
    quote_color,
  } = props.selections;

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
      id="slides"
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
                      <Image
                        src={featured_image}
                        alt="Amazing portrait"
                        width={300}
                        height={300}
                        placeholder="blur"
                        blurDataURL={featured_image}
                      />
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
