import React, { useEffect, useState } from "react";
import Image from "next/image";
import * as _var from "../styles/variables";
import groq from "groq";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";

import { Fade } from "react-awesome-reveal";

import Layout from "../components/Layout";
import Section from "../components/Section";
import {
  Container,
  CardContainer,
  Card,
  CardCopy,
  Title,
  Elements,
  Ul,
} from "../components/Projects/styles";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

export default function Projects({ data }) {
  const [posts, setPosts] = useState([]);
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    setPosts(data);
  }, [data, posts]);

  // handle posts containers
  useEffect(() => {
    const array = [];
    posts
      ?.reduce((accumulator, currentValue, currentIndex, array) => {
        if (currentIndex % 3 === 0) {
          accumulator.push(array.slice(currentIndex, currentIndex + 3));
        }
        return accumulator;
      }, [])
      .forEach((post) => array.push([post[0], post[1], post[2]]));

    if (data && data.length > 1) {
      setContainers(array);
    }
  }, [posts]);

  const handleRenderCard = (firstCard, secondCard, thirdCard, type) => {
    let array = [firstCard, secondCard, thirdCard];

    const post = array.map((post, index) => {
      if (!post) {
        return <CardCopy key={index} />;
      }

      const { _id, title, imageDescription, body } = post;
      const src = post.Image.asset._ref;

      const handleRenderElements = () => {
        if (body) {
          const elements = body.map((item) => {
            if (item.listItem === "bullet") {
              return <li key={item._key}>{item.children[0].text}</li>;
            }
            if (item.listItem !== "bullet") {
              return <p key={item._key}>{item.children[0].text}</p>;
            }
          });

          if (body[0].listItem === "bullet") {
            return <Ul>{elements}</Ul>;
          } else {
            return elements;
          }
        }
      };

      const handleMargin = (index, firstCard, secondCard, thirdCard) => {
        if (index === 0 && firstCard && !secondCard && !thirdCard) {
          return "0px";
        }
      };

      const handleGridOrder = (index, type) => {
        if (type === "odd") {
          if (index === 0) {
            return "firstChild";
          }
          if (index === 1) {
            return "secondChild";
          }
          if (index === 2) {
            return "lastChild";
          }
        }
        if (type === "even") {
          if (index === 2) {
            return "firstChild";
          }
          if (index === 1) {
            return "secondChild";
          }
          if (index === 0) {
            return "lastChild";
          }
        }
      };

      return (
        <Fade key={_id} delay={100}>
          <Card
            key={_id}
            className={handleGridOrder(index, type)}
            style={{
              marginTop: handleMargin(index, firstCard, secondCard, thirdCard),
            }}
          >
            <Image
              src={urlFor(src).url()}
              sizes="(max-width: 300px) 300px, 100vw"
              alt={imageDescription}
              width={1440}
              height={1440}
            />
            <Title>{title}</Title>
            <Elements>{handleRenderElements()}</Elements>
          </Card>
        </Fade>
      );
    });
    return post;
  };

  const handleRenderPosts = (containers) => {
    const renderPosts = containers.map((container, index) => {
      const [...postGroup] = container;

      const type = (index + 1) % 2 == 0 ? "even" : "odd";

      const handleSubGrid = (type) => {
        if (type === "odd") {
          return "subGridReverse";
        }
        if (type === "even") {
          return "subGridRegular";
        }
      };

      return (
        <CardContainer key={index} className={handleSubGrid(type)}>
          <Fade cascade duration={200}>
            {handleRenderCard(postGroup[0], postGroup[1], postGroup[2], type)}
          </Fade>
        </CardContainer>
      );
    });
    return renderPosts;
  };

  return (
    <>
      <Layout backgroundSecondary>
        <Section>
          <Container>
            {containers.length > 1 && handleRenderPosts(containers)}
          </Container>
        </Section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
  return {
    props: {
      data,
    },
  };
}
