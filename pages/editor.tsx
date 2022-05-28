import { useState, useEffect } from "react";
import type { NextPage } from "next";
import SEO from "../components/seo";
import styled from "styled-components";
import Layout from "../components/layout";
import Panel from "../components/panel/panel";
import TemplateOne from "../template/template";
import ModalSaveAndShare from "../components/modal/save-and-share";
import ModalSelectedColors from "../components/modal/selected-colors";
import { defaultSelections } from "../template/_static_data";
import { useDebouncedCallback } from "use-debounce";
import { SCREEN } from "../components/variables";
import saveToLocalStorage from "../utils/save-to-localstorage";

type WrapperProps = {
  isSidebarOpen: boolean;
};

const Wrapper = styled.main<WrapperProps>`
  .site-wrapper {
    @media ${SCREEN.tablet} {
      width: ${({ isSidebarOpen }) =>
        isSidebarOpen ? "calc(100% - 250px)" : "100%"};
      margin: ${({ isSidebarOpen }) => (isSidebarOpen ? "0 0 0 auto" : "0")};
    }
  }
`;

const Editor: NextPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selections, setSelections] = useState({});
  const [isModalShareOpen, setIsModalShareOpen] = useState(false);
  const [isModalColorsOpen, setIsModalColorsOpen] = useState(false);

  const debounce = useDebouncedCallback((value) => {
    setSelections(value);
    saveToLocalStorage("unsaved", value);
  }, 100);

  useEffect(() => {
    const unsavedData = localStorage.getItem("unsaved");

    if (!!unsavedData) {
      setSelections(JSON.parse(unsavedData));
    } else {
      setSelections(defaultSelections);
    }
  }, []);

  const handleChange = (updatedValue: object) => {
    debounce(updatedValue);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleReset = () => {
    localStorage.clear();
    window.location.href = "editor";
  };

  return (
    <Layout>
      <SEO
        title="Editor | Avocolo"
        description="The easiest way, with ready responsive layout. Test your pallete right off the bat!"
        pathname="/editor"
      />
      <Wrapper isSidebarOpen={isSidebarOpen}>
        <Panel
          isSidebarOpen={isSidebarOpen}
          selections={selections}
          handleChange={handleChange}
          toggleSidebar={toggleSidebar}
          handleReset={handleReset}
          setIsModalShareOpen={setIsModalShareOpen}
          setIsModalColorsOpen={setIsModalColorsOpen}
        />
        <div className="site-wrapper">
          <TemplateOne selections={selections} />
        </div>
        {isModalColorsOpen && (
          <ModalSelectedColors
            setIsModalColorsOpen={setIsModalColorsOpen}
            selections={selections}
          />
        )}
        {isModalShareOpen && (
          <ModalSaveAndShare
            setIsModalShareOpen={setIsModalShareOpen}
            setIsModalColorsOpen={setIsModalColorsOpen}
            isModalColorsOpen={isModalColorsOpen}
            selections={selections}
          />
        )}
      </Wrapper>
    </Layout>
  );
};

export default Editor;
