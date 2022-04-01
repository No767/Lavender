import { Body } from "./app-lab-components/body";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";

const mainTheme = {
  fontFamily: "Quicksand",
  colorScheme: "dark",
  headings: { fontFamily: "Quicksand" },
};

export default function AppLab() {
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
