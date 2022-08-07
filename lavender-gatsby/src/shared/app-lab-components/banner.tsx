import { FC } from "react";
import React from "react";
import { Box, Center, Heading, Divider } from "@chakra-ui/react";

export const AppLabBanner: FC = () => {
    return (
        <>
            <Box pt={25}>
                <Center>
                    <Heading as="h1" size="2xl" textAlign="center">
                        App Lab
                    </Heading>
                </Center>
            </Box>
            <Center>
                <Divider
                    pt={7}
                    orientation="horizontal"
                    colorScheme="white"
                    style={{ width: "50%" }}
                />
            </Center>
        </>
    );
};
