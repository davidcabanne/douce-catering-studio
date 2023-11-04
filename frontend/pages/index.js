import groq from "groq";
import client from "../client";

import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Home({ homeContent }) {
  return (
    <>
      <Layout>
        <Hero data={homeContent} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const homeContent = await client.fetch(groq`
      *[_type == "home" ]
    `);
  return {
    props: {
      homeContent,
    },
  };
}
