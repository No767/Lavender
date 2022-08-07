import { FC } from "react";
import React from "react";
import {
    Text,
    Center,
    VStack,
    Link,
    Heading,
    Divider,
    HStack,
    Box,
    SimpleGrid,
    Show,
    Hide,
    Button,
} from "@chakra-ui/react";
import { Link as GastbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
    SiGithub,
    SiGitlab,
    SiPython,
    SiJava,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiGatsby,
    SiFastapi,
    SiDjango,
    SiEclipsevertdotx,
    SiSpring,
    SiUbuntu,
    SiFedora,
    SiOpensuse,
    SiCentos,
    SiArchlinux,
} from "react-icons/si";

export const AboutBody: FC = () => {
    return (
        <>
            <VStack
                align="center"
                direction="column"
                justify="center"
                pt={25}
                spacing={5}
                mx={50}
            >
                <StaticImage
                    src="../../images/misc-assets/noelle-pfp-2.png"
                    alt="It's my pfp lmao"
                />
                <Heading as="h5" size="lg">
                    Noelle
                </Heading>
                <Text size="lg" fontSize="lg" align="center" mx={50}>
                    Discord Bot + Full Stack Web Developer
                </Text>
                <Text size="lg" fontSize="lg" align="center" mx={50}>
                    Owner + Lead Developer for{" "}
                    <Link href="https://github.com/No767/Rin" isExternal>
                        Rin
                    </Link>
                    ,{" "}
                    <Link href="https://github.com/No767/Kumiko" isExternal>
                        Kumiko
                    </Link>
                    , and{" "}
                    <Link href="https://github.com/No767/Miku" isExternal>
                        Miku
                    </Link>
                </Text>
                <HStack spacing={5}>
                    <Link
                        href="https://github.com/No767"
                        isExternal
                        style={{ textDecoration: "none" }}
                    >
                        <SiGithub size={24} />
                    </Link>
                    <Link
                        href="https://gitlab.com/No767"
                        isExternal
                        style={{ textDecoration: "none" }}
                    >
                        <SiGitlab size={24} />
                    </Link>
                </HStack>
            </VStack>
            <Center>
                <Divider
                    mt={50}
                    mx={250}
                    style={{ backgroundColor: "#FFFFFF" }}
                />
            </Center>
            <VStack
                align="center"
                direction="column"
                justify="center"
                pt={25}
                spacing={5}
                mx={50}
            >
                <Text size="xl" fontSize="xl" align="center" color="#FFFFFF">
                    About
                </Text>
                <Text size="lg" fontSize="lg" align="center" mx={50}>
                    Hey there! I&apos;m Noelle, a Full Stack Web Developer. I
                    work with frameworks like React, Next.js, Gastby, Remix, to
                    backend frameworks like Django, FastAPI, Eclipse Vert.x, and
                    many more. In fact, this whole entire website has been
                    written using Gatsby, TypeScript, and Chakra UI
                </Text>
            </VStack>
            <HStack
                spacing={5}
                direction="row"
                align="center"
                justify="center"
                pt={25}
            >
                <SiPython />
                <SiJavascript />
                <SiTypescript />
                <SiJava />
                <SiReact />
                <SiNextdotjs />
                <SiGatsby />
                <SiFastapi />
                <SiDjango />
                <SiEclipsevertdotx />
                <SiSpring />
            </HStack>
            <HStack
                spacing={5}
                direction="row"
                align="center"
                justify="center"
                pt={25}
            >
                <SiUbuntu />
                <SiFedora />
                <SiOpensuse />
                <SiCentos />
                <SiArchlinux />
            </HStack>

            <Center>
                <Text size="xl" fontSize="xl" align="center" pt={35}>
                    Current Projects
                </Text>
            </Center>
            <Hide below="lg">
                <SimpleGrid columns={3} spacing={5} mx={50} pt={35}>
                    <Box>
                        <Center>
                            <StaticImage
                                src="../../images/misc-assets/rin-logo.png"
                                alt="Rin"
                            />
                        </Center>

                        <Text align="center" size="3xl" fontSize="3xl">
                            Rin
                        </Text>
                        <Text size="lg" fontSize="lg" align="center">
                            A Discord bot focused on obtaining data from
                            third-party services with lighting performance in
                            mind
                        </Text>
                        <Center pt={25}>
                            <Link
                                as={GastbyLink}
                                to="https://github.com/No767/Rin"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    variant="outline"
                                    leftIcon={<SiGithub />}
                                    borderColor="gray.500"
                                    size="lg"
                                    as="a"
                                >
                                    GitHub
                                </Button>
                            </Link>
                        </Center>
                    </Box>

                    <Box>
                        <Center>
                            <StaticImage
                                src="../../images/misc-assets/kumiko-logo.png"
                                alt="Kumiko"
                            />
                        </Center>
                        <Text align="center" size="3xl" fontSize="3xl" pt={1}>
                            Kumiko
                        </Text>
                        <Text size="lg" fontSize="lg" align="center">
                            A multipurpose Discord bot built with freedom and
                            choice in mind
                        </Text>
                        <Center pt={25}>
                            <Link
                                as={GastbyLink}
                                to="https://github.com/No767/Kumiko"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    variant="outline"
                                    leftIcon={<SiGithub />}
                                    borderColor="gray.500"
                                    size="lg"
                                    as="a"
                                >
                                    GitHub
                                </Button>
                            </Link>
                        </Center>
                    </Box>

                    <Box>
                        <Center>
                            <StaticImage
                                src="../../images/misc-assets/miku-logo.png"
                                alt="Miku"
                            />
                        </Center>
                        <Text align="center" size="3xl" fontSize="3xl" pt={1}>
                            Miku
                        </Text>
                        <Text size="lg" fontSize="lg" align="center">
                            A Multipurpose bot focused on simplicity, speed and
                            efficiency
                        </Text>
                        <Center pt={25}>
                            <Link
                                as={GastbyLink}
                                to="https://github.com/No767/Miku"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    variant="outline"
                                    leftIcon={<SiGithub />}
                                    borderColor="gray.500"
                                    size="lg"
                                    as="a"
                                >
                                    GitHub
                                </Button>
                            </Link>
                        </Center>
                    </Box>
                </SimpleGrid>
            </Hide>

            <Show below="lg">
                <VStack
                    align="center"
                    direction="column"
                    justify="center"
                    pt={50}
                    spacing={5}
                    mx={50}
                >
                    <VStack mx={50}>
                        <StaticImage
                            src="../../images/misc-assets/rin-logo.png"
                            alt="Rin"
                        />
                        <Text align="center" size="3xl" fontSize="3xl">
                            Rin
                        </Text>
                        <Text size="lg" fontSize="lg" align="center" mx={50}>
                            A Discord bot focused on obtaining data from
                            third-party services with lighting performance in
                            mind
                        </Text>
                        <Center pt={25}>
                            <Link
                                as={GastbyLink}
                                to="https://github.com/No767/Rin"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    variant="outline"
                                    leftIcon={<SiGithub />}
                                    borderColor="gray.500"
                                    size="lg"
                                    as="a"
                                >
                                    GitHub
                                </Button>
                            </Link>
                        </Center>
                    </VStack>

                    <VStack mx={50} pt={75}>
                        <StaticImage
                            src="../../images/misc-assets/kumiko-logo.png"
                            alt="Kumiko"
                        />
                        <Text align="center" size="3xl" fontSize="3xl">
                            Kumiko
                        </Text>
                        <Text size="lg" fontSize="lg" align="center" mx={50}>
                            A multipurpose Discord bot built with freedom and
                            choice in mind
                        </Text>
                        <Center pt={25}>
                            <Link
                                as={GastbyLink}
                                to="https://github.com/No767/Kumiko"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    variant="outline"
                                    leftIcon={<SiGithub />}
                                    borderColor="gray.500"
                                    size="lg"
                                    as="a"
                                >
                                    GitHub
                                </Button>
                            </Link>
                        </Center>
                    </VStack>

                    <VStack mx={50} pt={75}>
                        <StaticImage
                            src="../../images/misc-assets/miku-logo.png"
                            alt="Miku"
                        />
                        <Text align="center" size="3xl" fontSize="3xl">
                            Miku
                        </Text>
                        <Text size="lg" fontSize="lg" align="center" mx={50}>
                            A Multipurpose bot focused on simplicity, speed and
                            efficiency
                        </Text>
                        <Center pt={25}>
                            <Link
                                as={GastbyLink}
                                to="https://github.com/No767/Miku"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    variant="outline"
                                    leftIcon={<SiGithub />}
                                    borderColor="gray.500"
                                    size="lg"
                                    as="a"
                                >
                                    GitHub
                                </Button>
                            </Link>
                        </Center>
                    </VStack>
                </VStack>
            </Show>
        </>
    );
};
