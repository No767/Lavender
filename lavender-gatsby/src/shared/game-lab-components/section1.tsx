import { FC } from "react";
import React from "react";
import { Text, VStack, Link } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

export const GameLabSection1: FC = () => {
    return (
        <>
            <VStack
                align="center"
                direction="column"
                justify="center"
                pt={50}
                spacing={5}
                mx={50}
            >
                <Text fontSize="2xl" size="xl" align="center">
                    Project 1 - Cute Image
                </Text>
                <Link
                    href="https://studio.code.org/projects/gamelab/Rp_SYTcG9KwOgVUT02BxTxAXJgT1KzEI5v0XQSnL75w"
                    isExternal
                    style={{ textDecoration: "none" }}
                >
                    <StaticImage
                        src="../../images/game-lab-assets/U3L3-Cute-Image.png"
                        alt="Cute Image"
                    />
                </Link>
                <Text align="center" size="lg">
                    {" "}
                    So as you can see, this is Game Lab 1, where we had to make
                    some images with lines and different functions pre-compiled
                    by Code.org. This was written in Javascript and used some
                    functions in order to do it. It isn&apos;t the best, but
                    does the job. It&apos;s supposed to be someone with cat
                    ears, but I messed up on the ears
                </Text>
            </VStack>

            <VStack
                align="center"
                direction="column"
                justify="center"
                pt={50}
                spacing={5}
                mx={50}
            >
                <Text fontSize="2xl" size="xl" align="center">
                    Project 2 - Golden Gate Bridge
                </Text>
                <Link
                    href="https://studio.code.org/projects/gamelab/uUyykfp5rZUvI184aEzTB1XLYTMJpAPytp_znNzI3-o"
                    isExternal
                    style={{ textDecoration: "none" }}
                >
                    <StaticImage
                        src="../../images/game-lab-assets/U3L8-Golden-Gate-Bridge.png"
                        alt="GGB"
                    />
                </Link>

                <Text align="center" size="lg">
                    This is the game lab 2, and is supposed to be the Golden
                    Gate Bridge. We mainly wrote this in JS, and used some of
                    the rect functions in order to create it. Also used the arc
                    function in order to do it
                </Text>
            </VStack>

            <VStack
                align="center"
                direction="column"
                justify="center"
                pt={50}
                spacing={5}
                mx={50}
            >
                <Text fontSize="2xl" size="xl" align="center">
                    Project 3 - Snake
                </Text>
                <Link
                    href="https://studio.code.org/projects/gamelab/zrhoKswOPzIgmrsDk7y3O_swac5navId0jQhgNrvjhY"
                    isExternal
                    style={{ textDecoration: "none" }}
                >
                    <StaticImage
                        src="../../images/game-lab-assets/U3L6-Snake.png"
                        alt="GGB"
                    />
                </Link>

                <Text align="center" size="lg">
                    It&apos;s supposed to be a snake but it kinda moves. This
                    one wasn&apos;t as hard to add, compared to the other ones.
                    It uses the randomNumber function in order to assign the
                    position of the circles that form the snake
                </Text>
            </VStack>

            <VStack
                align="center"
                direction="column"
                justify="center"
                pt={50}
                spacing={5}
                mx={50}
            >
                <Text fontSize="2xl" size="xl" align="center">
                    Project 4 - Sprite Scene
                </Text>
                <Link
                    href="https://studio.code.org/projects/gamelab/zrhoKswOPzIgmrsDk7y3O_swac5navId0jQhgNrvjhY"
                    isExternal
                    style={{ textDecoration: "none" }}
                >
                    <StaticImage
                        src="../../images/game-lab-assets/U3L10-Captioned-Sprite-Scene.png"
                        alt="GGB"
                    />
                </Link>

                <Text align="center" size="lg">
                    This is supposed to be a sprite scene, where we use JS in
                    order to control the usage of the sprites, and to create a
                    scene out of it. Mine is some type of hill scene, where
                    there is a rabbit, and some text and the hills in order to
                    make it look nice.
                </Text>
            </VStack>
        </>
    );
};
