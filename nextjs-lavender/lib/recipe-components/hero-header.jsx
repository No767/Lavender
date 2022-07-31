import React from "react";
import { BackgroundImage, Title } from "@mantine/core";

export function HeroHeader({}) {
    return (
        <BackgroundImage
            src="https://live.staticflickr.com/4151/5050352184_58afb46a1c_k.jpg"
            sx={{
                height: 300,
            }}
        >
            <Title
                order={1}
                align="center"
                sx={{
                    color: "#FFFFFF",
                    paddingTop: 125,
                    paddingBottom: 125,
                }}
            >
                Recipe
            </Title>
        </BackgroundImage>
    );
}
