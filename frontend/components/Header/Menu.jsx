import styled, { css } from "styled-components";
import * as _var from "../../styles/variables";

const Container = styled.div`
  position: relative;
  width: 24px;
  height: ${_var.marginM};
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media ${_var.device.tablet_min} {
    display: none;
  }

  & span {
    position: relative;
    width: 100%;
    height: 4px;
    border-radius: 64px;
    background: ${_var.primary};

    ${(props) =>
      (props.$backgroundPrimary || props.$backgroundSecondary) &&
      css`
        background: black;
      `};

    transition: opacity, background, transform 75ms ${_var.cubicBezier};
  }

  &.isActive {
    & span:first-child {
      background: black;
      transform: translateY(8px) rotate(-45deg);
    }
    & span:nth-child(2) {
      background: black;
      opacity: 0;
    }
    & span:last-child {
      background: black;
      transform: translateY(-8px) rotate(45deg);
    }
  }
`;

export default function Menu({
  handleToggleMenu,
  menuActive,
  backgroundPrimary,
  backgroundSecondary,
}) {
  return (
    <Container
      onClick={handleToggleMenu}
      className={menuActive ? "isActive" : ""}
      $backgroundPrimary={backgroundPrimary}
      $backgroundSecondary={backgroundSecondary}
    >
      <span></span>
      <span></span>
      <span></span>
    </Container>
  );
}
