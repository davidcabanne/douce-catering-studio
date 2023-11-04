import React, { useState } from "react";
import styled, { css } from "styled-components";
import * as _var from "../styles/variables";

import Header from "./Header/Header";
import ContactModal from "./ContactModal";

const Container = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;

  ${(props) =>
    props.$backgroundPrimary &&
    css`
      background: ${_var.primary};
    `}
  ${(props) =>
    props.$backgroundSecondary &&
    css`
      background: ${_var.secondary};
    `}
`;

export default function Layout({
  children,
  backgroundPrimary,
  backgroundSecondary,
}) {
  const [modalActive, setModalActive] = useState(false);

  const handleContactActive = (event) => {
    setModalActive(!modalActive);
  };

  const handleCloseModal = () => {
    setModalActive(false);
  };

  return (
    <Container
      $backgroundPrimary={backgroundPrimary}
      $backgroundSecondary={backgroundSecondary}
    >
      <Header
        handleContactActive={handleContactActive}
        backgroundPrimary={backgroundPrimary}
        backgroundSecondary={backgroundSecondary}
      />
      <ContactModal
        handleCloseModal={handleCloseModal}
        modalActive={modalActive}
      />
      {children}
    </Container>
  );
}
