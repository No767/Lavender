import React from "react";
import { BackgroundImage, Text, Title, Stack } from "@mantine/core";

export function Body({}) {
    return (
        <>
            <BackgroundImage
                src="https://raw.githubusercontent.com/No767/Lavender/dev/nextjs-lavender/main-assets/background.png"
                sx={{
                    height: 300,
                }}
            >
                <Title
                    order={1}
                    align="center"
                    sx={{
                        color: "#FFFFFF",
                        paddingTop: 100,
                        paddingBottom: 100,
                    }}
                >
                    Home
                </Title>
            </BackgroundImage>
            <Stack
                align="center"
                justify="center"
                spacing="xl"
                sx={{
                    color: "#FFFFFF",
                    paddingBottom: 200,
                }}
                mx={60}
            >
                <Title
                    order={2}
                    align="center"
                    sx={{
                        paddingTop: 25,
                    }}
                >
                    About
                </Title>
                <Text size="xl" align="center">
                    Hello there. I guess I should introduce myself... I&apos;m
                    Noelle, who is the creator of this site. This is the home
                    page, and this is the portfolio of my works, so you can go
                    check
                </Text>
            </Stack>
        </>
    );
}
