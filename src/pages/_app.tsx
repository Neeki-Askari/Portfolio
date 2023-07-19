import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import NavBar from "./components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Neeki's Portfolio</title>
        <meta name="description" content="Sample Web App Description" />
        <meta
          name="keywords"
          content="keywords, for, SEO, separated, by, commas"
        />
        <meta name="author" content="Your Name or Company Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
