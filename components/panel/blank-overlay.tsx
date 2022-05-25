import styled from "styled-components";

const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export default function BlankOverlay(props: {
  setActiveColorPicker: (val: string) => void;
}) {
  const { setActiveColorPicker } = props;

  return (
    <Wrapper
      id="blank-overlay"
      role="presentation"
      onClick={() => setActiveColorPicker("")}
    ></Wrapper>
  );
}
