import React from "react";
import {
  Text,
  Stack,
  Title,
  Avatar,
  ActionIcon,
  Divider,
  Group,
} from "@mantine/core";
import { FaGithub, FaGitlab } from "react-icons/fa";

export function Profile({}) {
  return (
    <>
      <Stack align="center" justify="center" spacing="lg" pt={50}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/73260931?v=4"
          radius={360}
          size={256}
        />
        <Title
          order={2}
          sx={{
            color: "#FFFFFF",
          }}
          pt={5}
        >
          Noelle
        </Title>
        <Text color="white">Discord Bot + Full Stack Web Developer</Text>
        <Text color="white">
          Core Maintainer for{" "}
          <Text component="a" href="https://github.com/No767/Rin" color="pink">
            Rin
          </Text>{" "}
          and{" "}
          <Text
            component="a"
            href="https://github.com/No767/Kumiko"
            color="pink"
          >
            Kumiko
          </Text>{" "}
        </Text>
        <Group>
          <ActionIcon
            sx={{
              fontSize: 200,
              color: "#FFFFFF",
            }}
            component="a"
            href="https://github.com/No767"
          >
            <FaGithub />
          </ActionIcon>
          <ActionIcon
            sx={{
              fontSize: 200,
              color: "#FFFFFF",
            }}
            component="a"
            href="https://gitlab.com/No767"
          >
            <FaGitlab />
          </ActionIcon>
        </Group>
      </Stack>
      <Divider
        mx={250}
        mt={50}
        sx={{
          color: "#FFFFFF",
        }}
      />
    </>
  );
}
