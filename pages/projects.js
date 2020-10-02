import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Link,
  Badge,
  Stack,
  Text,
  Code,
  useColorMode,
} from "@chakra-ui/core";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const AccordionSection = ({ title, href, children }) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <AccordionItem>
      <AccordionButton>
        <Box flex="1" textAlign="left" fontWeight="bold">
          <Link href={href} isExternal>
            <b>{title}</b>
          </Link>
          <ExternalLinkIcon mx="4px" mb="5px" />
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Text color={color[colorMode]}>{children}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default function Projects() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Heading mb={4}>Projects</Heading>
      <Heading size="lg" my={4}>
        Currently working on:
      </Heading>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionSection title="Habitle">
          Habitle is a habit tracking web app that provides a simple feature: to
          track habits. That's it.
          <br />
          <br />
          This app was inspired by the many college students who could never
          seem to stick to a positive habit and we feel that it is because there
          is no easy way to visualize the progress of that habit over a course
          of time.
          <br />
          <br />
          Dev Bhatia and I are collaborating on serving a minimal and functional
          app that can be used by everyone. No login required because we don't
          need your data.
        </AccordionSection>

        <Heading size="lg" my={4}>
          Finished Projects:
        </Heading>

        <AccordionSection
          title="Rho Shell"
          href="https://github.com/r-jo/rhoshell"
        >
          A simple command line interface written in C++ with the core functions
          of a terminal.
          <br />
          <br />
          This project demonstrates a deep understanding of file systems,
          structures, pipes, and commands on a normal terminal.
          <br />
          <br />
          Its main functions include being able to <Code>cp</Code> - copy,{" "}
          <Code>rm</Code> - remove, <Code>mv</Code> - move, and{" "}
          <Code>echo</Code> - echo. It can parse through <Code>&&</Code> and{" "}
          <Code>||</Code> symbols as well.
          <Stack isInline mt={4}>
            <Badge colorScheme="yellow">C++</Badge>
          </Stack>
        </AccordionSection>

        <AccordionSection title="Citrushack" href="https://citrushack.com">
          I was a member of the team that developed the website for UCR's famous
          annual hackathon, Citrushack, for the years 2018 and 2019 where I
          focused on the frontend and developed an interface that was easy to
          use by the thousands of students that participated.
          <br />
          <br />
          Here is where I learned how to manage a large scale project with a
          team using tools such as git version control.
          <Stack isInline mt={4}>
            <Badge colorScheme="green">React.JS</Badge>
          </Stack>
        </AccordionSection>

        <AccordionSection title="Cutiehack" href="https://cutiehack.io">
          Much like Citrushack, Cutiehack was another one of UCR's smaller
          annual hackathons where I contributed my skills to building the
          frontend of the website that the students used to participate in the
          hackathon.
          <br />
          <br />
          This project was aimed at beginners and learning how to develop a
          website as part of a team.
          <Stack isInline mt={4}>
            <Badge colorScheme="green">React.JS</Badge>
          </Stack>
        </AccordionSection>

        <AccordionSection title="Biohack" href="https://biohackucr.com">
          Biohack was another one of UCR's annual hackathons that focused on
          bioengineering and life sciences versus tradition engineering
          disciplines and where I played a major role in designing the website
          including the revamped mascot and implementing quality UI and UX
          designs to give thousands of users an easy to use and robust interface
          to interact with.
          <Stack isInline mt={4}>
            <Badge colorScheme="green">React.JS</Badge>
          </Stack>
        </AccordionSection>

        <AccordionSection title="Portfolio" href="https://rajbirjohar.com">
          This website serves as my medium to demonstrate my skills and current
          inspiration through its design language. I focus on the adjectives{" "}
          <i>clean</i> and <i>minimal</i>. It's currently written using Next.js.
          <Stack isInline mt={4}>
            <Badge colorScheme="blue">Next.JS</Badge>
          </Stack>
        </AccordionSection>
      </Accordion>
    </Layout>
  );
}
