import React from "react";
import { Title, Stack, Image, Text } from "@mantine/core";

export function Body2({}) {
  return (
    <>
      <Stack
        align="center"
        justify="center"
        spacing="lg"
        sx={{
          color: "#FFFFFF",
        }}
        pt={50}
        mx={60}
      >
        <Title order={3} align="center" size="lg">
          Project 4 - Sprite Scene
        </Title>
        <Image
          alt="Game Lab 4"
          src="https://raw.githubusercontent.com/No767/Lavender/dev/nextjs-lavender/game-lab-assets/U3L10-Captioned-Sprite-Scene.png"
          component="a"
          href="https://studio.code.org/projects/gamelab/zrhoKswOPzIgmrsDk7y3O_swac5navId0jQhgNrvjhY"
        />
        <Text size="lg" align="center">
          This is supposed to be a sprite scene, where we use JS in order to
          control the usage of the sprites, and to create a scene out of it.
          Mine is some type of hill scene, where there is a rabbit, and some
          text and the hills in order to make it look nice.
        </Text>
      </Stack>

      <Stack
        align="center"
        justify="center"
        spacing="lg"
        sx={{
          color: "#FFFFFF",
        }}
        pt={50}
        mx={60}
      >
        <Title order={3} align="center" size="lg">
          Project 5 - Animated Sprites
        </Title>
        <Image
          alt="Game Lab 5"
          src="https://raw.githubusercontent.com/No767/Lavender/dev/nextjs-lavender/game-lab-assets/U3L13-Mini-Project.png"
          component="a"
          href="https://studio.code.org/projects/gamelab/lS5XQTfcD1UJw7HKnimrxG_pyCq3dsXEPHoVT2_nsLw"
        />
        <Text size="lg" align="center">
          Here I basically created animated sprites, where it moves around.
          It&apos;s supposed to be a teapot scene, but I didn&apos;t really have
          much time and ended up just wrapping it up. As you can see, some of
          them (the table) are hand-drawn, and I would say I&apos;m not the best
          artist so be gentle with it. The theme and idea just randomly came
          into my mind, and I decided to make something like this as well. This
          project wasn&apos;t that challenging, but if I had more time, then
          this project would look a lot better
        </Text>
      </Stack>

      <Stack
        align="center"
        justify="center"
        spacing="lg"
        sx={{
          color: "#FFFFFF",
        }}
        pt={50}
        mx={60}
      >
        <Title order={3} align="center" size="lg">
          Project 6 - Fish Movement with Keyboard Inputs
        </Title>
        <Image
          alt="Game Lab 6"
          src="https://raw.githubusercontent.com/No767/Lavender/dev/nextjs-lavender/game-lab-assets/U3L12-Fish.png"
          component="a"
          href="https://studio.code.org/projects/gamelab/dtxhsHfOSiHJ76kMz-SnwmaRj5Yi6HbNP0CWTOvybAQ"
        />
        <Text size="lg" align="center">
          This is supposed to be fish moving around, and uses keyboard input
          (it&apos;s the left button on your keyboard) in order to move the
          fish. This also introduced the if/else or else if statements. This was
          created with sprites from Code.org&apos;s repo of images. This project
          wasn&apos;t challenging, but it was fun to see those fish move
        </Text>
      </Stack>
    </>
  );
}
