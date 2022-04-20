import React from "react";
import { Button } from "@mantine/core";
import { AppShell, Header, Text, Group } from "@mantine/core";
import { SiGithub } from "react-icons/si";
import { BsBook, BsEggFried } from "react-icons/bs";
import { Menu } from "@mantine/core";
import {
  MdHome,
  MdOutlineInfo,
  MdVideogameAsset,
  MdSmartphone,
} from "react-icons/md";

export function Navbar({}) {
  return (
    <AppShell>
      <Header height={60} padding="xs" fixed="true">
        <Group
          spacing="xl"
          position="center"
          sx={{ paddingTop: 10, paddingBottom: 10 }}
        >
          <Button
            variant="outline"
            style={{
              width: 150,
              color: "#FFFFFF",
            }}
            leftIcon={<SiGithub />}
            component="a"
            href="https://github.com/No767/Lavender"
          >
            GitHub
          </Button>
          <Menu
            control={
              <Button
                variant="outline"
                style={{
                  width: 150,
                }}
                leftIcon={<BsBook />}
                sx={{ color: "#FFFFFF" }}
              >
                <Text size="sm">Portfolio</Text>
              </Button>
            }
            placement="center"
            size="md"
          >
            <Menu.Item
              placement="center"
              icon={<MdHome />}
              component="a"
              href="/"
              target="_blank"
            >
              Site Home
            </Menu.Item>
            <Menu.Item
              placement="center"
              icon={<MdHome />}
              component="a"
              href="/home"
              target="_blank"
            >
              Portfolio Home
            </Menu.Item>
            <Menu.Item
              placement="center"
              icon={<MdOutlineInfo />}
              component="a"
              href="/about"
              target="_blank"
            >
              About
            </Menu.Item>
            <Menu.Item
              placement="center"
              icon={<BsEggFried />}
              component="a"
              href="/recipe"
              target="_blank"
            >
              Recipe
            </Menu.Item>
            <Menu.Item
              placement="center"
              icon={<MdVideogameAsset />}
              component="a"
              href="/game-lab"
              target="_blank"
            >
              Game Lab
            </Menu.Item>
            <Menu.Item
              placement="center"
              icon={<MdSmartphone />}
              component="a"
              href="/app-lab"
              target="_blank"
            >
              App Lab
            </Menu.Item>
          </Menu>
        </Group>
      </Header>
    </AppShell>
  );
}
