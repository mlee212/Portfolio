import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { Heading, Badge, Stack, Text, Flex } from "@chakra-ui/core";

export default function Projects() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Heading fontWeight="bold" as="h1" my={5}>
        Projects
      </Heading>
      <Text>
        Here a collection of my best work where I demonstrate my skills as a
        developer and a creator. Some of the technologies I currently use are:
      </Text>
      <Stack maxW="42rem" p="0 2rem" justify="center" isInline mt={4}>
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
      </Stack>
      <Heading size="lg" my={4}>
        Currently working on:
      </Heading>
      <Stack spacing={4}>
        <ProjectCard title="Citrushack" href="https://citrushack.com">
          The website used by hundreds of students to interact and participate
          in the annual Citrushack hackathon. Coming Winter 2021.
          <Stack isInline mt={4}>
            <Badge colorScheme="green">React</Badge>
            <Badge colorScheme="orange">JS</Badge>
            <Badge colorScheme="purple">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
          </Stack>
        </ProjectCard>
        <ProjectCard title="Biohack" href="https://biohackucr.com">
          The website used by hundreds of students to interact and participate
          in the annual Biohack hackathon. Coming Spring 2021.
          <Stack isInline mt={4}>
            <Badge colorScheme="green">React</Badge>
            <Badge colorScheme="orange">JS</Badge>
            <Badge colorScheme="purple">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
          </Stack>
        </ProjectCard>
        <ProjectCard title="Habitle" href="https://habitle.com">
          A minimal and powerful web app that generates a heatmap to visual
          progress to promote a positive and consistent lifestyle.
          <Stack isInline mt={4}>
            <Badge colorScheme="green">React</Badge>
            <Badge colorScheme="orange">JS</Badge>
            <Badge colorScheme="purple">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
          </Stack>
        </ProjectCard>
      </Stack>
      <Heading size="lg" my={4}>
        Finished Projects:
      </Heading>
      <Stack spacing={4}>
        <ProjectCard title="Rho Shell" href="https://github.com/r-jo/rhoshell">
          Rho Shell is aimed to replicate the standard functions of a shell
          using a Command Line Interface (CLI), written primarily in C++. It can
          perform most of the basic and common commands of a terminal.
          <Stack isInline mt={4}>
            <Badge colorScheme="yellow">C++</Badge>
          </Stack>
        </ProjectCard>

        <ProjectCard title="Cutiehack" href="https://cutiehack.io">
          The website used by 500+ students to interact with and participate in
          the annual Cutiehack hackathon. Built with React and Typescript for
          wicked fast performance. Co-led the effort on UI/UX and frontend to
          provide a seamless and easy-to-use interface.
          <Stack isInline mt={4}>
            <Badge colorScheme="green">React</Badge>
            <Badge colorScheme="cyan">TS</Badge>
            <Badge colorScheme="purple">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
          </Stack>
        </ProjectCard>
      </Stack>
    </Container>
  );
}
