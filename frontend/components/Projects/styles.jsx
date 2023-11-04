import styled from "styled-components";
import * as _var from "../../styles/variables";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${_var.marginXL};
`;

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: ${_var.marginXL};
  padding-bottom: ${_var.marginXL};

  @media ${_var.device.tablet_max} {
    display: flex;
    flex-direction: column;
    gap: ${_var.marginXL};
    padding-bottom: 0px;
  }

  &:last-child {
    padding-bottom: 0px;
  }

  &.subGridReverse {
    grid-auto-rows: 1fr;
    grid-auto-flow: column-reverse;
    @media ${_var.device.tablet_max} {
      grid-auto-flow: row;
    }
  }
  &.subGridRegular {
  }

  & div {
    &:has(span) {
      display: none;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: opacity 300ms ${_var.cubicBezier};

  & img {
    width: 100%;
    max-width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 4px;

    @media ${_var.device.tablet_max} {
      aspect-ratio: 16 / 9;
      border-radius: 2px;
    }
  }

  &.firstChild {
    margin-top: 128px;
  }
  &.secondChild {
    margin-top: 64px;
  }
  &.lastChild {
    margin-top: 0px;
  }

  @media ${_var.device.tablet_max} {
    &.firstChild {
      margin-top: 0px;
    }
    &.secondChild {
      margin-top: 0px;
    }
    &.lastChild {
      margin-top: 0px;
    }
  }
`;

export const CardCopy = styled.span`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  visibility: hidden;

  @media ${_var.device.tablet_max} {
    display: none;
  }
`;

export const Title = styled.h3`
  color: ${_var.dark};
  margin-top: ${_var.marginM};
`;

export const Elements = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${_var.marginS};
  gap: ${_var.marginM};
`;

export const Ul = styled.ul`
  position: relative;
  width: 100%;
  margin-top: ${_var.marginS};
  margin-left: 16px;
  list-style-type: disc;
`;
