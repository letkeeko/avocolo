import { useState, useEffect } from "react";
import type { NextPage } from "next";
import SEO from "../components/seo";
import styled from "styled-components";
import Layout from "../components/layout";
import Button from "../components/button";
import Panel from "../components/panel/panel";
import TemplateOne from "../template/template";
import { COLOR, SCREEN } from "../components/variables";
import { defaultSelections } from "../template/_static_data";
import { useDebouncedCallback } from "use-debounce";

type WrapperProps = {
  isSidebarOpen: boolean;
};

const Wrapper = styled.main<WrapperProps>`
  .site-wrapper {
    width: ${({ isSidebarOpen }) =>
      isSidebarOpen ? "calc(100% - 250px)" : "100%"};
    margin: ${({ isSidebarOpen }) => (isSidebarOpen ? "0 0 0 auto" : "0")};
  }
`;

const Editor: NextPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selections, setSelections] = useState({});

  const debounce = useDebouncedCallback((value) => {
    setSelections(value);
  }, 150);

  useEffect(() => {
    // to be added
    const isLocalStorage = false;

    if (isLocalStorage) {
      setSelections(isLocalStorage);
    } else {
      setSelections(defaultSelections);
    }
  }, []);

  const handleChange = (updatedValue: object) => {
    debounce(updatedValue);
    // setSelections({ ...selections, ...updatedValue });
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Layout>
      <SEO
        title="Editor | Avocolo"
        description="The easiest way, with ready responsive layout. Test your pallete right off the bat!"
        pathname=""
      />
      <Wrapper isSidebarOpen={isSidebarOpen}>
        <Panel
          isSidebarOpen={isSidebarOpen}
          selections={selections}
          handleChange={handleChange}
          toggleSidebar={toggleSidebar}
        />

        <div className="site-wrapper">
          <TemplateOne selections={selections} />
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Editor;
