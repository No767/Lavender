import { FC } from "react";
import React from "react";
import { Link as GastbyLink } from "gatsby";
import {
    Box,
    Text,
    VStack,
    Menu,
    MenuButton,
    Button,
    Link,
    MenuList,
    MenuItem,
    Divider,
    Center,
    Heading,
} from "@chakra-ui/react";
import { MdHome, MdOutlineInfo, MdOutlineSmartphone } from "react-icons/md";
import { BsEggFried, BsController, BsBook } from "react-icons/bs";

export const IndexBanner: FC = () => {
    return (
        <>
            <Box>
                <VStack
                    align="center"
                    direction="column"
                    justify="center"
                    pt={25}
                    spacing={5}
                    mx={50}
                >
                    <Heading as="h1" size="2xl" textAlign="center">
                        Lavender
                    </Heading>
                    <Text fontSize="2xl" align="center">
                        The Digital Portfolio for CS
                    </Text>

                    <Menu size="lg">
                        <MenuButton
                            as={Button}
                            leftIcon={<BsBook />}
                            borderColor="gray.500"
                            size="lg"
                            variant="outline"
                        >
                            Portfolio
                        </MenuButton>
                        <MenuList>
                            <Link
                                as={GastbyLink}
                                to="/"
                                style={{ textDecoration: "none" }}
                            >
                                <MenuItem icon={<MdHome />}>Site Home</MenuItem>
                            </Link>
                            <Link
                                as={GastbyLink}
                                to="/home"
                                style={{ textDecoration: "none" }}
                            >
                                <MenuItem icon={<MdHome />}>
                                    Portfolio Home
                                </MenuItem>
                            </Link>
                            <Link
                                as={GastbyLink}
                                to="/about"
                                style={{ textDecoration: "none" }}
                            >
                                <MenuItem icon={<MdOutlineInfo />}>
                                    About
                                </MenuItem>
                            </Link>

                            <Link
                                as={GastbyLink}
                                to="/recipe"
                                style={{ textDecoration: "none" }}
                            >
                                <MenuItem icon={<BsEggFried />}>
                                    Recipe
                                </MenuItem>
                            </Link>
                            <Link
                                as={GastbyLink}
                                to="/game-lab"
                                style={{ textDecoration: "none" }}
                            >
                                <MenuItem icon={<BsController />}>
                                    Game Lab
                                </MenuItem>
                            </Link>

                            <Link
                                as={GastbyLink}
                                to="/app-lab"
                                style={{ textDecoration: "none" }}
                            >
                                <MenuItem icon={<MdOutlineSmartphone />}>
                                    App Lab
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </VStack>
                <Center>
                    <Divider
                        pt={7}
                        orientation="horizontal"
                        colorScheme="white"
                        style={{ width: "50%" }}
                    />
                </Center>
            </Box>
        </>
    );
};
