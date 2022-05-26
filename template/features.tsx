import styled from "styled-components";
import { PropTypes } from "../components/{types}/template.types";
import { motion } from "framer-motion";
import Heading from "../components/heading";
import Text from "../components/text";
import { GiBananaPeeled, GiStrawberry, GiWatermelon } from "react-icons/gi";
import { SCREEN, whileInView } from "../components/variables";

type WrapperProps = {
  backgroundColor: string;
  iconColor: string;
  textColor: string;
};

const Wrapper = styled.section<WrapperProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  padding: 55px 0 20px 0;
  @media ${SCREEN.tablet} {
    padding: 110px 0 90px 0;
  }
  @media ${SCREEN.laptop} {
    padding: 110px 0 130px 0;
  }

  .description {
    text-align: center;
    max-width: 750px;
    margin: 0 auto 40px auto;
    @media ${SCREEN.tablet} {
      margin: 0 auto 80px auto;
    }
  }

  .item-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &__each {
      width: 100%;
      text-align: center;
      padding: 0 24px 48px 24px;
      @media ${SCREEN.tablet} {
        width: 50%;
        padding: 0 50px 50px 50px;
      }

      @media ${SCREEN.laptop} {
        width: 33.33%;
        padding: 0 50px;
      }

      svg {
        color: ${({ iconColor }) => iconColor};
        font-size: 4.3rem;
        margin: 0 0 14px 0;
        @media ${SCREEN.tablet} {
          font-size: 5.3rem;
          margin: 0 0 20px 0;
        }
      }
    }
  }
`;

export default function Features(props: PropTypes) {
  const { container_background_color, container_text_color, icon_color } =
    props.selections;

  return (
    <Wrapper
      backgroundColor={container_background_color}
      textColor={container_text_color}
      iconColor={icon_color}
      id="features"
    >
      <div className="inner-wrapper">
        <motion.div className="description" {...whileInView}>
          <Heading className="mb" as="h2">
            Wafer tiramisu macaroon biscuit
          </Heading>
          <Text>
            Gummies gummi bears jelly-o jelly-o lollipop pudding bear claw
            tiramisu candy. Apple pie cake pastry marshmallow bonbon. Chocolate
            cake candy canes wafer tiramisu.
          </Text>
        </motion.div>

        <ul className="item-list">
          <motion.li className="item-list__each" {...whileInView}>
            <GiBananaPeeled />
            <Text>
              Cake bonbon donut chocolate bar croissant cheesecake. Marzipan
              soufflé sesame snaps carrot.
            </Text>
          </motion.li>
          <motion.li className="item-list__each" {...whileInView}>
            <GiStrawberry />
            <Text>
              Topping croissant powder sweet roll liquorice gummies apple pie
              bonbon marzipan. Jelly gummies.
            </Text>
          </motion.li>
          <motion.li className="item-list__each" {...whileInView}>
            <GiWatermelon />
            <Text>
              Cotton candy tart powder cupcake gingerbread. Topping croissant
              halvah cake candy carrot sweet roll oat.
            </Text>
          </motion.li>
        </ul>
      </div>
    </Wrapper>
  );
}
