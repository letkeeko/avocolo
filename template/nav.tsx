import { useState } from "react";
import styled from "styled-components";
import { PropTypes } from "../components/{types}/template.types";
import { AnimatePresence, motion } from "framer-motion";
import MockupLogo from "../svg/mockup-logo";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { SCREEN } from "../components/variables";

type WrapperProps = {
  backgroundColor: string;
  logoColor: string;
  textColor: string;
};

const Wrapper = styled.nav<WrapperProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
  box-shadow: 0 6px 10px -8px rgba(0, 0, 0, 0.2);
  z-index: 2;

  .logo {
    width: 62px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    @media ${SCREEN.tablet} {
      width: 70px;
    }
  }

  .menu-list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 62px;
    @media ${SCREEN.laptop} {
      height: 80px;
    }

    &__each {
      display: none;
      @media ${SCREEN.laptop} {
        display: block;
        margin: 0 0 0 80px;
      }

      span {
        color: ${({ textColor }) => textColor};
        font-size: 0.9rem;
        line-height: 30px;
        @media ${SCREEN.laptop} {
          font-size: 0.95rem;
        }
      }

      &--icon-menu {
        color: ${({ textColor }) => textColor};
        cursor: pointer;
        display: block;
        font-size: 2.2rem;
        @media ${SCREEN.laptop} {
          display: none;
        }
      }
    }
  }

  .overlay {
    background-color: ${({ backgroundColor }) => backgroundColor};
    position: fixed;
    top: 62px;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 66px 0 0 0;
    z-index: 10;
    @media ${SCREEN.laptop} {
      display: none;
    }

    p {
      color: ${({ textColor }) => textColor};
      display: block;
      text-align: center;
      margin: 0 0 52px 0;
      font-size: 1.25rem;
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

export default function Nav(props: PropTypes) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { container_background_color, container_text_color, logo_color } =
    props.selections;

  return (
    <Wrapper
      backgroundColor={container_background_color}
      logoColor={logo_color}
      textColor={container_text_color}
      id="navigation"
    >
      <div className="inner-wrapper">
        <div className="logo cursor">
          <MockupLogo color={logo_color} />
        </div>

        <ul className="menu-list">
          <li className="menu-list__each">
            <span className="default-cursor">Home</span>
          </li>
          <li className="menu-list__each">
            <span className="default-cursor">About</span>
          </li>
          <li className="menu-list__each">
            <span className="default-cursor">Services</span>
          </li>
          <li className="menu-list__each">
            <span className="default-cursor">Contact</span>
          </li>
          <li className="menu-list__each menu-list__each--icon-menu">
            <div role="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <IoMdClose /> : <IoIosMenu />}
            </div>
          </li>
        </ul>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="overlay"
            variants={animateContainer}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <motion.p className="default-cursor" variants={animateItem}>
              Home
            </motion.p>
            <motion.p className="default-cursor" variants={animateItem}>
              About
            </motion.p>
            <motion.p className="default-cursor" variants={animateItem}>
              Services
            </motion.p>
            <motion.p className="default-cursor" variants={animateItem}>
              Contact
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
