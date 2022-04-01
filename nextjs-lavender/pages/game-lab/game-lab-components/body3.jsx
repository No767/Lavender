import React from "react";
import { Title, Stack, Image, Text } from "@mantine/core";

export function Body3({}) {
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
          Project 7 - Fly Rotation with Keyboard Inputs
        </Title>
        <Image
          alt="Game Lab 7"
          src="https://raw.githubusercontent.com/No767/Lavender/dev/nextjs-lavender/pages/game-lab-assets/U3L15-Project-7.png"
          component="a"
          href="https://studio.code.org/projects/gamelab/HmMj36Vw5oP6Wo8QXgWHQdxv4BIdWD8mA9JonW2D6QE"
        />
        <Text size="lg" align="center">
          This was one of the interesting ones in my opinion. This is supposed
          to be a fly, but for each of the keys (left, right, up and down) you
          pressed, the fly would switch it's rotation. This was done using the
          rotation method. These were made with sprites from Code.org. And this
          project was kinda challenging, but I managed to figure it out at the
          end
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
          Project 8 - Interactive Card
        </Title>
        <Image
          alt="Game Lab 8"
          src="https://raw.githubusercontent.com/No767/Lavender/dev/nextjs-lavender/pages/game-lab-assets/U3L17-Interactive-Card.png"
          component="a"
          href="https://studio.code.org/projects/gamelab/EXiarxcuMu5dSgclq06FmsJ444z3COCueyBjuR7YOUo"
        />
        <Text size="lg" align="center">
          This one was by far one of the hardest ones I did. I kept on getting
          an issue with the sprites, and whenever you used a counter pattern or
          some type of rotation with random numbers, the sprites was stack each
          other. This was mostly made with sprites that I made (which was the
          present box) and sprites from code.org. The idea and theme behind this
          was influenced by some of the example ones, but I wanted it to kinda
          reset itself. The challenge in this project was mainly with the
          sprites and debugging the code for hours on end
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
          Project 9 - Side Scroller
        </Title>
        <Image
          alt="Game Lab 9"
          src="https://raw.githubusercontent.com/No767/Lavender/dev/nextjs-lavender/pages/game-lab-assets/U3L20-Side-Scroller%20(1).png"
          component="a"
          href="https://studio.code.org/projects/gamelab/Uk4Oj3SAOSJ3Z1RblrkOagjI967VvnMdIyx7bV_P0Pg"
        />
        <Text size="lg" align="center">
          This is basically a side scroller game. If you have played the dino
          game on chrome, this is the same concept. This was made with a
          partner, and the idea was that the carrots gave you the points, while
          the rocks took health away. You could use the arrow keys in order to
          avoid them. This one was somewhat chanllenging, but not that much
        </Text>
      </Stack>
    </>
  );
}
