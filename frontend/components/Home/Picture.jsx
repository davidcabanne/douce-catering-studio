import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";

import styled, { keyframes } from "styled-components";
import * as _var from "../../styles/variables";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const Container = styled.div`
  position: relative;

  & img {
    position: relative;
    width: 100vw;
    height: 120vh;
    object-fit: cover;
    object-position: center;
    z-index: 2;
    transition: transform 500ms ${_var.cubicBezier};
    animation: ${fadeIn} 750ms ${_var.cubicBezier} forwards;
  }
`;

const Picture = ({ alt, src, index }) => {
  return (
    <Container>
      <Image
        alt={alt}
        src={urlFor(src).url()}
        priority={true}
        quality={100}
        width={1440}
        height={828}
        sizes="(max-width: 300px) 300px, 100vw"
        style={{ transform: `translateX(${index * -100}%)` }}
      />
    </Container>
  );
};
export default Picture;
