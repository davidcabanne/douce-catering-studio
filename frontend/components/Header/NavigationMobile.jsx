import { useRouter } from "next/router";
import Link from "next/link";

import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

import ContactModal from "../ContactModal";

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${_var.primary};
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ${_var.cubicBezier};
  transition-delay: 100ms;

  & ul > li,
  ul > span {
    opacity: 0;
    transform: translateY(-16px);
    transition-delay: 0ms;
  }

  &.isActive {
    pointer-events: auto;
    opacity: 1;

    & ul > li,
    ul > span {
      opacity: 1;
      transform: translateY(0px);
      transition-delay: 200ms;
    }
  }

  @media ${_var.device.tablet_min} {
    display: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${_var.marginXL};
  margin-top: ${_var.headerHeight};
`;

const Navlink = styled.li`
  color: ${_var.black};
  letter-spacing: 0.25px;
  font-family: "Kickers", "Courrier New", sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
  transition: 200ms ${_var.cubicBezier};
  transition-property: opacity, transform;

  & a,
  a:visited,
  a:active {
    color: inherit;
    text-decoration: none;
  }

  &.active {
    a {
      text-decoration: underline;
    }
  }
`;

const Contact = styled.span`
  color: ${_var.black};
  letter-spacing: 0.25px;
  font-family: "Kickers", "Courrier New", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  transition: 200ms ${_var.cubicBezier};
  transition-property: opacity, transform;
`;

export default function NavigationMobile({
  handleContactActive,
  handleToggleMenu,
  menuActive,
}) {
  const router = useRouter();

  const handleNavClick = (url) => {
    if (router.pathname === url) {
      handleToggleMenu(false);
    }
  };

  const handleOnClick = (event) => {
    handleContactActive(event);
  };
  return (
    <Nav className={menuActive ? "isActive" : ""}>
      <Ul>
        <Navlink
          className={router.pathname == "/" ? "active" : ""}
          onClick={() => handleNavClick("/")}
        >
          <Link href="/">home</Link>
        </Navlink>
        <Navlink
          className={router.pathname == "/about" ? "active" : ""}
          onClick={() => handleNavClick("/about")}
        >
          <Link href="/about">about</Link>
        </Navlink>
        <Navlink
          className={router.pathname == "/projects" ? "active" : ""}
          onClick={() => handleNavClick("/projects")}
        >
          <Link href="/projects">projects</Link>
        </Navlink>
        <Navlink>
          <Contact onClick={handleOnClick}>contact</Contact>
        </Navlink>
        <ContactModal />
      </Ul>
    </Nav>
  );
}
