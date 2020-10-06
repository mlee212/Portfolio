import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
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
  Image,
  List,
  ListItem,
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
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Heading fontWeight="bold" as="h1" my={5}>
        Projects
      </Heading>
      <Text>
        Here a collection of my best work where I demonstrate my skills as a
        developer and a creator.
      </Text>
      <Heading size="lg" my={4}>
        Currently working on:
      </Heading>
      <Accordion minH="50vh" defaultIndex={[0]} allowMultiple>
        <AccordionSection title="Habitle" href="https://habitle.com">
          <h3>Introduction</h3>
          Coming from Attempt 2 Studios is a brand new app, Habitle!
          <br />
          <br />
          Habitle is a habit tracking web app that provides a simple feature: to
          track habits. That's it.
          <br />
          <br />
          This app was inspired by the many college students who could never
          seem to stick to a positive habit and we feel that it is because there
          is no easy way to visualize the progress of that habit over a course
          of time.
          <h3>Collaboration</h3>
          <Link color="teal.500" href="https://www.devbhatia.me" isExternal>
            Dev Bhatia
          </Link>{" "}
          and I are collaborating on serving a minimal and functional app that
          can be used by everyone. No login required because we don't need your
          data.
        </AccordionSection>

        <Heading size="lg" my={4}>
          Finished Projects:
        </Heading>

        <AccordionSection
          title="Rho Shell"
          href="https://github.com/r-jo/rhoshell"
        >
          <h3>Introduction</h3>
          Rho Shell is a command line interface that can perform the core
          functions of a terminal.
          <br />
          <br />
          This program is aimed to replicate the standard functions of a shell
          using a Command Line Interface (CLI) which is written primarily in
          C++. Its main functions include being able to <Code>cp</Code> - copy,{" "}
          <Code>rm</Code> - remove, <Code>mv</Code> - move, and{" "}
          <Code>echo</Code> - echo. It can parse through <Code>&&</Code> and{" "}
          <Code>||</Code> symbols as well. Multiple commands can be run at once.
          <Image
            py={50}
            src="/assets/Diagram.png"
            alt="Flow Diagram depicting how the program and user interact."
          />
          <Text textAlign="center" color="grey">
            This diagram depicts the flow of the program and how it interacts
            based on user input.
          </Text>
          <h3>Example</h3>
          After executing <Code>./rhoshell</Code> within a terminal instance, a
          user can execute most of the basic terminal commands. The difference
          is that it is not being executed by the terminal itself, but from the
          program Rho Shell.
          <h3>Classes</h3>
          <h4>Base Classes</h4>
          <List spacing={3} styleType="disc">
            <ListItem>
              <Code>virtual execute()</Code>: This function is used as a
              template for which all the child class derive their own{" "}
              <Code>execute()</Code> function from. This allows the child
              classes to override the parent function without rewriting the same
              function over and over.
            </ListItem>
            <ListItem>
              <Code>virtual getCommand()</Code>: This function is used as a
              template for testing which retrieves which command was executed
              while allowing each child class to derive its own function for
              testing purposes.
            </ListItem>
          </List>
          <h4>Connector Class</h4>
          <List spacing={3} styleType="disc">
            <ListItem>
              <Code>left & right</Code>: These functions are used by the parser
              to determine the left and right operands of the command given by
              the user.
            </ListItem>
          </List>
          <h4>Operator Classes</h4>
          <List spacing={3} styleType="disc">
            <ListItem>
              <Code>and</Code>: Also known as <Code>&&</Code> which executes
              both left and right operand functions if both functions are valid
              and nonconflicting.
            </ListItem>
            <ListItem>
              <Code>or</Code>: Also known as <Code>||</Code> which executes
              either or both left and right operand functions if atleast one of
              the operand functions are valid and nonconflicting.
            </ListItem>
            <ListItem>
              <Code>semicolon</Code>: Also known as <Code>;</Code> which is used
              to separate instructions.
            </ListItem>
            <ListItem>
              <Code>TestCommand</Code>: Used to test each operator class.
            </ListItem>
          </List>
          <h3>Testing</h3>
          Testing was a major aspect in the development process of the project.
          We used Google's Test Suite and wrote our own in order to test our
          functions against several types of inputs, both right and wrong, using
          bash scripting to automate the entire process.
          <h3>Collaboration</h3>
          This program was built by a two person team where we used git version
          control to keep track of all the delegated tasks, commit changes, and
          code reviews. We communicated throughout the entire project on how we
          were developing and strived to be team-oriented.
          <Stack isInline mt={4}>
            <Badge colorScheme="yellow">C++</Badge>
            <Badge colorScheme="gray">Git</Badge>
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
      </Accordion>
    </Container>
  );
}
