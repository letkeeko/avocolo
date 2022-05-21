import styled from "styled-components";
import { motion } from "framer-motion";
import Heading from "../components/heading";
import Text from "../components/text";
import Image from "next/image";
import { GiBananaPeeled, GiStrawberry, GiWatermelon } from "react-icons/gi";
import { SCREEN, whileInView } from "../components/variables";
import { defaultColor } from "./_static_data";

type WrapperProps = {
  backgroundColor: string;
  iconColor: string;
  textColor: string;
};

const Wrapper = styled.section<WrapperProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  padding: 110px 0 130px 0;

  .description {
    text-align: center;
    max-width: 750px;
    margin: 0 auto 80px auto;
  }

  .item-list {
    display: flex;

    &__each {
      width: 33.33%;
      text-align: center;
      padding: 0 50px;

      svg {
        color: ${({ iconColor }) => iconColor};
        font-size: 5.3rem;
        margin: 0 0 20px 0;
      }
    }
  }
`;

export default function Features() {
  const { container_background_color, container_text_color, icon_color } =
    defaultColor.features;

  return (
    <Wrapper
      backgroundColor={container_background_color}
      textColor={container_text_color}
      iconColor={icon_color}
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

        <ul className="item-list">
          <motion.li className="item-list__each" {...whileInView}>
            <GiBananaPeeled />
            <Text>
              Nulla vitae eros massa. Sed sodales urna eget justo pharetra, nec
              blandit est varius bibendum in varius.
            </Text>
          </motion.li>
          <motion.li className="item-list__each" {...whileInView}>
            <GiStrawberry />
            <Text>
              Aenean sed tellus metus. Aliquam nulla eros, semper non lacus et,
              maximus sollicitudin.
            </Text>
          </motion.li>
          <motion.li className="item-list__each" {...whileInView}>
            <GiWatermelon />
            <Text>
              Phasellus ligula metus, ullamcorper dictum lobortis ut, hendrerit
              ut magna. Sed in convallis nisi aliquam.
            </Text>
          </motion.li>
        </ul>
      </div>
    </Wrapper>
  );
}