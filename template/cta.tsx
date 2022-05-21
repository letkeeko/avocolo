import styled from "styled-components";
import { motion } from "framer-motion";
import Heading from "../components/heading";
import Text from "../components/text";
import Button from "../components/button";
import Image from "next/image";
import { SCREEN, whileInView } from "../components/variables";
import { defaultColor } from "./_static_data";

type WrapperProps = {
  backgroundColor: string;
  textColor: string;
};

const Wrapper = styled.section<WrapperProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 130px 0 130px 0;

  .flex-row {
    display: flex;

    .col {
      color: ${({ textColor }) => textColor};

      &--one {
        width: 45%;
        padding: 0 70px 0 0;
        @media ${SCREEN.desktop} {
          padding: 0 90px 0 0;
        }

        img {
          display: block;
          width: 100%;
          border-radius: 6px;
        }
      }

      &--two {
        width: 55%;

        ul {
          padding: 0 0 0 40px;
          li {
            list-style-type: disc;
          }
        }
      }
    }
  }
`;

export default function Cta() {
  const { background_color, text_color } = defaultColor.cta;

  return (
    <Wrapper backgroundColor={background_color} textColor={text_color}>
      <div className="inner-wrapper">
        <div className="flex-row">
          <motion.div className="col col--one" {...whileInView}>
            <img src="https://picsum.photos/900/568" alt="Amazing asset" />
          </motion.div>
          <motion.div className="col col--two" whileInView>
            <Heading as="h2" className="mb">
              Donec quis porttitor libero, ut placerat sapien
            </Heading>
            <Text className="mb">
              Maecenas fermentum imperdiet velit, sed condimentum justo gravida
              eget. Sed in convallis nisi, ac bibendum neque. In varius, mauris
              quis ultricies dictum, leo sem varius quam, et pellentesque.
            </Text>
            <ul className="mb-lg">
              <li className="mb">
                <Text>
                  Cras vulputate nisl sit amet mi aliquet, a venenatis sem
                  pellentesque. Proin tincidunt suscipit en
                </Text>
              </li>
              <li className="mb">
                <Text>
                  Cras vulputate nisl sit amet mi aliquet, a venenatis sem
                  pellentesque. Proin tincidunt suscipit en
                </Text>
              </li>
              <li className="mb">
                <Text>
                  Cras vulputate nisl sit amet mi aliquet, a venenatis sem
                  pellentesque. Proin tincidunt suscipit en
                </Text>
              </li>
            </ul>
            <Button
              customStyles={{
                textColor: "green",
                backgroundColor: "white",
                isFill: false,
                containerColor: background_color,
              }}
            >
              GET IN TOUCH
            </Button>
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
}
