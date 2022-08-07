import { FC } from "react";
import React from "react";
import { Link as GastbyLink } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
    Show,
    Hide,
    useDisclosure,
    useColorMode,
    useColorModeValue,
    Button,
    HStack,
    Flex,
    Spacer,
    VStack,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Divider,
} from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { MdHome, MdOutlineInfo, MdOutlineSmartphone } from "react-icons/md";
import { BsEggFried, BsController, BsBook } from "react-icons/bs";

export const NavBarMain: FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const { toggleColorMode } = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    return (
        <>
            <Flex alignItems="center" pt={3} mx={5}>
                <Link href="/" style={{ textDecoration: "none" }}>
                    <StaticImage
                        src="../../images/logos/lavender-logo-64.svg"
                        alt="Lavender's Logo"
                    />
                </Link>
                <Spacer />
                <Hide below="md">
                    <HStack spacing={4} pt={3} mx={5} justify="flex-end">
                        <IconButton
                            aria-label="Switch to light or dark mode"
                            variant="outline"
                            borderColor="gray.500"
                            size="lg"
                            onClick={toggleColorMode}
                            icon={<SwitchIcon />}
                        />
                        <Link
                            as={GastbyLink}
                            to="https://github.com/No767/Lavender"
                            style={{ textDecoration: "none" }}
                        >
                            <Button
                                variant="outline"
                                leftIcon={<SiGithub />}
                                borderColor="gray.500"
                                size="lg"
                                as="a"
                            >
                                GitHub
                            </Button>
                        </Link>
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
                                    <MenuItem icon={<MdHome />}>
                                        Site Home
                                    </MenuItem>
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
                    </HStack>
                </Hide>
                <Show below="md">
                    <IconButton
                        // @ts-ignore
                        ref={btnRef}
                        aria-label="Open Navbar"
                        size="lg"
                        colorScheme="white"
                        borderColor="gray.500"
                        onClick={onOpen}
                        variant="outline"
                        icon={<AiOutlineMenu />}
                    />

                    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerBody>
                                <VStack spacing={4} pt={15}>
                                    <IconButton
                                        aria-label="Switch to light or dark mode"
                                        variant="outline"
                                        borderColor="gray.500"
                                        size="lg"
                                        onClick={toggleColorMode}
                                        icon={<SwitchIcon />}
                                    />
                                    <Link href="https://github.com/No767/Kumiko">
                                        <Button
                                            variant="outline"
                                            leftIcon={<SiGithub />}
                                            borderColor="gray.500"
                                            size="lg"
                                            as="a"
                                        >
                                            GitHub
                                        </Button>
                                    </Link>
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
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <MenuItem icon={<MdHome />}>
                                                    Site Home
                                                </MenuItem>
                                            </Link>
                                            <Link
                                                as={GastbyLink}
                                                to="/home"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <MenuItem icon={<MdHome />}>
                                                    Portfolio Home
                                                </MenuItem>
                                            </Link>
                                            <Link
                                                as={GastbyLink}
                                                to="/about"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <MenuItem
                                                    icon={<MdOutlineInfo />}
                                                >
                                                    About
                                                </MenuItem>
                                            </Link>

                                            <Link
                                                as={GastbyLink}
                                                to="/recipe"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <MenuItem icon={<BsEggFried />}>
                                                    Recipe
                                                </MenuItem>
                                            </Link>
                                            <Link
                                                as={GastbyLink}
                                                to="/game-lab"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <MenuItem
                                                    icon={<BsController />}
                                                >
                                                    Game Lab
                                                </MenuItem>
                                            </Link>

                                            <Link
                                                as={GastbyLink}
                                                to="/app-lab"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                <MenuItem
                                                    icon={
                                                        <MdOutlineSmartphone />
                                                    }
                                                >
                                                    App Lab
                                                </MenuItem>
                                            </Link>
                                        </MenuList>
                                    </Menu>
                                </VStack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Show>
            </Flex>
        </>
    );
};
