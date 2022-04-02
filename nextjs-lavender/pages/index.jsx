import { Footer } from "../lib/index-components/footer";
import { Body } from "../lib/index-components/body";
import { Navbar } from "../lib/index-components/navbar";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

const mainTheme = {
  fontFamily: "Quicksand",
  colorScheme: "dark",
  headings: { fontFamily: "Quicksand" },
};
export default function Home() {
  return (
    <MantineProvider theme={mainTheme} withGlobalStyles>
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Navbar />
        <Body />
        <Footer />
      </div>
    </MantineProvider>
  );
}
