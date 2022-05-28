import styled from "styled-components";
import useClipboard from "react-use-clipboard";
import { PropTypes } from "../{types}/selected-colors.types";
import { COLOR, SCREEN } from "../../components/variables";
import BlankOverlay from "../blank-overlay";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import ScrollLock from "react-scrolllock";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 31;
  display: flex;

  .inner-container {
    background-color: ${COLOR.white};
    margin: auto;
    position: relative;
    z-index: 10;
    padding: 60px 24px 24px 24px;
    border-radius: 6px;
    text-align: center;
    box-shadow: 0 10px 20px -5px rgba(58, 58, 98, 0.2);
    width: calc(100% - 24px);
    overflow: auto;
    @media ${SCREEN.tablet} {
      width: calc(100% - 60px);
      padding: 60px;
      height: auto;
    }
    @media ${SCREEN.laptop} {
      width: auto;
    }

    .color-list {
      display: flex;
      max-width: 700px;
      flex-wrap: wrap;
      justify-content: center;

      &__each {
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        cursor: pointer;
        width: 75px;
        height: 75px;
        margin: 5px;
        position: relative;
        overflow: hidden;
        @media ${SCREEN.tablet} {
          width: 115px;
          height: 115px;
          margin: 8px;
        }

        &:hover p {
          opacity: 1;
        }

        p {
          position: absolute;
          width: 100%;
          height: 25%;
          bottom: 0;
          display: flex;
          transition: opacity 0.2s ease-in-out;
          opacity: 0;
          background-color: rgba(255, 255, 255, 0.75);
        }

        span {
          margin: auto;
          font-size: 0.7rem;
          @media ${SCREEN.tablet} {
            font-size: 0.825rem;
          }
        }
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
      @media ${SCREEN.cursor} {
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

const getUniqueHexColors = (obj: { [key: string]: any }): string[] => {
  if (!obj) return [];

  // returns all object value to array
  const toArrayFromObject = Object.keys(obj).reduce(
    (acc: any[], eachKey: string) => {
      const arrVal = [...acc, ...Object.values(obj[eachKey])];

      return arrVal;
    },
    []
  );

  // returns array of unique value with #
  const onlyUniqueWithHex = (value: any, index: any, self: any) => {
    return (
      typeof value === "string" &&
      value.indexOf("#") === 0 &&
      self.indexOf(value) === index
    );
  };

  if (!Array.isArray(toArrayFromObject)) return [];

  return toArrayFromObject.filter(onlyUniqueWithHex);
};

export default function SelectedColors(props: PropTypes) {
  const { setIsModalSelectedColors, selections } = props;

  const colors = getUniqueHexColors(selections);

  return (
    <Wrapper role="dialog">
      <ScrollLock>
        <div className="inner-container">
          <ul className="color-list">
            {colors.map((color, index) => (
              <Color color={color} key={index} />
            ))}
          </ul>
          <div
            className="close-btn"
            role="button"
            onClick={() => setIsModalSelectedColors(false)}
          >
            <IoMdClose />
          </div>
        </div>
      </ScrollLock>
      <BlankOverlay
        backgroundColor="rgba(255,255,255,0.7)"
        paramValue={false}
        triggerFunction={setIsModalSelectedColors}
      />
    </Wrapper>
  );
}

type ColorTypes = {
  color: string;
};

// separated so it can have its own state for copied clipboard feedback
const Color = (props: ColorTypes) => {
  const { color } = props;
  const [isCopied, setCopied] = useClipboard(color, {
    successDuration: 500,
  });

  return (
    <motion.li
      className="color-list__each"
      onClick={setCopied}
      whileTap={{ scale: 0.98 }}
      style={{
        backgroundColor: color,
      }}
    >
      <p>
        <span>{isCopied ? "Copied!" : color}</span>
      </p>
    </motion.li>
  );
};
