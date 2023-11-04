import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as _var from "../../styles/variables";

import Logo from "./Logo";
import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";
import Menu from "./Menu";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${_var.marginM};
  padding-left: 0px;
  padding-right: 0px;
  z-index: 100;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1260px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${_var.marginM};
  padding-right: ${_var.marginM};

  @media ${_var.device.mobileL_max} {
    padding-left: ${_var.marginS};
    padding-right: ${_var.marginS};
  }
`;

export default function Header({
  handleContactActive,
  backgroundPrimary,
  backgroundSecondary,
}) {
  const [menuActive, setMenuActive] = useState(false);

  const handleToggleMenu = (event) => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const body = document.body;
    menuActive
      ? body.classList.add("menuActive")
      : body.classList.remove("menuActive");
  }, [menuActive]);

  return (
    <Container>
      <Wrapper>
        <Logo
          backgroundPrimary={backgroundPrimary}
          backgroundSecondary={backgroundSecondary}
        />
        <Navigation
          handleContactActive={handleContactActive}
          backgroundPrimary={backgroundPrimary}
          backgroundSecondary={backgroundSecondary}
        />
        <NavigationMobile
          handleContactActive={handleContactActive}
          handleToggleMenu={handleToggleMenu}
          menuActive={menuActive}
        />
        <Menu
          handleToggleMenu={handleToggleMenu}
          menuActive={menuActive}
          backgroundPrimary={backgroundPrimary}
          backgroundSecondary={backgroundSecondary}
        />
      </Wrapper>
    </Container>
  );
}
