import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import {
  MantineProvider,
  BackgroundImage,
  Title,
  Stack,
  Image,
} from "@mantine/core";
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
      <BackgroundImage
        src="https://raw.githubusercontent.com/No767/Lavender/dev/src/assets/img.png"
        sx={{
          height: 300,
        }}
      >
        <Title
          order={1}
          align="center"
          sx={{
            color: "#7a7a7a",
            paddingTop: 125,
            paddingBottom: 125,
          }}
        >
          Game Lab
        </Title>
      </BackgroundImage>
      <Stack
        align="center"
        justify="center"
        spacing="lg"
        sx={{ color: "#FFFFFF" }}
      ></Stack>
    </MantineProvider>
  );
}
