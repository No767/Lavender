import { Body } from "./about-components/body";
import { Profile } from "./about-components/profile";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";

const mainTheme = {
  fontFamily: "Quicksand",
  colorScheme: "dark",
  headings: { fontFamily: "Quicksand" },
};

export default function About() {
  return (
    <MantineProvider theme={mainTheme} withGlobalStyles>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />

      <Profile />

      <Body />

      <Footer />
    </MantineProvider>
  );
}
