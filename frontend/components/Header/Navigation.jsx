import { useRouter } from "next/router";
import Link from "next/link";

import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

const Nav = styled.nav`
  @media ${_var.device.tablet_max} {
    display: none;
  }
`;

const Ul = styled.ul`
  display: flex;
`;

const Navlink = styled.li`
  position: relative;
  color: ${_var.primary};
  letter-spacing: 0.25px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 5px 10px;
  font-family: "Kickers", "Courrier New", sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 100ms ${_var.cubicBezier};

  ${(props) =>
    (props.$backgroundPrimary || props.$backgroundSecondary) &&
    css`
      color: ${_var.dark};
    `}

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

  @media ${_var.device.tablet_min} {
    &:hover {
      opacity: 0.85;
    }
  }
`;

const Contact = styled.span`
  color: ${_var.primary};
  letter-spacing: 0.25px;
  margin-left: 5px;
  margin-right: 0px;
  padding: 5px 10px;
  padding-right: 0px;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  font-family: "Kickers", "Courrier New", sans-serif;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 100ms ${_var.cubicBezier};

  ${(props) =>
    (props.$backgroundPrimary || props.$backgroundSecondary) &&
    css`
      color: ${_var.dark};
    `}

  @media ${_var.device.tablet_min} {
    &:hover {
      opacity: 0.85;
    }
  }
`;

export default function Navigation({
  handleContactActive,
  backgroundPrimary,
  backgroundSecondary,
}) {
  const router = useRouter();

  const handleOnClick = (event) => {
    handleContactActive(event);
  };
  return (
    <Nav>
      <Ul>
        <Navlink
          $backgroundPrimary={backgroundPrimary}
          $backgroundSecondary={backgroundSecondary}
          className={router.pathname == "/about" ? "active" : ""}
        >
          <Link href="/about">about</Link>
        </Navlink>
        <Navlink
          $backgroundPrimary={backgroundPrimary}
          $backgroundSecondary={backgroundSecondary}
          className={router.pathname == "/projects" ? "active" : ""}
        >
          <Link href="/projects">projects</Link>
        </Navlink>
        <Navlink>
          <Contact
            onClick={handleOnClick}
            $backgroundPrimary={backgroundPrimary}
            $backgroundSecondary={backgroundSecondary}
          >
            contact
          </Contact>
        </Navlink>
      </Ul>
    </Nav>
  );
}
