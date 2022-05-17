import type { NextPage } from "next";
import SEO from "../components/seo";
import styled from "styled-components";
import { COLOR } from "../components/variables";

const Wrapper = styled.div`
  background-color: ${COLOR.white};
`;

const Home: NextPage = () => {
  return (
    <Wrapper>
      <SEO title="Mockup Website Color | Avocolo" description="TBD" />
      <main>
        <h1>Hi world</h1>
      </main>
    </Wrapper>
  );
};

export default Home;
