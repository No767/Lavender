import { FC } from "react";
import React from "react";
import { Text, VStack, Link } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

export const GameLabSection3: FC = () => {
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
                    Project 10 - Flyer Game
                </Text>
                <Link
                    href="https://studio.code.org/projects/gamelab/3AfmIVtiF9yfVT3TxNcLnzQ1tpKom33LwyMr8Dq_cHc"
                    isExternal
                    style={{ textDecoration: "none" }}
                >
                    <StaticImage
                        src="../../images/game-lab-assets/U3L23-Flyer-Game.png"
                        alt="GGB"
                    />
                </Link>

                <Text align="center" size="lg">
                    This is a flyer game, and it&apos;s designed to be rigged.
                    There are creatures and if you touched them, you basically
                    get sent flying off. The idea is that if you fell out of
                    bounds, you would lose the game.
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
                    Project 11 - Design A Game
                </Text>
                <Link
                    href="https://studio.code.org/projects/gamelab/zPZQcTSa5ohRqZum6y3ySrvH2Ycfimu2N5T1cRXEuKw"
                    isExternal
                    style={{ textDecoration: "none" }}
                >
                    <StaticImage
                        src="../../images/game-lab-assets/U3-L27-Design-A-Game.png"
                        alt="GGB"
                    />
                </Link>

                <Text align="center" size="lg">
                    As you can see here, this is meant to be a frogger game. The
                    main player is that frog, and you have to avoid the balls
                    rolling in your way.
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
                    Project 12 - Virtual Pet Project
                </Text>
                <Link
                    href="https://studio.code.org/projects/gamelab/l5u90hhJDPkgzsn8fN2891Xf43sRmCIZnigjXyxoUCw"
                    isExternal
                    style={{ textDecoration: "none" }}
                >
                    <StaticImage
                        src="../../images/game-lab-assets/U3-L28-Virtual-Pet-Project.png"
                        alt="GGB"
                    />
                </Link>

                <Text align="center" size="lg">
                    This one is the final project. This one is the virtual pet
                    project, where the user is supposed to take care of the pet
                    and essentially make sure it doesn&apos;t pass away. If the
                    pet does pass away, then it&apos;s game over. The idea of it
                    is from Tamagotchi, which was a really popular toy back in
                    the 2000&apos;s.
                </Text>
            </VStack>
        </>
    );
};
