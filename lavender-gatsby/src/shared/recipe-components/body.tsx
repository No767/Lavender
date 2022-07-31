import { FC } from 'react'
import React from 'react'
import { Text, Center, VStack, Link, Heading, Divider,   List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList, } from '@chakra-ui/react'
import { MdBolt, MdOutlineCollections } from 'react-icons/md'
import { SiGithub } from 'react-icons/si'

export const RecipeBody: FC = () => {
    return (
        <>
        <VStack align="center" direction="column" justify="center" pt={25} spacing={5} mx={50}>
            <Heading size="lg">Recipe - Homemade Wonton</Heading>
            <Text size="xl" align="center">Wontons have been something that I&apos;ve always eaten before. This
          is a traditional Chinese dish, where it is just wrapped dumplings in a
          soup (usually chicken) and served hot. This is also sold at stores,
          but I prefer homemade versions of it. It&apos;s a dish that can fill
          you up and is really good combined with chicken broth. And it&apos;s
          best served on cold days, where the heat of the soup will fill your
          tummy up.</Text>
        </VStack>
        <Center>
        <Divider mt={50} mx={250} style={{backgroundColor: "#FFFFFF"}}/>
        </Center>

        <VStack align="center" direction="column" justify="center" pt={25} spacing={5} mx={50}>
            <Text size="lg" fontSize="lg" align="center">The ingredients that you will need are:</Text>
            <Center>
            <UnorderedList>
                <ListItem>
                    Wonton Wrappers
                </ListItem>
                <ListItem>
                    Water
                </ListItem>
                <ListItem>
                    Meat
                </ListItem>
                <ListItem>
                    Chicken Broth (or soup of your choice)
                </ListItem>
            </UnorderedList>
            </Center>
            
        </VStack>

        <VStack align="center" direction="column" justify="center" pt={50} spacing={5} mx={50}>
            <Text size="lg" fontSize="lg" align="center">Instructions</Text>
            <Center>
            <OrderedList>
                <ListItem>
                Take the wonton wrappers and insert the meat inside
                </ListItem>
                <ListItem>
                Take one corner, and wrap it to the other. This forms the corners
            that will be used
                </ListItem>
                <ListItem>
                Take the corners and wrap the edges up like a spiral staircase. Then
            glue it with the water
                </ListItem>
                <ListItem>
                Now you can start preparing the chicken broth, and let it cook it
            for 5-10 mins
                </ListItem>
                <ListItem>
                Serve it with the soup in a bowl, and enjoy!
                </ListItem>
            </OrderedList>
            </Center>
            
        </VStack>

        <Center>
            <Text size="md" fontSize="md" align="center" pt={50}>
                <Link href="https://www.flickr.com/photos/10559879@N00/5050352184" isExternal>&quot;Wonton Noodle Soup - close - Wonton House Swanston AUD9.20&quot;</Link> by avlxyz is licensed under <Link href="https://www.flickr.com/photos/10559879@N00/5050352184" isExternal>CC BY-SA 2.0</Link>

            </Text>
        </Center>
        
        </>

    );
}