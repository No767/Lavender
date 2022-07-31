import { FC } from "react";
import React from "react";
import { Text, Center, VStack, Link } from "@chakra-ui/react";
import { MdBolt, MdOutlineCollections } from "react-icons/md";
import { SiGithub } from "react-icons/si";

export const IndexBody: FC = () => {
    return (
        <>
            <Center>
                <Text fontSize="2xl" pt={35} mx={50} align="center">
                    Lavender is a Digital Portfolio website used for an class of
                    mine. It is now an archive for all of the work shown here.
                </Text>
            </Center>

            <VStack
                align="center"
                direction="column"
                justify="center"
                pt={100}
                spacing={5}
                mx={50}
            >
                <MdBolt size="175px" color="#FFFFFF" />
                <Text fontSize="2xl" pt={15} mx={50} align="center">
                    It's Ridiculously Fast
                </Text>
                <Text fontSize="xl" align="center">
                    Lavender is powered by{" "}
                    <Link href="https://www.gatsbyjs.com/" isExternal>
                        Gastby
                    </Link>
                    , which is the fastest static site generator framework seen
                    so far. Along with deployment to Vercel and Edge Caching,
                    Lavender has been faster than ever
                </Text>
            </VStack>

            <VStack
                align="center"
                direction="column"
                justify="center"
                pt={175}
                spacing={5}
                mx={50}
            >
                <MdOutlineCollections size="175px" color="#FFFFFF" />
                <Text fontSize="2xl" pt={15} mx={50} align="center">
                    A Wide Collection of Websites
                </Text>
                <Text fontSize="xl" align="center">
                    Lavender is where the mini projects and projects are hosted.
                    As time grows, the collection of projects will grow, and be
                    a public resource for all to look at.
                </Text>
            </VStack>

            <VStack
                align="center"
                direction="column"
                justify="center"
                pt={175}
                spacing={5}
                mx={50}
            >
                <SiGithub size="175px" color="#FFFFFF" />
                <Text fontSize="2xl" pt={15} mx={50} align="center">
                    Open Source on GitHub
                </Text>
                <Text fontSize="xl" align="center">
                    Lavender is also completely open source, and licensed under
                    Apache 2.0. Thus allowing for anyone from the world to
                    contribute.
                </Text>
            </VStack>
        </>
    );
};
