import { Body1 } from "../../lib/game-lab-components/body1";
import { Body2 } from "../../lib/game-lab-components/body2";
import { Body3 } from "../../lib/game-lab-components/body3";
import { Body4 } from "../../lib/game-lab-components/body4";
import { HeroHeader } from "../../lib/game-lab-components/hero-header";
import { Navbar } from "../../lib/index-components/navbar";
import { Footer } from "../../lib/index-components/footer";
import { MantineProvider } from "@mantine/core";
import Head from "next/head";

const mainTheme = {
  fontFamily: "Quicksand",
  colorScheme: "dark",
  headings: { fontFamily: "Quicksand" },
};

export default function GameLab() {
  return (
    <MantineProvider theme={mainTheme} withGlobalStyles>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <HeroHeader />
      <Body1 />
      <Body2 />

      <Body3 />

      <Body4 />
      <Footer />
    </MantineProvider>
  );
}
