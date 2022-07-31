import { FC } from 'react';
import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import {Box} from '@chakra-ui/react'

export const RecipeBanner: FC = () => {
    return (
        <>
        <Box>
        <StaticImage
            src="../../images/banner-assets/recipe-banner-v2.png" alt="Banner" height={500}/>
        </Box>
        </>
    );
}