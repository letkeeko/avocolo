import type { NextPage } from "next";
import SEO from "../components/seo";
import styled from "styled-components";
import Layout from "../components/layout";
import Heading from "../components/heading";
import Text from "../components/text";
import Button from "../components/button";
import Image from "next/image";
import { COLOR, SCREEN } from "../components/variables";
import Logo from "../svg/avocolo-logo.svg";
import Boxes from "../svg/boxes.svg";
import Dots from "../svg/dots.svg";
import { VscGithubAlt } from "react-icons/vsc";

const Wrapper = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
  @media ${SCREEN.tablet} {
    min-height: 100vh;
  }

  .absolute-logo {
    position: absolute;
    width: 86px;
    left: 20px;
    top: 14px;
    @media ${SCREEN.tablet} {
      left: 48px;
      top: 24px;
      width: 116px;
    }
  }

  .inner-wrapper {
    max-width: 1340px;
    margin: 0 auto;
    padding: 120px 20px;
    text-align: center;
    @media ${SCREEN.tablet} {
      padding: 70px 48px;
      margin: auto;
    }
    @media ${SCREEN.desktop} {
      padding: 70px 0;
    }

    .txt-wrap {
      margin: 9px 0 0 0;
      @media ${SCREEN.tablet} {
        margin: 5px 0 0 0;
      }
    }

    .btn-wrap {
      margin: 30px 0 60px 0;
      @media ${SCREEN.tablet} {
        margin: 35px 0 90px 0;
      }
    }

    .img-wrap {
      max-width: 204px;
      margin: 0 auto;
      @media ${SCREEN.tablet} {
        max-width: 370px;
      }
    }
  }

  .decor {
    position: absolute;
    width: 250px;
    opacity: 0.3;
    @media ${SCREEN.tablet} {
      width: 400px;
    }
    @media ${SCREEN.laptop} {
      width: 600px;
    }

    &--box-top {
      right: -70px;
      top: -70px;
      transform: scale(-1);
      @media ${SCREEN.tablet} {
        right: -100px;
        top: -100px;
      }
      @media ${SCREEN.laptop} {
        right: -130px;
        top: -130px;
      }
    }

    &--box-bot {
      left: -70px;
      bottom: -70px;
      @media ${SCREEN.tablet} {
        left: -100px;
        bottom: -100px;
      }
      @media ${SCREEN.laptop} {
        left: -130px;
        bottom: -130px;
      }
    }

    &--dots-bot {
      width: 70px;
      bottom: -70px;
      right: 0;
      @media ${SCREEN.tablet} {
        width: 90px;
        bottom: 0;
      }
      @media ${SCREEN.laptop} {
        width: 140px;
      }
    }
  }
`;

const Footer = styled.footer`
  background-color: ${COLOR.black};
  color: ${COLOR.white};
  text-align: center;
  padding: 15px 0;
  @media ${SCREEN.tablet} {
    padding: 20px 0;
  }

  p {
    font-size: 0.7rem;
    @media ${SCREEN.tablet} {
      font-size: 0.75rem;
    }

    a {
      color: ${COLOR.white};
      @media ${SCREEN.cursor} {
        &:hover {
          color: ${COLOR.green};
        }
      }

      svg {
        font-size: 0.95rem;
        vertical-align: middle;
        margin: -2px 0 0 0;
        @media ${SCREEN.tablet} {
          font-size: 1.05rem;
        }
      }
    }
  }
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO
        title="Mockup Website Color | Avocolo"
        description="The easiest way, with ready responsive layout. Test your pallete right off the bat!"
        pathname=""
      />
      <Wrapper>
        <div className="absolute-logo">
          <Logo />
        </div>
        <div className="inner-wrapper">
          <Heading as="h1">Mockup website color</Heading>
          <div className="txt-wrap">
            <Text>
              The easiest way, with ready responsive layout.
              <br />
              Test your pallete right off the bat!
            </Text>
          </div>

          <div className="btn-wrap">
            <Button href="/editor">GET STARTED</Button>
          </div>

          <div className="img-wrap">
            <Image
              src="/hero-artwork.png"
              alt="Artwork"
              width={1200}
              height={1011}
              quality={100}
              priority
            />
          </div>
        </div>

        <div className="decor decor--box-top">
          <Boxes />
        </div>
        <div className="decor decor--box-bot">
          <Boxes />
        </div>
        <div className="decor decor--dots-bot">
          <Dots />
        </div>
      </Wrapper>
      <Footer>
        <p>
          Made by{" "}
          <a
            href="https://github.com/letkeeko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithubAlt /> Keeko
          </a>
        </p>
      </Footer>
    </Layout>
  );
};

export default Home;
