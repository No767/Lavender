import { FC } from "react";
import { VStack, HStack, Text, Link } from "@chakra-ui/react";
import { SiChakraui, SiGatsby, SiVercel } from "react-icons/si";
import React from "react";

export const Footer: FC = () => {
    return (
        <>
            <VStack pt={100}>
                <Text>Built with and powered by</Text>
                <HStack spacing={15}>
                    <Link
                        href="https://www.gatsbyjs.com/"
                        isExternal
                        style={{ textDecoration: "none" }}
                    >
                        <SiGatsby size={24} />
                    </Link>
                    <Link
                        href="https://chakra-ui.com/"
                        isExternal
                        style={{ textDecoration: "none" }}
                    >
                        <SiChakraui size={24} />
                    </Link>
                    <Link
                        href="https://vercel.com/"
                        isExternal
                        style={{ textDecoration: "none" }}
                    >
                        <SiVercel size={24} />
                    </Link>
                </HStack>
                <Text pt={5} pb={5} align="center">
                    © 2022 - Licensed under Apache-2.0
                </Text>
            </VStack>
        </>
    );
};
