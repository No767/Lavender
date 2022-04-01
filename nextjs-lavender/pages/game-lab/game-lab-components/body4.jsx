import React from "react";
import { Title, Stack, Image, Text } from "@mantine/core";

export function Body4({}) {
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
          Project 10 - Flyer Game
        </Title>
        <Image
          alt="Game Lab 10"
          src="https://raw.githubusercontent.com/No767/Lavender/dev/nextjs-lavender/game-lab-assets/U3L23-Flyer-Game%20(1).png"
          component="a"
          href="https://studio.code.org/projects/gamelab/3AfmIVtiF9yfVT3TxNcLnzQ1tpKom33LwyMr8Dq_cHc"
        />
        <Text size="lg" align="center">
          This is a flyer game, and it`&#39;`s designed to be rigged. There are
          creatures and if you touched them, you basically get sent flying off.
          The idea is that if you fell out of bounds, you would lose the game.
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
          Project 11 - Design A Game
        </Title>
        <Image
          alt="Game Lab 10"
          src="https://raw.githubusercontent.com/No767/Lavender/dev/nextjs-lavender/game-lab-assets/U3-L27-Design-A-Game.png"
          component="a"
          href="https://studio.code.org/projects/gamelab/zPZQcTSa5ohRqZum6y3ySrvH2Ycfimu2N5T1cRXEuKw"
        />
        <Text size="lg" align="center">
          As you can see here, this is meant to be a frogger game. The main
          player is that frog, and you have to avoid the balls rolling in your
          way. And yes the name of it is literally called `&#34;`Don't touch my
          balls`&#34;`.
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
          Project 12 - Virtual Pet Project
        </Title>
        <Image
          alt="Game Lab 12"
          src="https://raw.githubusercontent.com/No767/Lavender/dev/nextjs-lavender/game-lab-assets/U3-L28-Virtual-Pet-Project.png"
          component="a"
          href="https://studio.code.org/projects/gamelab/l5u90hhJDPkgzsn8fN2891Xf43sRmCIZnigjXyxoUCw"
        />
        <Text size="lg" align="center" pb={50}>
          This one is the final project. This one is the virtual pet project,
          where the user is supposed to take care of the pet and essentially
          make sure it doesn`&#39;`t pass away. If the pet does pass away, then
          it`&#39;`s game over. The idea of it is from Tamagotchi, which was a
          really popular toy back in the 2000`&#39;`s.
        </Text>
      </Stack>
    </>
  );
}
