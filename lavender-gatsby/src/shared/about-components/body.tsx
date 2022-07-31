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
} from "@chakra-ui/react";
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
                        <SiGithub size={24} color="#FFFFFF" />
                    </Link>
                    <Link
                        href="https://gitlab.com/No767"
                        isExternal
                        style={{ textDecoration: "none" }}
                    >
                        <SiGitlab size={24} color="#FFFFFF" />
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
                    written using Gatsby and Chakra UI
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
                <SiUbuntu />
                <SiFedora />
                <SiOpensuse />
                <SiCentos />
                <SiArchlinux />
            </HStack>

            <VStack
                align="center"
                direction="column"
                justify="center"
                pt={50}
                spacing={5}
                mx={50}
            >
                <Text size="xl" fontSize="xl" align="center">
                    Current Projects
                </Text>
                <VStack mx={50}>
                    <StaticImage
                        src="../../images/misc-assets/rin-logo.png"
                        alt="Rin"
                    />
                    <Text align="center" size="3xl" fontSize="3xl">
                        Rin
                    </Text>
                    <Text size="lg" fontSize="lg" align="center" mx={50}>
                        A Discord bot focused on obtaining data from third-party
                        services with lighting performance in mind
                    </Text>
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
                        A multipurpose Discord bot built with freedom and choice
                        in mind
                    </Text>
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
                </VStack>
            </VStack>
        </>
    );
};
