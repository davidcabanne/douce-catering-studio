import groq from "groq";
import client from "../client";
import * as _var from "../styles/variables";

import Layout from "../components/Layout";
import Section from "../components/Section";
import { Container, Main, Grid } from "../components/About/styles";

export default function About({ content }) {
  const handleRenderContent = (content) => {
    const { title, subtitle, description, body } = content[0];

    const list = body
      .filter((item) => item.listItem)
      .map((item) => {
        const { children } = item;
        return children;
      });

    return (
      <>
        <Main>
          <h2>{title}</h2>
          <span>{subtitle}</span>
          <p>{description}</p>
        </Main>
        <Grid>
          <div>
            <h3>{body[0].children[0].text}</h3>
            <p>{body[1].children[0].text}</p>
            <p>{body[2].children[0].text}</p>
            <a
              href="mailto:hi@doucecateringstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", cursor: "pointer" }}
            >
              <h3 style={{ marginTop: `${_var.marginL}` }}>contact us!</h3>
            </a>
          </div>
          <div>
            <h3>{body[4].children[0].text}</h3>
            <ul>
              {list.map((item) => (
                <li key={item[0]._key}>
                  <strong>{item[0].text}</strong>
                  {item[1]?.text}
                </li>
              ))}
            </ul>
          </div>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Layout backgroundPrimary>
        <Section>
          <Container>{handleRenderContent(content)}</Container>
        </Section>
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const content = await client.fetch(groq`
      *[_type == "about" ]
    `);
  return {
    props: {
      content,
      revalidate: 10,
    },
  };
}
