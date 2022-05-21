import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Logo from "../svg/mockup-logo.svg";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { SCREEN } from "../components/variables";
import { defaultColor } from "./_static_data";

type WrapperProps = {
  backgroundColor: string;
  logoColor: string;
  textColor: string;
};

const Wrapper = styled.nav<WrapperProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: fixed;
  width: 100%;
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

    svg {
      .mockup-logo_svg__uuid-cfe96933-424d-4891-b691-1153aebf74f2 {
        fill: ${({ logoColor }) => logoColor};
      }
    }
  }

  .menu-list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 62px;
    @media ${SCREEN.tablet} {
      height: 80px;
    }

    &__each {
      display: none;
      @media ${SCREEN.tablet} {
        display: block;
        margin: 0 0 0 68px;
      }
      @media ${SCREEN.laptop} {
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
        @media ${SCREEN.tablet} {
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
    @media ${SCREEN.tablet} {
      display: none;
    }

    a {
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

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { container_background_color, container_text_color, logo_color } =
    defaultColor.nav;

  return (
    <Wrapper
      backgroundColor={container_background_color}
      logoColor={logo_color}
      textColor={container_text_color}
    >
      <div className="inner-wrapper">
        <div className="logo cursor">
          <Logo />
        </div>

        <ul className="menu-list">
          <li className="menu-list__each">
            <span className="cursor">Home</span>
          </li>
          <li className="menu-list__each">
            <span className="cursor">About</span>
          </li>
          <li className="menu-list__each">
            <span className="cursor">Services</span>
          </li>
          <li className="menu-list__each">
            <span className="cursor">Contact</span>
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
            <Link href="/editor">
              <motion.a variants={animateItem}>Home</motion.a>
            </Link>
            <Link href="/editor">
              <motion.a variants={animateItem}>About</motion.a>
            </Link>
            <Link href="/editor">
              <motion.a variants={animateItem}>Services</motion.a>
            </Link>
            <Link href="/editor">
              <motion.a variants={animateItem}>Contact</motion.a>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
