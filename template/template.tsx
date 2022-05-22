import styled from "styled-components";
import { SCREEN } from "../components/variables";
import { PropTypes } from "../components/types/template.types";
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
      padding: 0 24px;
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

export default function TemplateOne(props: PropTypes) {
  const { selections } = props;

  return (
    <Wrapper>
      {selections.navigation && <Nav selections={selections.navigation} />}
      {selections.banner && <Banner selections={selections.banner} />}
      {selections.features && <Features selections={selections.features} />}
      {selections.cta && <Cta selections={selections.cta} />}
      {selections.slides && <Slides selections={selections.slides} />}
      {selections.accordion && <Accordion selections={selections.accordion} />}
      {selections.footer && <Footer selections={selections.footer} />}
    </Wrapper>
  );
}
