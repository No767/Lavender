import React from "react";
import { Text, Grid, Group } from "@mantine/core";
import { SiNextdotjs, SiNetlify } from "react-icons/si";
export function Footer({}) {
  return (
    <>
      <Group position="center" direction="column" spacing="sm">
        <Text size="md" align="center" color="white">
          Built With and Powered By
        </Text>
        <Grid gutter="xl">
          <Grid.Col span={4}>
            <SiNextdotjs className="iconColor" />
          </Grid.Col>
          <Grid.Col span={4}>
            <SiNetlify className="iconColor" />
          </Grid.Col>
        </Grid>
      </Group>
      <Text
        size="md"
        align="center"
        color="white"
        sx={{
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        ©2021 No767 - Licensed under Apache 2.0
      </Text>
    </>
  );
}
