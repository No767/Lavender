import { FC } from "react";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box } from "@chakra-ui/react";

export const AppLabBanner: FC = () => {
    return (
        <>
            <Box>
                <StaticImage
                    src="../../images/banner-assets/app-lab-banner-main.png"
                    alt="Banner"
                    height={350}
                    width={1920}
                />
            </Box>
        </>
    );
};
