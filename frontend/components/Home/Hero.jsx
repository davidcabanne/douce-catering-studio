import React, { useState, useEffect } from "react";

import styled from "styled-components";
import * as _var from "../../styles/variables";

import Picture from "./Picture";

const Section = styled.section`
  background: linear-gradient(90deg, #3eb384, #3e92b3);
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  overflow: hidden;
`;

const Inputs = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;
  padding: ${_var.marginS};
  z-index: 50;
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  appearance: none;
  margin: 0;
  display: grid;
  place-content: center;
  width: ${_var.marginM};
  height: 10px;
  cursor: pointer;
  z-index: 51;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(0, 0, 0, 0.15);
    transition: background 500ms ${_var.cubicBezier};
  }

  &.active {
    &::after {
      background: rgba(255, 255, 255, 0.5);
    }
  }
`;

export default function Hero({ data }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data?.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  const handleIndex = (itemIndex) => {
    setIndex(itemIndex);
  };

  const renderImgs = (data) => {
    const imgs = data?.map((item) => {
      const { _id, alt } = item;
      const sourceUrl = item.Image.asset._ref;

      return <Picture key={_id} alt={alt} src={sourceUrl} index={index} />;
    });
    return imgs;
  };

  const renderInputs = (data) => {
    const inputs = data?.map((item, itemIndex) => {
      const { _id } = item;
      return (
        <Input
          key={_id}
          type="checkbox"
          className={itemIndex === index ? "active" : ""}
          onClick={() => handleIndex(itemIndex)}
        />
      );
    });
    return inputs;
  };

  return (
    <Section>
      <Container>
        {renderImgs(data)}
        <Inputs>{renderInputs(data)}</Inputs>
      </Container>
    </Section>
  );
}
