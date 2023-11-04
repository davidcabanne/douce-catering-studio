import styled from "styled-components";
import * as _var from "../styles/variables";

const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(85, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  opacity: 0;
  pointer-events: none;
  z-index: 200;
  transition: opacity 500ms ${_var.cubicBezier};

  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${_var.marginS};
  padding: ${_var.marginM};

  & p,
  a,
  a:visited {
    color: ${_var.black};
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 500;
  }

  & a {
    cursor: pointer;
  }

  & svg {
    align-self: end;
    cursor: pointer;
  }

  @media ${_var.device.tablet_max} {
    & p,
    a,
    a:visited {
      font-size: clamp(16px, 5vw, 32px);
      font-weight: 500;
    }

    & svg {
      width: 32px;
    }
  }
`;

export default function ContactModal({ handleCloseModal, modalActive }) {
  return (
    <Modal className={modalActive ? "active" : ""}>
      <Container>
        <svg
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleCloseModal}
        >
          <path
            d="M13.9021 13.9021C14.6465 13.1576 15.8535 13.1576 16.5979 13.9021L30.5 27.8042L44.4021 13.9021C45.1465 13.1576 46.3535 13.1576 47.0979 13.9021C47.8424 14.6465 47.8424 15.8535 47.0979 16.5979L33.1958 30.5L47.0979 44.4021C47.8424 45.1465 47.8424 46.3535 47.0979 47.0979C46.3535 47.8424 45.1465 47.8424 44.4021 47.0979L30.5 33.1958L16.5979 47.0979C15.8535 47.8424 14.6465 47.8424 13.9021 47.0979C13.1576 46.3535 13.1576 45.1465 13.9021 44.4021L27.8042 30.5L13.9021 16.5979C13.1576 15.8535 13.1576 14.6465 13.9021 13.9021Z"
            fill="black"
          />
        </svg>
        <p>hi@doucecateringstudio.com</p>
        <p>+33 6 71 92 58 80</p>
        <a href="https://www.instagram.com/doucecateringstudio/">instagram</a>
      </Container>
    </Modal>
  );
}
