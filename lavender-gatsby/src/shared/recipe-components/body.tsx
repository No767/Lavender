import { FC } from "react";
import React from "react";
import {
    Text,
    Center,
    VStack,
    Link,
    Heading,
    Divider,
    ListItem,
    OrderedList,
    UnorderedList,
    Box,
} from "@chakra-ui/react";

export const RecipeBody: FC = () => {
    return (
        <>
            <Box pt={25}>
                <Center>
                    <Heading as="h1" size="2xl" textAlign="center">
                        Recipe - Homemade Wonton
                    </Heading>
                </Center>
            </Box>
            <Center>
                <Divider
                    pt={7}
                    orientation="horizontal"
                    colorScheme="white"
                    style={{ width: "50%" }}
                />
            </Center>
            <VStack
                align="center"
                direction="column"
                justify="center"
                pt={25}
                spacing={5}
                mx={50}
            >
                <Text size="xl" align="center">
                    Wontons have been something that I&apos;ve always eaten
                    before. This is a traditional Chinese dish, where it is just
                    wrapped dumplings in a soup (usually chicken) and served
                    hot. This is also sold at stores, but I prefer homemade
                    versions of it. It&apos;s a dish that can fill you up and is
                    really good combined with chicken broth. And it&apos;s best
                    served on cold days, where the heat of the soup will fill
                    your tummy up.
                </Text>
            </VStack>

            <VStack
                align="center"
                direction="column"
                justify="center"
                pt={25}
                spacing={5}
                mx={50}
            >
                <Text size="lg" fontSize="lg" align="center">
                    The ingredients that you will need are:
                </Text>
                <Center>
                    <UnorderedList>
                        <ListItem>Wonton Wrappers</ListItem>
                        <ListItem>Water</ListItem>
                        <ListItem>Meat</ListItem>
                        <ListItem>
                            Chicken Broth (or soup of your choice)
                        </ListItem>
                    </UnorderedList>
                </Center>
            </VStack>

            <VStack
                align="center"
                direction="column"
                justify="center"
                pt={50}
                spacing={5}
                mx={50}
            >
                <Text size="lg" fontSize="lg" align="center">
                    Instructions
                </Text>
                <Center>
                    <OrderedList>
                        <ListItem>
                            Take the wonton wrappers and insert the meat inside
                        </ListItem>
                        <ListItem>
                            Take one corner, and wrap it to the other. This
                            forms the corners that will be used
                        </ListItem>
                        <ListItem>
                            Take the corners and wrap the edges up like a spiral
                            staircase. Then glue it with the water
                        </ListItem>
                        <ListItem>
                            Now you can start preparing the chicken broth, and
                            let it cook it for 5-10 mins
                        </ListItem>
                        <ListItem>
                            Serve it with the soup in a bowl, and enjoy!
                        </ListItem>
                    </OrderedList>
                </Center>
            </VStack>
        </>
    );
};
