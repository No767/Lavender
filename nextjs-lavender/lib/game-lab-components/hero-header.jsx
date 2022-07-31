import React from "react";
import { BackgroundImage, Title } from "@mantine/core";

export function HeroHeader({}) {
    return (
        <BackgroundImage
            src="https://raw.githubusercontent.com/No767/Lavender/dev/nextjs-lavender/main-assets/img.png"
            sx={{
                height: 300,
            }}
        >
            <Title
                order={1}
                align="center"
                sx={{
                    color: "#7a7a7a",
                    paddingTop: 125,
                    paddingBottom: 125,
                }}
            >
                Game Lab
            </Title>
        </BackgroundImage>
    );
}
