import styled from "styled-components";

const Wrapper = styled.aside`
  background-color: rgba(255, 255, 255, 0);
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  z-index: 1;
`;

export default function BlankOverlay(props: {
  setActiveColorPicker: (val: string) => void;
}) {
  const { setActiveColorPicker } = props;

  return (
    <Wrapper
      id="blank-overlay"
      onClick={() => setActiveColorPicker("")}
    ></Wrapper>
  );
}
