import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { useDisclosure } from '@mantine/hooks';
import Head from "next/head";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu"

function MyApp({ Component, pageProps }: AppProps) {
  
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Head>
        <title>Neeki's Portfolio</title>
        <meta name="description" content="Personal portfolio" />
        <meta
          name="keywords"
          content="keywords, for, SEO, separated, by, commas"
        />
        <meta name="author" content="Neeki Askari" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar opened={opened} close={close} open={open}/>
      <Menu opened={opened} close={close}/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
