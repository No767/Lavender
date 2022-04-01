import React from "react";
import { Text, Group, Title, Divider, BackgroundImage } from "@mantine/core";
import { SiGithub } from "react-icons/si";
import { MdBolt, MdOutlineCollections } from "react-icons/md";

export function Body({}) {
  return (
    <>
      <BackgroundImage
        src="https://raw.githubusercontent.com/No767/Lavender/dev/nextjs-lavender/main-assets/background.png"
        sx={{
          height: 350,
        }}
      >
        <Title
          align="center"
          sx={{
            color: "#F8F9FA",
            paddingTop: 120,
          }}
        >
          Lavender
        </Title>
        <Title
          order={2}
          align="center"
          x={{
            color: "#FFFFFF",
            paddingTop: 35,
          }}
        >
          The Digital Portfolio for CS
        </Title>
      </BackgroundImage>

      <Title
        order={3}
        align="center"
        sx={{
          color: "#F8F9FA",
          paddingTop: 25,
          paddingBottom: 100,
        }}
      >
        So, what are the features of this collection of mini projects?
      </Title>

      <Group position="center" direction="column" spacing="md">
        <MdBolt className="iconSize" />
        <Title
          order={2}
          align="center"
          sx={{
            color: "#F8F9FA",
          }}
        >
          Built For Performance
        </Title>
        <Text
          size="xl"
          align="center"
          color="white"
          sx={{
            paddingBottom: 150,
          }}
        >
          Lavender has been built with{" "}
          <Text
            size="xl"
            variant="link"
            component="a"
            href="https://nextjs.org/"
          >
            Next.js
          </Text>
          , which leverages SSR (Server Side Rendering) to speed up performance.
          With the use Next, Lavender has been faster than ever
        </Text>
      </Group>
      <Group position="center" direction="column" spacing="md">
        <MdOutlineCollections className="iconSize" />
        <Title
          order={2}
          align="center"
          sx={{
            color: "#F8F9FA",
          }}
        >
          A Wide Collection of Websites
        </Title>
        <Text
          size="xl"
          align="center"
          color="white"
          sx={{
            paddingBottom: 150,
          }}
        >
          Lavender is where the mini projects and projects are hosted. As time
          grows, the collection of projects will grow, and be a public resource
          for all to look at.
        </Text>
      </Group>
      <Group position="center" direction="column" spacing="md">
        <SiGithub className="iconSize" />
        <Title
          order={2}
          align="center"
          sx={{
            color: "#F8F9FA",
          }}
        >
          Open Source on GitHub
        </Title>
        <Text
          size="xl"
          align="center"
          color="white"
          sx={{
            paddingBottom: 150,
          }}
        >
          Lavender is also completely open source, and licensed under Apache
          2.0. Thus allowing for anyone from the world to contribute.
        </Text>
      </Group>
    </>
  );
}
