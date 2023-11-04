import React from "react";
import styled from "styled-components";
import * as _var from "../styles/variables";

const Container = styled.section`
  position: relative;
  width: 100%;
  max-width: 1260px;
  /* min-height: 100vh;
  min-height: 100dvh; */
  margin-left: auto;
  margin-right: auto;
  padding-top: 132px;
  padding-bottom: ${_var.marginXL};
  padding-left: ${_var.marginL};
  padding-right: ${_var.marginL};

  @media ${_var.device.tablet_max} {
    padding-left: ${_var.marginM};
    padding-right: ${_var.marginM};
  }

  @media ${_var.device.mobileL_max} {
    padding-left: ${_var.marginS};
    padding-right: ${_var.marginS};
  }
`;

export default function Section({ children }) {
  return <Container>{children}</Container>;
}
