import Head from "next/head";
import { useRouter } from "next/router";

import { createGlobalStyle } from "styled-components";
import * as _var from "../styles/variables";
import "../styles/typefaces.css";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul,
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  width: 100vw;
  /* RESPONSIVE HEIGHT FALLBACK for iOS tool bar */
  min-height: 100vh;
  min-height: 100dvh;
  min-height: -webkit-fill-available;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Courier New', sans-serif;
  font-size: 16px;
  overflow-x: hidden;
}

.menuActive {
    height: 100vh;
    height: 100dvh;
    overflow-y: hidden;
  }

html {
  /* RESPONSIVE HEIGHT FALLBACK for iOS tool bar */
  height: -webkit-fill-available;
  font-size: 16px;
  scroll-behavior: smooth;
  background: ${_var.secondary};
}

a:not([class]) {
  text-decoration: none;
  text-decoration-skip-ink: auto;
}

input,
button,
textarea,
select {
  font: inherit;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Kickers', 'Courrier New', sans-serif;
}

h1 {
  font-size: 64px;
}
h2 {
  font-size: 48px;
}
h3 {
  font-size: 26px;
}

p {
  font-weight: 100;
}


/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const handleRenderHeadTitle = () => {
    const BASE_TITLE = "douce Catering Studio";

    if (router.pathname === "/") {
      return "douce catering | traiteur et design culinaire";
    }
    if (router.pathname !== "/") {
      const pathName = router.pathname.split("/")[1];
      const capitalizedPathName =
        pathName.charAt(0).toUpperCase() + pathName.slice(1);
      return `${BASE_TITLE} | ${capitalizedPathName}`;
    }
  };

  const headDescription =
    "Douce est un studio de traiteur et design culinaire basé à Bordeaux";
  const headImage_secure_url =
    "https://doucecateringstudio.local/wp-content/uploads/2023/10/openGraph.png";
  const headImage =
    "http://doucecateringstudio.local/wp-content/uploads/2023/10/openGraph.png";

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>{handleRenderHeadTitle()}</title>
        <meta name="description" content={headDescription} />

        <link rel="icon" href="favicon.ico"></link>

        {/* OPEN GRAPH */}
        <meta property="og:title" content={handleRenderHeadTitle()} />
        <meta property="og:url" content="https://www.doucecateringstudio.com" />
        <meta
          property="og:site_name"
          content="douce catering | traiteur et design culinaire"
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={headDescription} />
        <meta property="og:image:secure_url" content={headImage_secure_url} />
        <meta property="og:image" content={headImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="384" />
        <meta property="og:image:height" content="216" />

        {/* TWITTER CARDS */}
        <meta name="twitter:card" content={handleRenderHeadTitle()} />
        <meta name="twitter:site" content="@Doucecateringstudio" />
        <meta name="twitter:title" content={handleRenderHeadTitle()} />
        <meta name="twitter:description" content={headDescription} />
        <meta name="twitter:image" content={headImage_secure_url} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
