import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { Heading, Badge, Stack, Text, Link , Flex, Box} from "@chakra-ui/core";

import { motion } from "framer-motion";

export default function Projects() {
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
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box pt={5}>
      <Heading fontWeight="bold" as="h1" my={5}>
        Projects
      </Heading>
      <Text>
        Here is a collection of my best work where I demonstrate my skills as a
        developer and a creator. Some of the languages, frameworks, and
        libraries I currently use are:
      </Text>
      <motion.div initial="hidden" animate="visible" variants={list}>
        <Flex flexWrap="wrap" justify="center" my={3}>
          <motion.div variants={item}>
            <Badge fontSize="lg" colorScheme="blue" m={1}>
              Next JS
            </Badge>
          </motion.div>
          <motion.div variants={item}>
            <Badge fontSize="lg" colorScheme="green" m={1}>
              React JS
            </Badge>
          </motion.div>
          <motion.div variants={item}>
            <Badge fontSize="lg" colorScheme="orange" m={1}>
              JS
            </Badge>
          </motion.div>
          <motion.div variants={item}>
            <Badge fontSize="lg" colorScheme="purple" m={1}>
              HTML
            </Badge>
          </motion.div>
          <motion.div variants={item}>
            <Badge fontSize="lg" colorScheme="yellow" m={1}>
              Styled Components
            </Badge>
          </motion.div>
          <motion.div variants={item}>
            <Badge fontSize="lg" colorScheme="red" m={1}>
              CSS
            </Badge>
          </motion.div>
          <motion.div variants={item}>
            <Badge fontSize="lg" colorScheme="yellow" m={1}>
              C++
            </Badge>
          </motion.div>
          <motion.div variants={item}>
            <Badge fontSize="lg" colorScheme="blue" m={1}>
              Chakra UI
            </Badge>
          </motion.div>
          <motion.div variants={item}>
            <Badge fontSize="lg" colorScheme="gray" m={1}>
              Git
            </Badge>
          </motion.div>
          <motion.div variants={item}>
            <Badge fontSize="lg" colorScheme="teal" m={1}>
              Figma
            </Badge>
          </motion.div>
          <motion.div variants={item}>
            <Badge fontSize="lg" colorScheme="green" m={1}>
              Yarn
            </Badge>
          </motion.div>
          <motion.div variants={item}>
            <Badge fontSize="lg" colorScheme="red" m={1}>
              NPM
            </Badge>
          </motion.div>
          <motion.div variants={item}>
            <Badge fontSize="lg" colorScheme="purple" m={1}>
              Tailwind
            </Badge>
          </motion.div>
        </Flex>
      </motion.div>
      <Heading size="lg" my={8}>
        Currently working on
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
              A minimal and powerful web app that generates a heatmap to visual
              progress to promote a positive and consistent lifestyle.
              <Stack isInline mt={4}>
                <Badge colorScheme="green">React JS</Badge>
                <Badge colorScheme="orange">JS</Badge>
                <Badge colorScheme="purple">HTML</Badge>
                <Badge colorScheme="red">CSS</Badge>
              </Stack>
            </ProjectCard>
          </motion.div>
        </Stack>
      </motion.div>
      <Heading size="lg" my={8}>
        Finished Projects
      </Heading>
      <motion.div initial="hidden" animate="visible" variants={list}>
        <Stack spacing={4} mb={6}>
          <motion.div variants={item}>
            <ProjectCard
              title="Rho Shell"
              href="https://github.com/r-jo/rhoshell"
              image="/images/terminal.png"
              category="Personal Project"
            >
              Rho Shell is aimed to replicate the standard functions of a shell
              using a Command Line Interface (CLI), written primarily in C++. It
              can perform most of the basic and common commands of a terminal.
              <Stack isInline mt={4}>
                <Badge colorScheme="yellow">C++</Badge>
              </Stack>
            </ProjectCard>
          </motion.div>
          <motion.div variants={item}>
            <ProjectCard
              title="Cutiehack"
              href="https://cutiehack.io"
              image="/images/cutiehack2020.png"
              category="Hackathon"
            >
              The website used by 500+ students to interact with and participate
              in the annual Cutiehack hackathon. Co-led the effort on UI/UX and
              frontend to provide a seamless and easy-to-use interface.
              <Stack isInline mt={4}>
                <Badge colorScheme="green">React JS</Badge>
                <Badge colorScheme="cyan">TS</Badge>
                <Badge colorScheme="purple">HTML</Badge>
                <Badge colorScheme="red">CSS</Badge>
              </Stack>
            </ProjectCard>
          </motion.div>
        </Stack>
      </motion.div>
      <Text>
        You can find out more about what I do on my{" "}
        <Link
          href="https://github.com/r-jo"
          textDecoration="underline"
          isExternal
        >
          Github
        </Link>
        !
      </Text>
      </Box>
    </Container>
  );
}
