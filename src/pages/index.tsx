import type { NextPage } from "next";
import Head from "next/head";
import HomeContent from "./components/Home";
import About from "./components/About";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next TS Template</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Your Apps Description" />
      </Head>
      <main >
        <HomeContent />
        <About />
      </main>
    </>
  );
};

export default Home;
