import { FC } from "react";
import React from "react";
import { Text, VStack, Link } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

export const GameLabSection2: FC = () => {
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
                    Project 5 - Animated Sprites
                </Text>
                <Link
                    href="https://studio.code.org/projects/gamelab/lS5XQTfcD1UJw7HKnimrxG_pyCq3dsXEPHoVT2_nsLw"
                    isExternal
                    style={{ textDecoration: "none" }}
                >
                    <StaticImage
                        src="../../images/game-lab-assets/U3L13-Mini-Project.png"
                        alt="GGB"
                    />
                </Link>

                <Text align="center" size="lg">
                    Here I basically created animated sprites, where it moves
                    around. It&apos;s supposed to be a teapot scene, but I
                    didn&apos;t really have much time and ended up just wrapping
                    it up. As you can see, some of them (the table) are
                    hand-drawn, and I would say I&apos;m not the best artist so
                    be gentle with it. The theme and idea just randomly came
                    into my mind, and I decided to make something like this as
                    well. This project wasn&apos;t that challenging, but if I
                    had more time, then this project would look a lot better
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
                    Project 6 - Fish Movement with Keyboard Inputs
                </Text>
                <Link
                    href="https://studio.code.org/projects/gamelab/dtxhsHfOSiHJ76kMz-SnwmaRj5Yi6HbNP0CWTOvybAQ"
                    isExternal
                    style={{ textDecoration: "none" }}
                >
                    <StaticImage
                        src="../../images/game-lab-assets/U3L12-Fish.png"
                        alt="GGB"
                    />
                </Link>

                <Text align="center" size="lg">
                    This is supposed to be fish moving around, and uses keyboard
                    input (it&apos;s the left button on your keyboard) in order
                    to move the fish. This also introduced the if/else or else
                    if statements. This was created with sprites from
                    Code.org&apos;s repo of images. This project wasn&apos;t
                    challenging, but it was fun to see those fish move
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
                    Project 7 - Fly Rotation with Keyboard Inputs
                </Text>
                <Link
                    href="https://studio.code.org/projects/gamelab/HmMj36Vw5oP6Wo8QXgWHQdxv4BIdWD8mA9JonW2D6QE"
                    isExternal
                    style={{ textDecoration: "none" }}
                >
                    <StaticImage
                        src="../../images/game-lab-assets/U3L15-Project-7.png"
                        alt="GGB"
                    />
                </Link>

                <Text align="center" size="lg">
                    This was one of the interesting ones in my opinion. This is
                    supposed to be a fly, but for each of the keys (left, right,
                    up and down) you pressed, the fly would switch it&apos;s
                    rotation. This was done using the rotation method. These
                    were made with sprites from Code.org. And this project was
                    kinda challenging, but I managed to figure it out at the end
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
                    Project 8 - Interactive Card
                </Text>
                <Link
                    href="https://studio.code.org/projects/gamelab/EXiarxcuMu5dSgclq06FmsJ444z3COCueyBjuR7YOUo"
                    isExternal
                    style={{ textDecoration: "none" }}
                >
                    <StaticImage
                        src="../../images/game-lab-assets/U3L17-Interactive-Card.png"
                        alt="GGB"
                    />
                </Link>

                <Text align="center" size="lg">
                    This one was by far one of the hardest ones I did. I kept on
                    getting an issue with the sprites, and whenever you used a
                    counter pattern or some type of rotation with random
                    numbers, the sprites was stack each other. This was mostly
                    made with sprites that I made (which was the present box)
                    and sprites from code.org. The idea and theme behind this
                    was influenced by some of the example ones, but I wanted it
                    to kinda reset itself. The challenge in this project was
                    mainly with the sprites and debugging the code for hours on
                    end
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
                    Project 9 - Side Scroller
                </Text>
                <Link
                    href="https://studio.code.org/projects/gamelab/Uk4Oj3SAOSJ3Z1RblrkOagjI967VvnMdIyx7bV_P0Pg"
                    isExternal
                    style={{ textDecoration: "none" }}
                >
                    <StaticImage
                        src="../../images/game-lab-assets/U3L20-Side-Scroller.png"
                        alt="GGB"
                    />
                </Link>

                <Text align="center" size="lg">
                    This is basically a side scroller game. If you have played
                    the dino game on chrome, this is the same concept. This was
                    made with a partner, and the idea was that the carrots gave
                    you the points, while the rocks took health away. You could
                    use the arrow keys in order to avoid them. This one was
                    somewhat challenging, but not that much
                </Text>
            </VStack>
        </>
    );
};
