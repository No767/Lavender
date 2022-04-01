import React from "react";
import { Text, Title, Stack, List, Divider } from "@mantine/core";

export function Body({}) {
  return (
    <>
      <Stack
        align="center"
        justify="center"
        spacing="xl"
        mx={100}
        sx={{ color: "#FFFFFF" }}
      >
        <Title order={2} align="center" pt={25}>
          Recipe - Homemade Wonton
        </Title>
        <Title order={4} align="center">
          Description
        </Title>
        <Text size="xl" align="center" color="white">
          Wontons have been something that I’ve always eaten before. This is a
          traditional Chinese dish, where it is just wrapped dumplings in a soup
          (usually chicken) and served hot. This is also sold at stores, but I
          prefer homemade versions of it. It’s a dish that can fill you up and
          is really good combined with chicken broth. And it’s best served on
          cold days, where the heat of the soup will fill your tummy up.
        </Text>
      </Stack>
      <Divider
        mx={250}
        mt={50}
        sx={{
          color: "#FFFFFF",
        }}
      />
      <Stack
        align="center"
        justify="center"
        spacing="xl"
        mx={100}
        sx={{ color: "#FFFFFF" }}
      >
        <Title order={4} align="center" pt={50}>
          The ingredients that you will need are:
        </Title>
        <List withPadding="true" sx={{ color: "#FFFFFF" }} size="lg">
          <List.Item>Wonton Wrappers</List.Item>
          <List.Item>Water</List.Item>
          <List.Item>Meat</List.Item>
          <List.Item>Chicken broth (or soup of choice)</List.Item>
        </List>
      </Stack>

      <Stack
        align="center"
        justify="center"
        spacing="xl"
        mx={100}
        sx={{ color: "#FFFFFF" }}
      >
        <Title order={4} align="center" pt={50}>
          Instructions
        </Title>
        <List
          withPadding="true"
          sx={{ color: "#FFFFFF" }}
          type="ordered"
          size="lg"
        >
          <List.Item>
            Take the wonton wrappers and insert the meat inside
          </List.Item>
          <List.Item>
            Take one corner, and wrap it to the other. This forms the corners
            that will be used
          </List.Item>
          <List.Item>
            Take the corners and wrap the edges up like a spiral staircase. Then
            glue it with the water
          </List.Item>
          <List.Item>Repeat steps 1-3 and make more of them</List.Item>
          <List.Item>
            Now you can start preparing the chicken broth, and let it cook it
            for 5-10 mins
          </List.Item>
          <List.Item>Serve it with the soup in a bowl, and enjoy!</List.Item>
        </List>
      </Stack>

      <Text align="center" pt={50} color="white" pb={75}>
        <Text
          variant="link"
          component="a"
          href="https://www.flickr.com/photos/10559879@N00/5050352184"
        >
          "Wonton Noodle Soup - close - Wonton House Swanston AUD9.20"{" "}
        </Text>
        by avlxyz is licensed under
        <Text variant="link" component="a" href="https://mantine.dev">
          {" "}
          CC BY-SA 2.0
        </Text>
      </Text>
    </>
  );
}
