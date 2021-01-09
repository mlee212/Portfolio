import React from "react";
import Head from "next/head";
import Link from "next/link";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import {
  Heading,
  Text,
  Button,
  ButtonGroup,
  useClipboard,
  Box,
  Link as ChakraLink,
  Stack,
  Badge,
} from "@chakra-ui/core";

import { motion } from "framer-motion";

const Section = ({ title, children }) => {
  return (
    <Box
      minH="50vh"
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
            Based in Southern California
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
        <Link
          href="https://citrushack.com"
          textDecoration="underline"
          isExternal
        >
          Citrushack
        </Link>
        , the largest hackathon offered by UCR. More updates soon to come!
        <br />
        <br />
        If I'm not coding, you can catch me perfecting the art of the grilled
        cheese 🥪 or building bespoke keyboards ⌨️. Gotta invest in your tool of
        trade, am I right? I'm typing on my Iron165 (my favorite board ever)
        with lubricated cream switches. You can also find me currently playing
        through Ghost of Tsushima.
        <br />
        <Heading fontWeight="bold" as="h1" my={8}>
          Featured Projects
        </Heading>
        <motion.div initial="hidden" animate="visible" variants={list}>
          <Stack spacing={4} mb={6}>
            <motion.div variants={item}>
              <ProjectCard
                title="Citrushack"
                href="https://citrushack.com"
                image="/images/citrushack.png"
                category="Hackathon"
              >
                The website used by hundreds of students to interact and
                participate in the annual Citrushack hackathon. Coming Spring
                2021.
                <Stack isInline mt={4}>
                  <Badge colorScheme="blue">Next JS</Badge>
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
                image="/images/biohack2021.png"
                category="Hackathon"
              >
                The website used by hundreds of students to interact and
                participate in the annual Biohack hackathon. Coming Spring 2021.
                <Stack isInline mt={4}>
                  <Badge colorScheme="blue">Next JS</Badge>
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
      <Text>
        Discover some of my other{" "}
        <ChakraLink as={Link} href="/projects">
          <Text cursor="pointer" as="u">
            projects
          </Text>
        </ChakraLink>{" "}
         or check out my{" "}
        <ChakraLink
          href="https://github.com/r-jo"
          textDecoration="underline"
          isExternal
        >
          Github
        </ChakraLink>
        !
      </Text>
    </Container>
  );
}
