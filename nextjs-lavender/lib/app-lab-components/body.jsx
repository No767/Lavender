import React from "react";
import { BackgroundImage, Title, Stack, Text } from "@mantine/core";
export function Body({}) {
  return (
    <>
      <BackgroundImage
        src="https://raw.githubusercontent.com/No767/Lavender/dev/nextjs-lavender/main-assets/backgroundv3.webp"
        sx={{
          height: 300,
        }}
      >
        <Title
          order={1}
          align="center"
          sx={{
            color: "#FFFFFF",
            paddingTop: 125,
            paddingBottom: 125,
          }}
        >
          App Lab
        </Title>
      </BackgroundImage>
      <Stack
        align="center"
        justify="center"
        spacing="xl"
        mx={100}
        sx={{
          color: "#FFFFFF",
        }}
      >
        <Text size="xl" align="center" color="white" pt={25} pb={25}>
          {" "}
          As of now, this page will remain blank. More content for this will
          come later
        </Text>
      </Stack>
    </>
  );
}
