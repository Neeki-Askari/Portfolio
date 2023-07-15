import type { NextPage } from "next";
import Head from "next/head";
import HomeContent from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import { Notifications } from '@mantine/notifications';
import { MantineProvider } from "@mantine/core";


const Home: NextPage = () => {
  return (
    <MantineProvider>
      <Notifications position="bottom-center" zIndex={1000} />
      <Head>
        <title>Next TS Template</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Your Apps Description" />
      </Head>
      <main >
        <HomeContent />
        <About/>
        <Projects />
        <Contact />
      </main>
    </MantineProvider>
  );
};

export default Home;
