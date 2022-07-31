import { FC } from "react";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box } from "@chakra-ui/react";

export const HomeBanner: FC = () => {
    return (
        <>
            <Box>
                <StaticImage
                    src="../../images/banner-assets/home-banner.png"
                    alt="Banner"
                    height={350}
                />
            </Box>
        </>
    );
};
