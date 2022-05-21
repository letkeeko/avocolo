import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "../svg/mockup-logo.svg";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { SCREEN, whileInView } from "../components/variables";
import { defaultColor } from "./_static_data";

type WrapperProps = {
  backgroundColor: string;
  textColor: string;
  logoColor: string;
  iconColor: string;
};

const Wrapper = styled.footer<WrapperProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};

  .flex-row {
    display: flex;

    &--center {
      align-items: center;
      justify-content: center;
    }
  }

  .top {
    padding: 80px 0 0 0;

    .logo {
      width: 52px;
      margin: 0 0 36px 0;
    }

    .subheading {
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0 16px 0;
    }

    .link {
      font-size: 0.95rem;
      font-weight: 300;
      margin: 0 0 12px 0;
    }

    .icon-social {
      font-size: 1.6rem;
      margin: 0 20px 0 0;
    }

    .col {
      width: 33.33%;

      &--two {
        max-width: max-content;
        margin: 0 auto;
      }

      &--three {
        max-width: max-content;
        margin: 0 0 0 auto;
      }
    }
  }

  .bot {
    padding: 80px 0 40px 0;
    p {
      font-size: 0.825rem;
      font-weight: 300;
    }

    span {
      margin: 0 30px;
    }
  }
`;

export default function Footer() {
  const {
    container_background_color,
    container_text_color,
    logo_color,
    icon_color,
  } = defaultColor.footer;

  return (
    <Wrapper
      backgroundColor={container_background_color}
      textColor={container_text_color}
      logoColor={logo_color}
      iconColor={icon_color}
    >
      <div className="top">
        <div className="inner-wrapper">
          <div className="flex-row">
            <motion.div className="col col--one" {...whileInView}>
              <div className="logo">
                <Logo />
              </div>
              <h6 className="subheading">Follow us</h6>
              <span className="icon-social cursor">
                <FaFacebookSquare />
              </span>
              <span className="icon-social cursor">
                <FaTwitterSquare />
              </span>
              <span className="icon-social cursor">
                <FaLinkedin />
              </span>
            </motion.div>
            <motion.div className="col col--two" {...whileInView}>
              <h6 className="subheading">Get in touch</h6>
              <p className="link cursor">info@thatcompany.com</p>
              <p className="link cursor">+1234 567 8910</p>
              <p className="link cursor">
                20 Yeah Man Road,
                <br />
                That State 4321, Datcountry
              </p>
            </motion.div>
            <motion.div className="col col--three" {...whileInView}>
              <h6 className="subheading">Our services</h6>
              <p className="link cursor">Baking muffin</p>
              <p className="link cursor">Singing and dancing</p>
              <p className="link cursor">Driving safe</p>
              <p className="link cursor">Christmas caroling</p>
            </motion.div>
          </div>
        </div>
        <div className="bot">
          <div className="inner-wrapper">
            <motion.div className="flex-row flex-row--center" {...whileInView}>
              <p>&copy; Company 2022</p>
              <span>|</span>
              <p className="cursor">Terms and conditions</p>
              <span>|</span>
              <p className="cursor">Privacy policy</p>
            </motion.div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
