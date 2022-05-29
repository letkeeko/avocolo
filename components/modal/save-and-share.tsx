import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ScrollLock from "react-scrolllock";
import { PropTypes } from "../{types}/save-and-share.types";
import { supabase } from "../../lib/init-supabase";
import {
  COLOR,
  SCREEN,
  animateContainer,
  animateItem,
} from "../../components/variables";
import BlankOverlay from "../blank-overlay";
import Heading from "../../components/heading";
import useClipboard from "react-use-clipboard";
import Button from "../button";
import { IoMdClose } from "react-icons/io";
import slugify from "slugify";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  display: flex;

  .inner-container {
    background-color: ${COLOR.white};
    margin: auto;
    position: relative;
    z-index: 10;
    padding: 60px 24px 48px 24px;
    border-radius: 6px;
    text-align: center;
    box-shadow: 0 10px 20px -5px rgba(58, 58, 98, 0.2);
    width: calc(100% - 24px);
    @media ${SCREEN.tablet} {
      width: calc(100% - 60px);
      padding: 60px;
    }
    @media ${SCREEN.laptop} {
      width: auto;
      padding: 148px;
    }

    h3 {
      font-weight: 500;

      span {
        text-decoration: underline;
        cursor: pointer;
        transition: color 0.2s ease-in-out;
        @media ${SCREEN.cursor} {
          &:hover {
            color: ${COLOR.green};
          }
        }
      }
    }

    .form {
      margin: 30px 0 0 0;
      @media ${SCREEN.tablet} {
        margin: 60px 0 0 0;
      }

      &__label {
        display: block;
        font-weight: 400;
        margin: 0 0 10px 0;
      }

      &__input {
        text-align: left;
        width: 90%;
        display: block;
        font-size: 16px;
        margin: 0 auto 36px auto;
        border: 0;
        border-radius: 4px;
        background-color: #e8e8e8;
        padding: 10px;
        line-height: 1.35;
        text-align: center;
        @media ${SCREEN.tablet} {
          margin: 0 auto 48px auto;
          font-size: 1.2rem;
          padding: 12px;
        }

        &::placeholder {
          opacity: 0.55;
        }
      }

      button {
        margin: 0 auto;
        text-align: center;
        max-width: max-content;
      }
    }

    .close-btn {
      cursor: pointer;
      font-size: 1.6rem;
      position: absolute;
      top: 22px;
      right: 22px;
      opacity: 0.5;
      transition: opacity 0.2s ease-in-out;
      z-index: 2;
      @media ${SCREEN.cursor} {
        &:hover {
          opacity: 1;
        }
      }
    }

    .result-overlay {
      background-color: ${COLOR.white};
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      z-index: 1;

      .inner-content {
        margin: auto;

        .txt-btn {
          font-size: 0.9rem;
          margin: 20px 0 10px 0;
          cursor: pointer;
          transition: color 0.2s ease-in-out;
          font-size: 1.3rem;
          font-weight: 400;
          line-height: 1.5;
          @media ${SCREEN.tablet} {
            font-size: 1.4rem;
          }
          @media ${SCREEN.desktop} {
            font-size: 1.5rem;
          }
          &:hover {
            color: ${COLOR.green};
          }
        }

        .footnote {
          font-size: 0.825rem;
          font-weight: 300;

          a {
            color: ${COLOR.black};
            transition: color 0.2s ease-in-out;
            &:hover {
              color: ${COLOR.green};
            }
          }
        }
      }
    }
  }
`;

const getRandomString = () => {
  return Math.random().toString(36).substring(2);
};

const getUniquePathname = (title: string = "avocolo") => {
  const randomString = getRandomString();

  const slugTitle = slugify(title, {
    replacement: "-",
    remove: undefined,
    lower: true,
    strict: true,
  });

  const shuffledString = slugTitle
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("")
    .slice(0, 5);

  return randomString + shuffledString;
};

export default function SaveAndShare(props: PropTypes) {
  const [nameInput, setNameInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const [uniquePathname, setUniquePathname] = useState("");
  const [isCopied, setCopied] = useClipboard(
    `avocolo.com/v?${uniquePathname}`,
    {
      successDuration: 500,
    }
  );

  const {
    setIsModalShareOpen,
    setIsModalColorsOpen,
    isModalColorsOpen,
    selections,
  } = props;

  const saveToDatabase = async (input: {
    id: string;
    title: string;
    selections: object;
  }) => {
    setIsLoading(true);
    const { id, title, selections } = input;

    const { data, error } = await supabase
      .from("user_selections")
      .insert([{ id, title, selections }]);

    if (data) {
      setIsLoading(false);
      setSubmitted(true);
      setNameInput("");

      // to be used on success feedback
      setUniquePathname(data[0].id);
    }

    if (error) {
      setIsLoading(false);
      setNameInput("");

      // duplicate id - by rare chance the generated id is already exist
      if (error.code === "23505") {
        alert("Could you try again with a different name?");
        return;
      }

      alert("Error saving it, Check console or try again later.");
      console.error(error);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!nameInput) {
      alert("Reference name can't be empty");
      return;
    }

    saveToDatabase({
      id: getUniquePathname(nameInput),
      title: nameInput,
      selections,
    });
  };

  const closeAndReset = () => {
    setNameInput("");
    setIsLoading(false);
    setSubmitted(false);
    setUniquePathname("");
    setIsModalShareOpen(false);
  };

  return (
    <Wrapper role="dialog">
      <ScrollLock>
        <motion.div
          className="inner-container"
          variants={animateContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={animateItem}>
            <Heading as="h3">
              Happy with{" "}
              <span onClick={() => setIsModalColorsOpen(true)}>
                selected colors
              </span>
              ?
              <br />
              Share it with the team or client!
            </Heading>
          </motion.div>

          <form className="form" onSubmit={handleSubmit}>
            <motion.div variants={animateItem}>
              <label className="form__label" htmlFor="name">
                Name it, as reference*
              </label>
              <input
                className="form__input"
                type="text"
                id="name"
                placeholder="e.g. Project brownish"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                required
              />
            </motion.div>
            <motion.div variants={animateItem}>
              <Button disabled={isLoading}>
                {isLoading ? "LOADING..." : "GET A LINK"}
              </Button>
            </motion.div>
          </form>

          {isSubmitted && (
            <motion.div className="result-overlay" variants={animateContainer}>
              <motion.div className="inner-content" variants={animateItem}>
                <Heading as="h3">Copy link:</Heading>

                <p
                  className="txt-btn"
                  onClick={setCopied}
                  title="Copy to clipboard"
                >
                  {isCopied ? "Copied!" : `avocolo.com/v?${uniquePathname}`}
                </p>
                <p className="footnote">
                  Tip: Test this link on a color contrast analyser
                </p>
              </motion.div>
            </motion.div>
          )}
          {!isModalColorsOpen && (
            <div className="close-btn" role="button" onClick={closeAndReset}>
              <IoMdClose />
            </div>
          )}
        </motion.div>
      </ScrollLock>
      <BlankOverlay backgroundColor="rgba(255,255,255,0.7)" />
    </Wrapper>
  );
}
