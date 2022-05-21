import type { NextPage } from "next";
import SEO from "../components/seo";
import styled from "styled-components";
import Layout from "../components/layout";
import { COLOR, SCREEN } from "../components/variables";
import TemplateOne from "../template/template";

const Wrapper = styled.main``;

const Editor: NextPage = () => {
  return (
    <Layout>
      <SEO
        title="Editor | Avocolo"
        description="The easiest way, with ready responsive layout. Test your pallete right off the bat!"
        pathname=""
      />
      <Wrapper>
        <div className="site-wrapper">
          <TemplateOne />
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Editor;
