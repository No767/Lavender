import React from "react";
import { Title, Stack, Image, Text } from "@mantine/core";

export function Body1({}) {
    return (
        <>
            <Stack
                align="center"
                justify="center"
                spacing="lg"
                sx={{
                    color: "#FFFFFF",
                }}
                pt={25}
                mx={60}
            >
                <Title order={3} align="center" size="lg">
                    Project 1 - Cute Image
                </Title>
                <Image
                    alt="Game Lab 1"
                    src="https://raw.githubusercontent.com/No767/Lavender/dev/nextjs-lavender/game-lab-assets/U3L3-Cute-Image.png"
                    component="a"
                    href="https://studio.code.org/projects/gamelab/Rp_SYTcG9KwOgVUT02BxTxAXJgT1KzEI5v0XQSnL75w"
                />
                <Text size="lg" align="center">
                    So as you can see, this is Game Lab 1, where we had to make
                    some images with lines and different functions pre-compiled
                    by Code.org. This was written in Javascript and used some
                    functions in order to do it. It isn&apos;t the best, but
                    does the job. It&apos;s supposed to be someone with cat
                    ears, but I messed up on the ears
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
                    Project 2 - Golden Gate Bridge
                </Title>
                <Image
                    alt="Game Lab 2"
                    src="https://raw.githubusercontent.com/No767/Lavender/dev/nextjs-lavender/game-lab-assets/U3L8-Golden-Gate-Bridge.png"
                    component="a"
                    href="https://studio.code.org/projects/gamelab/uUyykfp5rZUvI184aEzTB1XLYTMJpAPytp_znNzI3-o"
                />
                <Text size="lg" align="center">
                    This is the game lab 2, and is supposed to be the Golden
                    Gate Bridge. We mainly wrote this in JS, and used some of
                    the rect functions in order to create it. Also used the arc
                    function in order to do it
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
                    Project 3 - Snake
                </Title>
                <Image
                    alt="Game Lab 3"
                    src="https://raw.githubusercontent.com/No767/Lavender/dev/nextjs-lavender/game-lab-assets/U3L6-Snake.png"
                    component="a"
                    href="https://studio.code.org/projects/gamelab/zrhoKswOPzIgmrsDk7y3O_swac5navId0jQhgNrvjhY"
                />
                <Text size="lg" align="center">
                    It&apos; supposed to be a snake but it kinda moves. This one
                    wasn&apos;t as hard to add, compared to the other ones. It
                    uses the randomNumber function in order to assign the
                    position of the circles that form the snake
                </Text>
            </Stack>
        </>
    );
}
