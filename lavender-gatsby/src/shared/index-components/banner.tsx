import { FC } from 'react'
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {Box} from '@chakra-ui/react'

export const IndexBanner: FC = () => {
    return (
        <>
        <Box>
        <StaticImage
            src="../../images/banner-assets/index-banner-v1.png" alt="Banner" height={350}/>
        </Box>
        </>
    );
}