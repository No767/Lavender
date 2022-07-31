import { FC } from "react";
import React from "react";
import { Text, Center, VStack } from "@chakra-ui/react";

export const HomeBody: FC = () => {
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
                <Text size="xl" fontSize="xl" align="center" mx={50}>
                    About
                </Text>
                <Text size="lg" pt={15} mx={50} align="center">
                    Hello there. I guess I should introduce myself... I&apos;m
                    Noelle, who is the creator of this site. This is the home
                    page, and this is the portfolio of my works, so you can go
                    check
                </Text>
            </VStack>
        </>
    );
};
