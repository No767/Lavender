import React from "react";
import { Text, Stack, Title, Avatar, Divider, Group } from "@mantine/core";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiTypescript,
  SiUbuntu,
  SiFedora,
  SiOpensuse,
  SiArchlinux,
} from "react-icons/si";

export function Body({}) {
  return (
    <>
      <Stack align="center" justify="center" spacing="lg">
        <Title
          order={3}
          sx={{
            color: "#FFFFFF",
          }}
          pt={25}
        >
          About
        </Title>
        <Text size="lg" color="white" align="center" mx={200} pb={25}>
          Hey there! I&apos;m Noelle, a Full Stack Web Developer. I work with
          frameworks like React and Next.js, to backend frameworks like FastAPI.
          In fact, this whole entire website has been written using Next.js and
          Mantine
        </Text>
      </Stack>
      <Stack align="center" justify="center">
        <Group
          spacing="lg"
          sx={{
            color: "#FFFFFF",
          }}
        >
          <SiPython />
          <SiJavascript />
          <SiTypescript />
          <SiReact />
          <SiNextdotjs />
          <SiFastapi />
          <SiUbuntu />
          <SiFedora />
          <SiOpensuse />
          <SiArchlinux />
        </Group>
      </Stack>
      <Divider
        mx={650}
        mt={25}
        sx={{
          color: "#FFFFFF",
        }}
      />
      <Stack align="center" justify="center" spacing="lg">
        <Title
          order={3}
          sx={{
            color: "#FFFFFF",
          }}
          pt={25}
        >
          Current Projects
        </Title>
        <Stack align="center" justify="center" spacing="lg">
          <Stack align="center" justify="center" spacing="lg" px={50} pb={60}>
            <Avatar
              src="https://raw.githubusercontent.com/No767/Rin/dev/assets/Rin%20Logo%20V4%20(GitHub).png"
              size={256}
            />
            <Title
              size="lg"
              sx={{
                color: "#FFFFFF",
              }}
            >
              Rin
            </Title>
            <Text size="lg" color="white" align="center">
              A Discord bot focused on obtaining data from third-party services
              with lighting performance in mind
            </Text>
          </Stack>
          <Stack align="center" justify="center" spacing="lg" px={50}>
            <Avatar
              src="https://raw.githubusercontent.com/No767/Kumiko/dev/assets/kumiko.jpg"
              size={256}
              radius={256}
            />
            <Title
              size="lg"
              sx={{
                color: "#FFFFFF",
              }}
            >
              Kumiko
            </Title>
            <Text size="lg" color="white" align="center" pb={75}>
              The Multipurpose Version of Rin - Supports Moderation, Economy,
              and much much more
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
