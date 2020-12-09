import React from "react";
import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import TopTracks from "../components/TopTracks";
import Timeline from "../components/Timeline";
import ProjectCard from "../components/ProjectCard";
import {
  Heading,
  Text,
  Button,
  ButtonGroup,
  useClipboard,
  Box,
  Link,
  Stack,
  Badge,
} from "@chakra-ui/core";

import { motion } from "framer-motion";

const Section = ({ title, children }) => {
  return (
    <Box
      minH="85vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Heading fontWeight="bold" as="h1" size="2xl" mb={4}>
        {title}
      </Heading>
      <Text>{children}</Text>
    </Box>
  );
};

export default function Home() {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  const [value] = React.useState("rajbirsjohar@gmail.com");
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box>
        <Section title="Rajbir Johar">
          <Text fontSize="xl">
            Frontend Developer <br />
            Based in California
          </Text>
          <ButtonGroup mt={4} spacing={1}>
            <Button variant="solid" aria-label="Email" onClick={onCopy}>
              {hasCopied ? "Copied!" : "@ Email"}
            </Button>
            <Link href="https://github.com/r-jo" isExternal>
              <Button variant="ghost">Github</Button>
            </Link>
          </ButtonGroup>
        </Section>
        <Heading fontWeight="bold" as="h1" my={8}>
          What I'm About
        </Heading>
        I'm a frontend web developer based in Southern California 😎 studying
        Computer Science at the University of California at Riverside. I'm
        currently working on{" "}
        <Link href="https://habitle.com" textDecoration="underline" isExternal>
          Habitle
        </Link>
        , a new app that generates a heatmap promoting positive habits through
        visualization.
        <br />
        <br />
        If I'm not coding, you can catch me perfecting the art of the grilled
        cheese 🥪 or building bespoke keyboards ⌨️. Gotta invest in your tool of
        trade, am I right? I'm typing on my Iron165 (my favorite board ever)
        with lubricated cream switches.
        <br />
        <Heading fontWeight="bold" as="h1" my={8}>
          Featured Projects
        </Heading>
        <motion.div initial="hidden" animate="visible" variants={list}>
          <Stack spacing={4}>
            <motion.div variants={item}>
              <ProjectCard
                title="Citrushack"
                href="https://citrushack.com"
                image="/images/citrushack.png"
                category="Hackathon"
              >
                The website used by hundreds of students to interact and
                participate in the annual Citrushack hackathon. Coming Winter
                2021.
                <Stack isInline mt={4}>
                  <Badge colorScheme="green">React</Badge>
                  <Badge colorScheme="orange">JS</Badge>
                  <Badge colorScheme="purple">HTML</Badge>
                  <Badge colorScheme="red">CSS</Badge>
                </Stack>
              </ProjectCard>
            </motion.div>
            <motion.div variants={item}>
              <ProjectCard
                title="Biohack"
                href="https://biohackucr.com"
                image="/images/icon_logo.png"
                category="Hackathon"
              >
                The website used by hundreds of students to interact and
                participate in the annual Biohack hackathon. Coming Spring 2021.
                <Stack isInline mt={4}>
                  <Badge colorScheme="green">React</Badge>
                  <Badge colorScheme="orange">JS</Badge>
                  <Badge colorScheme="purple">HTML</Badge>
                  <Badge colorScheme="red">CSS</Badge>
                </Stack>
              </ProjectCard>
            </motion.div>
            <motion.div variants={item}>
              <ProjectCard
                title="Habitle"
                href="https://habitle.com"
                image="/images/habitle.png"
                category="Personal Project"
              >
                A minimal and powerful web app that generates a heatmap to
                visual progress to promote a positive and consistent lifestyle.
                <Stack isInline mt={4}>
                  <Badge colorScheme="green">React</Badge>
                  <Badge colorScheme="orange">JS</Badge>
                  <Badge colorScheme="purple">HTML</Badge>
                  <Badge colorScheme="red">CSS</Badge>
                </Stack>
              </ProjectCard>
            </motion.div>
          </Stack>
        </motion.div>
      </Box>
      <Timeline />
      <Heading fontWeight="bold" as="h1" my={8}>
        My Music Right Now
      </Heading>
      <Text>The top ten songs I've been listening to. Updated Daily.</Text>
      <TopTracks />
    </Container>
  );
}
