import styled from "styled-components";
import { SCREEN } from "../components/variables";
import Nav from "./nav";
import Banner from "./banner";
import Features from "./features";
import Cta from "./cta";
import Slides from "./slides";
import Accordion from "./accordion";
import Footer from "./footer";

const Wrapper = styled.div`
  .inner-wrapper {
    max-width: 1340px;
    margin: 0 auto;
    padding: 0 24px;
    @media ${SCREEN.tablet} {
      padding: 0 48px;
    }
    @media ${SCREEN.desktop} {
      padding: 0;
    }
  }

  // margin-bottom default gap
  .mb {
    margin: 0 0 20px 0;
  }
  // margin-bottom medium gap
  .mb-med {
    margin: 0 0 30px 0;
  }
  // margin-bottom larger gap
  .mb-lg {
    margin: 0 0 30px 0;
  }

  .cursor {
    cursor: pointer;
  }
`;

export default function TemplateOne() {
  return (
    <Wrapper>
      <Nav />
      <Banner />
      <Features />
      <Cta />
      <Slides />
      <Accordion />
      <Footer />
    </Wrapper>
  );
}
