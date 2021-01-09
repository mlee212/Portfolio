import React from "react";
import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import TopTracks from "../components/TopTracks";
import Timeline from "../components/Timeline";
import { Heading, Text, Box, Divider, List, ListItem } from "@chakra-ui/core";

export default function More() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box pt={5}>
      <Timeline />
      <Heading fontWeight="bold" as="h1" my={8}>
        My Music Right Now
      </Heading>
      <Text>The top ten songs I've been listening to. Updated Daily.</Text>
      <TopTracks />
      <Heading fontWeight="bold" as="h1" my={8}>
        Favorite Tech
      </Heading>
      <Heading as="h2" fontSize="2xl">Productivity</Heading>
      <List>
        <ListItem>M1 Mac Mini (New Addition!)</ListItem>
        <ListItem>Macbook Pro 16"</ListItem>
        <ListItem>iPad Pro 11"</ListItem>
        <ListItem>iPhone 12 Pro</ListItem>
        <ListItem>LG 34" Ultrawide</ListItem>
        <ListItem>Mandalorian Figurine (to yell at when I can't solve a bug)</ListItem>
      </List>
      <Divider my={2}/>
      <Heading as="h2" fontSize="2xl">Downtime</Heading>
      <List>
      <ListItem>PS5 (Currently playing Ghost of Tsushima)</ListItem>
      <ListItem>Xbox Series X</ListItem>
      <ListItem>LG 55" CX</ListItem>
      </List>
      </Box>
    </Container>
  );
}
