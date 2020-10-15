import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import {
  Heading,
  Badge,
  Stack,
  Text,
  Wrap,
  useColorMode,
} from "@chakra-ui/core";

export default function Projects() {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "#333",
    dark: "rgba(240,240,244, 0.5)",
  };
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Heading fontWeight="bold" as="h1" my={5}>
        Projects
      </Heading>
      <Text color={textColor[colorMode]}>
        Here a collection of my best work where I demonstrate my skills as a
        developer and a creator. Some of the technologies I currently use are:
      </Text>
      <Wrap justify="center" mt={4}>
        <Badge fontSize="lg" colorScheme="blue">
          Next
        </Badge>
        <Badge fontSize="lg" colorScheme="green">
          React
        </Badge>
        <Badge fontSize="lg" colorScheme="orange">
          JS
        </Badge>
        <Badge fontSize="lg" colorScheme="purple">
          HTML
        </Badge>
        <Badge fontSize="lg" colorScheme="red">
          CSS
        </Badge>
        <Badge fontSize="lg" colorScheme="yellow">
          C++
        </Badge>
        <Badge fontSize="lg" colorScheme="gray">
          Git
        </Badge>
      </Wrap>
      <Heading size="lg" my={4}>
        Currently working on:
      </Heading>
      <Stack spacing={4}>
        <ProjectCard title="Habitle" href="https://habitle.com">
          A minimal and powerful web app that generates a heatmap to visual
          progress to promote a positive and consistent lifestyle.
          <Stack isInline mt={4}>
            <Badge colorScheme="green">React</Badge>
            <Badge colorScheme="orange">JS</Badge>
            <Badge colorScheme="purple">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
            <Badge colorScheme="gray">Git</Badge>
          </Stack>
        </ProjectCard>
      </Stack>
      <Heading size="lg" my={4}>
        Finished Projects:
      </Heading>
      <Stack spacing={4}>
        <ProjectCard title="Rho Shell" href="https://github.com/r-jo/rhoshell">
          Rho Shell is a program that is aimed to replicate the standard
          functions of a shell using a Command Line Interface (CLI), written
          primarily in C++.
          <Stack isInline mt={4}>
            <Badge colorScheme="yellow">C++</Badge>
            <Badge colorScheme="gray">Git</Badge>
          </Stack>
        </ProjectCard>
        <ProjectCard title="Citrushack" href="https://citrushack.com">
          The website used by hundreds of students to interact and participate
          in the annual Citrushack hackathon. Now, fully online.
          <Stack isInline mt={4}>
            <Badge colorScheme="green">React</Badge>
            <Badge colorScheme="orange">JS</Badge>
            <Badge colorScheme="purple">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
            <Badge colorScheme="gray">Git</Badge>
          </Stack>
        </ProjectCard>
        <ProjectCard title="Cutiehack" href="https://cutiehack.io">
          The website used by hundreds of students to interact and participate
          in the annual Cutiehack hackathon. Now, fully online.
          <Stack isInline mt={4}>
            <Badge colorScheme="green">React</Badge>
            <Badge colorScheme="orange">JS</Badge>
            <Badge colorScheme="purple">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
            <Badge colorScheme="gray">Git</Badge>
          </Stack>
        </ProjectCard>
        <ProjectCard title="Biohack" href="https://biohackucr.com">
          The website used by hundreds of students to interact and participate
          in the annual Biohack hackathon. Now, fully online.
          <Stack isInline mt={4}>
            <Badge colorScheme="green">React</Badge>
            <Badge colorScheme="orange">JS</Badge>
            <Badge colorScheme="purple">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
            <Badge colorScheme="gray">Git</Badge>
          </Stack>
        </ProjectCard>
      </Stack>
    </Container>
  );
}
