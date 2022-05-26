import styled from "styled-components";
import { PropTypes } from "../components/{types}/template.types";
import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "../components/heading";
import Text from "../components/text";
import Button from "../components/button";
import { SCREEN, whileInView } from "../components/variables";

type WrapperProps = {
  backgroundColor: string;
  textColor: string;
};

const Wrapper = styled.section<WrapperProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 55px 0;
  @media ${SCREEN.tablet} {
    padding: 110px 0;
  }
  @media ${SCREEN.laptop} {
    padding: 130px 0 130px 0;
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
          width: 45%;
          padding: 0 70px 0 0;
        }
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
        margin: 20px 0 0 0;
        @media ${SCREEN.tablet} {
          margin: 40px 0 0 0;
        }
        @media ${SCREEN.laptop} {
          margin: 0;
          width: 55%;
        }

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

export default function Cta(props: PropTypes) {
  const {
    featured_image,
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
      id="cta"
    >
      <div className="inner-wrapper">
        <div className="flex-row">
          <motion.div className="col col--one" {...whileInView}>
            <Image
              src={featured_image}
              alt="Amazing asset"
              width={900}
              height={568}
              placeholder="blur"
              blurDataURL={featured_image}
            />
          </motion.div>
          <motion.div className="col col--two" {...whileInView}>
            <Heading as="h2" className="mb">
              Powder biscuit cake sweet bear claw
            </Heading>
            <Text className="mb">
              Lollipop chocolate bar dragée icing sesame snaps tart gummies
              gingerbread gingerbread. Toffee chocolate cake jelly beans wafer
              marzipan halvah gummi. Cake liquorice tart gingerbread chocolate
              cake candy bonbon muffin.
            </Text>
            <ul className="mb-lg">
              <li className="mb">
                <Text>
                  Fruitcake icing jelly beans gingerbread biscuit. Powder
                  marzipan gummi bears cheesecake wafer.
                </Text>
              </li>
              <li className="mb">
                <Text>
                  Pie chocolate cake tart carrot cake apple pie jujubes donut.
                  Marshmallow icing shortbread shortbread chupa chups. Tiramisu
                  cookie pastry cupcake fruitcake wafer ice cream chocolate cake
                  candy cookie.
                </Text>
              </li>
              <li className="mb">
                <Text>
                  Topping pie chocolate cake bonbon. Danish croissant caramels
                  sweet roll jujubes donut sugar plum bonbon candy. Topping
                  chocolate candy marshmallow gummi bears chupa chups fruitcake.
                </Text>
              </li>
              <li className="mb">
                <Text>
                  Icing icing cookie candy canes pie bear claw macaroon.
                  Chocolate bar candy canes sesame snaps jelly oat cake tiramisu
                  danish cheesecake.
                </Text>
              </li>
            </ul>
            <Button
              customStyles={{
                textColor: button_text_color,
                backgroundColor: button_background_color,
                isFill: button_is_fill,
                containerColor: container_background_color,
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
