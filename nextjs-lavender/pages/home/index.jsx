import { Body } from "../../lib/recipe-components/home-components/body";
import { Navbar } from "../../lib/index-components/navbar";
import { Footer } from "../../lib/index-components/footer";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";

const mainTheme = {
  fontFamily: "Quicksand",
  colorScheme: "dark",
  headings: { fontFamily: "Quicksand" },
};

export default function Home() {
  return (
    <MantineProvider theme={mainTheme} withGlobalStyles>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />

      <Body />
      <Footer />
    </MantineProvider>
  );
}
