import styled from "styled-components";
import { PropTypes } from "../components/types/template.types";
import { motion } from "framer-motion";
import Heading from "../components/heading";
import Text from "../components/text";
import Button from "../components/button";
import { SCREEN, whileInView } from "../components/variables";

type WrapperProps = {
  backgroundColor: string;
  textColor: string;
};

const Wrapper = styled.header<WrapperProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 110px 0 80px 0;
  @media ${SCREEN.tablet} {
    padding: 160px 0 130px 0;
  }
  @media ${SCREEN.laptop} {
    padding: 240px 0 160px 0;
  }

  .flex-row {
    display: flex;
    flex-direction: column;
    @media ${SCREEN.laptop} {
      flex-direction: row;
    }

    .col {
      color: ${({ textColor }) => textColor};

      &--one {
        @media ${SCREEN.laptop} {
          width: 55%;
          padding: 0 70px 0 0;
        }
        @media ${SCREEN.desktop} {
          padding: 0 90px 0 0;
        }
      }

      &--two {
        margin: 0 0 20px 0;
        order: -1;
        @media ${SCREEN.tablet} {
          margin: 0 0 40px 0;
        }
        @media ${SCREEN.laptop} {
          order: 0;
          margin: 0;
          width: 45%;
        }

        img {
          display: block;
          width: 100%;
          border-radius: 6px;
        }
      }
    }
  }
`;

export default function Banner(props: PropTypes) {
  const {
    container_background_color,
    container_text_color,
    button_background_color,
    button_text_color,
    button_is_fill,
  } = props.selections;

  return (
    <Wrapper
      backgroundColor={container_background_color}
      textColor={container_text_color}
    >
      <div className="inner-wrapper">
        <div className="flex-row">
          <motion.div className="col col--one" {...whileInView}>
            <Heading as="h1" className="mb">
              Lorem ipsum dolor sit amet
            </Heading>
            <Text className="mb-med">
              Maecenas fermentum imperdiet velit, sed condimentum justo gravida
              eget. Sed in convallis nisi, ac bibendum neque. In varius, mauris
              quis ultricies dictum, leo sem varius quam, et pellentesque.
            </Text>
            <Button
              customStyles={{
                backgroundColor: button_background_color,
                textColor: button_text_color,
                isFill: button_is_fill,
                containerColor: container_background_color,
              }}
            >
              LEARN MORE
            </Button>
          </motion.div>
          <motion.div className="col col--two" {...whileInView}>
            <img src="https://picsum.photos/900/568" alt="Amazing asset" />
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
}
