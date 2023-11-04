import styled, { keyframes } from "styled-components";
import * as _var from "../../styles/variables";

const loadingAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: start;
  z-index: 99;

  & h1 {
    padding-top: ${_var.headerHeight};
    animation: ${loadingAnimation} 1000ms ${_var.cubicBezier} infinite alternate;
  }
`;

export default function Loading() {
  return (
    <Container>
      <h1>loading...</h1>
    </Container>
  );
}
