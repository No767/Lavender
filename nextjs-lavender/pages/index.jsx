import Head from 'next/head';
import { Button } from '@mantine/core';
import { AppShell, Header, Text, Grid, Group, Title, Divider} from '@mantine/core';
import { SiGithub, SiNextdotjs, SiNetlify} from 'react-icons/si';
import { BsBook, BsEggFried } from 'react-icons/bs';
import { MantineProvider, Menu } from '@mantine/core';
import { MdHome, MdOutlineInfo, MdVideogameAsset, MdSmartphone, MdBolt, MdOutlineCollections } from 'react-icons/md';


export default function Home() {
  return (
    <MantineProvider theme={{ fontFamily: 'Quicksand', colorScheme: 'dark'}} withGlobalStyles>
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"/>
      </Head>
      
        <AppShell
        padding="md"
        header={<Header height={60} padding="xs">
          
          <Group spacing="xl" position="center">

          <Button variant="outline" style={{ width: 150 }} leftIcon={<SiGithub/>} component="a" href="https://github.com/No767/Lavender">GitHub</Button>
          <Menu control={<Button variant="outline" style={{ width: 150 }} leftIcon={<BsBook/>} ><Text size="sm">Portfolio</Text></Button>} placement="center" size="md">
          <Menu.Item placement="center" icon={<MdHome/>} component="a" href="/home">Home</Menu.Item>
          <Menu.Item placement="center" icon={<MdOutlineInfo/>} component="a" href="/about">About</Menu.Item>
          <Menu.Item placement="center" icon={<BsEggFried/>} component="a" href="/recipe">Recipe</Menu.Item>
          <Menu.Item placement="center" icon={<MdVideogameAsset/>} component="a" href="/game-lab">Game Lab</Menu.Item>
          <Menu.Item placement="center" icon={<MdSmartphone/>} component="a" href="/app-lab">App Lab</Menu.Item>
          </Menu>
          </Group>
          </Header>}
      >
        <Title align="center" sx={(theme) => ({color: theme.colors.gray[0], fontFamily: 'Quicksand', paddingTop: 120})}>Lavender</Title>
        <Title order={2} align="center" sx={(theme) => ({color: theme.colors.gray[0], fontFamily: 'Quicksand', paddingTop: 35})}>The Digital Portfolio for CS</Title>
        <Divider size="sm"  sx={{ marginTop: 100}}/>
        <Title order={3} align="center" sx={(theme) => ({color: theme.colors.gray[0], fontFamily: 'Quicksand', paddingTop: 50, paddingBottom: 100})}>So, what are the features of this collection of mini projects?</Title>

        <Group position="center" direction="column" spacing="md">
          <MdBolt className="iconSize"/>
          <Title order={2} align="center" sx={(theme) => ({color: theme.colors.gray[0], fontFamily: 'Quicksand'})}>Built For Performance</Title>
          <Text size="xl"  align="center" color="white" sx={{ paddingBottom: 150}}>
          Lavender has been built with <Text size="xl" variant="link" component="a" href="https://nextjs.org/">Next.js</Text>, which leverages SSR (Server Side Rendering) to speed up performance. 
          With the use Next, Lavender has been faster than ever
          </Text>
        </Group>
        <Group position="center" direction="column" spacing="md">
          < MdOutlineCollections className="iconSize"/>
          <Title order={2} align="center" sx={(theme) => ({color: theme.colors.gray[0], fontFamily: 'Quicksand'})}>A Wide Collection of Websites</Title>
          <Text size="xl"  align="center" color="white" sx={{ paddingBottom: 150}}>
          Lavender is where the mini projects and projects are hosted. As time grows, the collection of projects will grow, and be a public resource for all to look at.
          </Text>
        </Group>
        <Group position="center" direction="column" spacing="md">
          <SiGithub className="iconSize"/>
          <Title order={2} align="center" sx={(theme) => ({color: theme.colors.gray[0], fontFamily: 'Quicksand'})}>Open Source on GitHub</Title>
          <Text size="xl"  align="center" color="white" sx={{ paddingBottom: 150}}>
          Lavender is also completely open source, and licensed under Apache 2.0. Thus allowing for anyone from the world to contribute.
          </Text>
        </Group>
        <Group position="center" direction="column" spacing="sm">
          <Text size="md" align="center" color="white">Built With and Powered By</Text>
          <Grid gutter="xl">
            <Grid.Col span={4}><SiNextdotjs className="iconColor"/></Grid.Col>
            <Grid.Col span={4}><SiNetlify className="iconColor"/></Grid.Col>
          </Grid>
        </Group>
        <Text size="md" align="center" color="white" sx={{ paddingTop: 30, paddingBottom: 30}}>©2021 No767 - Licensed under Apache 2.0</Text>
      </AppShell>
      
    </div>
    </MantineProvider>
  )
}
