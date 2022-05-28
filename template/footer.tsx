import styled from "styled-components";
import { motion } from "framer-motion";
import { PropTypes } from "../components/{types}/template.types";
import MockupLogo from "../svg/mockup-logo";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { SCREEN, whileInView } from "../components/variables";

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
    @media ${SCREEN.tablet} {
      display: flex;
    }

    &--center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .top {
    padding: 50px 0 0 0;
    @media ${SCREEN.tablet} {
      padding: 80px 0 0 0;
    }
    @media ${SCREEN.laptop} {
      padding: 80px 0 0 0;
    }

    .logo {
      width: 62px;
      margin: 0 0 26px 0;
      @media ${SCREEN.tablet} {
        margin: 0 0 36px 0;
        width: 70px;
      }
    }

    .subheading {
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0 16px 0;
    }

    .link {
      color: ${({ textColor }) => textColor};
      font-size: 0.875rem;
      font-weight: 300;
      margin: 0 0 10px 0;
      @media ${SCREEN.tablet} {
        font-size: 0.95rem;
        margin: 0 0 12px 0;
      }
    }

    .icon-social {
      font-size: 1.6rem;
      margin: 0 20px 0 0;
      color: ${({ iconColor }) => iconColor};
    }

    .col {
      margin: 0 0 30px 0;
      @media ${SCREEN.tablet} {
        width: 33.33%;
        margin: 0;
      }

      &--two {
        @media ${SCREEN.tablet} {
          max-width: max-content;
          margin: 0 auto;
        }
      }

      &--three {
        @media ${SCREEN.tablet} {
          max-width: max-content;
          margin: 0 0 0 auto;
        }
      }
    }
  }

  .bot {
    padding: 30px 0 20px 0;
    @media ${SCREEN.tablet} {
      padding: 80px 0 40px 0;
    }

    a {
      color: ${({ textColor }) => textColor};
    }

    p {
      font-size: 0.65rem;
      font-weight: 300;
      @media ${SCREEN.tablet} {
        font-size: 0.825rem;
      }
    }

    span {
      margin: 0 8px;
      font-size: 0.65rem;
      @media ${SCREEN.tablet} {
        margin: 0 15px;
        font-size: 1rem;
      }
      @media ${SCREEN.laptop} {
        margin: 0 30px;
      }
    }
  }
`;

export default function Footer(props: PropTypes) {
  const {
    container_background_color,
    container_text_color,
    logo_color,
    icon_color,
  } = props.selections;

  return (
    <Wrapper
      backgroundColor={container_background_color}
      textColor={container_text_color}
      logoColor={logo_color}
      iconColor={icon_color}
      id="footer"
    >
      <div className="top">
        <div className="inner-wrapper">
          <div className="flex-row">
            <motion.div className="col col--one" {...whileInView}>
              <div className="logo">
                <MockupLogo color={logo_color} />
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
              <p className="link default-cursor">info@thatcompany.com</p>
              <p className="link default-cursor">1234 567 8910</p>
              <p className="link default-cursor">
                20 Yeah Man Road,
                <br />
                That State 4321, Datcountry
              </p>
            </motion.div>
            <motion.div className="col col--three" {...whileInView}>
              <h6 className="subheading">Our services</h6>
              <p className="link default-cursor">Baking muffin</p>
              <p className="link default-cursor">Singing and dancing</p>
              <p className="link default-cursor">Driving safe</p>
              <p className="link default-cursor">Christmas caroling</p>
            </motion.div>
          </div>
        </div>
        <div className="bot">
          <div className="inner-wrapper">
            <motion.div className="flex-row flex-row--center" {...whileInView}>
              <p>&copy; Company 2022</p>
              <span>|</span>
              <p>
                Images from{" "}
                <a
                  href="https://unsplash.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unsplash
                </a>
              </p>
              <span>|</span>
              <p className="default-cursor">Terms and Privacy</p>
            </motion.div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
