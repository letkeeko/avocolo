import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { supabase } from "../lib/init-supabase";
import SEO from "../components/seo";
import { SCREEN, animateContainer, animateItem } from "../components/variables";
import styled from "styled-components";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import Heading from "../components/heading";
import Image from "next/image";
import Text from "../components/text";
import TemplateOne from "../template/template";
import { VscTag, VscSymbolColor, VscChromeClose } from "react-icons/vsc";
import ModalSelectedColors from "../components/modal/selected-colors";

const Wrapper = styled.main`
  .notification-bar {
    border-bottom: 1px solid #e8e8e8;
    max-width: 1340px;
    margin: 0 auto;
    padding: 12px 24px;
    display: flex;
    justify-content: space-between;
    @media ${SCREEN.tablet} {
      justify-content: flex-start;
      padding: 12px 48px;
    }
    @media ${SCREEN.desktop} {
      padding: 12px 24px;
    }

    .btn {
      cursor: pointer;
      display: flex;
      align-items: center;
      @media ${SCREEN.tablet} {
        margin: 0 90px 0 0;
      }

      .icon {
        margin: 0 8px -4px 0;
      }

      &--txt {
        cursor: default;
        display: block;
        max-width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        @media ${SCREEN.tablet} {
          max-width: 200px;
        }

        .icon {
          vertical-align: middle;
        }
      }
    }
  }

  .site-wrapper {
    text-align: center;
    padding: 70px 0 0 0;
    @media ${SCREEN.tablet} {
      padding: 90px 0 0 0;
    }

    .img-wrap {
      max-width: 190px;
      margin: 0 auto 16px auto;
      @media ${SCREEN.tablet} {
        max-width: 240px;
        margin: 0 auto 30px auto;
      }
    }
  }
`;

const View: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selections, setSelections] = useState(null);
  const [title, setTitle] = useState("Avocolo");
  const [isTopNotification, setIsTopNotification] = useState(true);
  const [isNoneFound, setIsNoneFound] = useState(false);
  const [isModalColorsOpen, setIsModalColorsOpen] = useState(false);

  useEffect(() => {
    // get the id from url
    const id = window.location.search.substring(1);

    getUserSelections(id);
  }, []);

  const getUserSelections = async (id: string) => {
    const { data, error } = await supabase
      .from("user_selections")
      .select("selections, title")
      .eq("id", id)
      .single();

    if (!!data) {
      setTitle(data?.title);
      setSelections(data?.selections);
      setIsLoading(false);
    } else {
      // if no result, simply display a fallback element
      setIsNoneFound(true);
      setIsLoading(false);
    }

    if (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <SEO
        title={title}
        description="Mockup colors the fastest way, with ready responsive layout. Test your pallete right off the bat!"
        pathname="/v"
        isNoIndex
      />

      <Wrapper>
        {!!selections && isTopNotification && (
          <div className="notification-bar">
            <div className="btn btn--txt">
              <span className="icon">
                <VscTag />
              </span>
              <span className="label">{title}</span>
            </div>
            <div className="btn" onClick={() => setIsModalColorsOpen(true)}>
              <span className="icon">
                <VscSymbolColor />
              </span>
              <span className="label">Palette</span>
            </div>
            <div className="btn" onClick={() => setIsTopNotification(false)}>
              <span className="icon">
                <VscChromeClose />
              </span>
              <span className="label">Close</span>
            </div>
          </div>
        )}

        {isModalColorsOpen && (
          <ModalSelectedColors
            setIsModalColorsOpen={setIsModalColorsOpen}
            selections={selections || {}}
          />
        )}

        {isLoading && (
          <div className="site-wrapper">
            <Heading as="h3">Please wait...</Heading>
          </div>
        )}

        {!!selections && <TemplateOne selections={selections} />}

        {isNoneFound && (
          <motion.div
            className="site-wrapper"
            variants={animateContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div className="img-wrap" variants={animateItem}>
              <Image
                src="/error-artwork.png"
                alt="None found"
                placeholder="blur"
                blurDataURL="/error-artwork.png"
                width={550}
                height={490}
              />
            </motion.div>
            <motion.div variants={animateItem}>
              <Heading as="h3">No selections found</Heading>
              <Text>URL does not exist</Text>
            </motion.div>
          </motion.div>
        )}
      </Wrapper>
    </Layout>
  );
};

export default View;
