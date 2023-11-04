import styled from "styled-components";
import * as _var from "../../styles/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: ${_var.marginXXL};
  width: 100%;

  @media ${_var.device.tablet_max} {
    gap: ${_var.marginXL};
  }
`;

export const HeadContainer = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding-top: ${_var.marginL};

  & span {
    font-size: 24px;
  }

  & p {
    font-size: 24px;
  }

  @media ${_var.device.tablet_max} {
    & h2 {
      font-size: 32px;
    }
    & .aboutHeadSpan {
      font-size: 16px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: ${_var.marginS};
  margin-bottom: 24px;

  @media ${_var.device.tablet_max} {
    gap: ${_var.marginXS};
  }
`;

export const Main = ({ children }) => {
  return (
    <HeadContainer>
      <Wrapper>{children}</Wrapper>
    </HeadContainer>
  );
};

export const Grid = styled.div`
  display: grid;
  gap: ${_var.marginXL};
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

  @media ${_var.device.tablet_max} {
    grid-template-columns: 1fr;
  }

  & h3 {
    margin-bottom: 16px;
  }

  & ul {
    list-style: disc;
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    gap: ${_var.marginS};
  }
`;
