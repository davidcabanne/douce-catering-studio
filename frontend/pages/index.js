import groq from "groq";
import client from "../client";

import Layout from "../components/Layout";
import Hero from "../components/Home/Hero";

export default function Home({ content }) {
  return (
    <Layout>
      <Hero data={content} />
    </Layout>
  );
}

export async function getStaticProps() {
  const content = await client.fetch(groq`
  *[_type == "home"] {
    ...,
    "Image": Image.asset->{
      url,
      metadata {
        lqip,
        blurHash,
        palette,
      }
    }
  }
    `);

  return {
    props: {
      content,
      revalidate: 10,
    },
  };
}
