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
        <Text>{children}</Text>
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
          <Stack isInline mt={4}>
            <Badge colorScheme="gray">Git</Badge>
            <Badge colorScheme="blue">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
            <Badge colorScheme="orange">JS</Badge>
          </Stack>
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
          <h3>Introduction</h3>
          Since 2018, I was a member of the team that developed the website for
          UCR's famous annual hackathon, Citrushack, for the years 2018 and 2019
          where I focused on the frontend and developed an interface that was
          easy to use by the thousands of students that participated.
          <h3>Purpose</h3>
          After Cutiehack, I wanted to expand on my experience and challenge
          myself with a larger scale project in terms of students. The
          developemental process is split into two parallel tasks, one for
          frontend and one for backend.
          <h3>Challenges</h3>
          The biggest challenge would be that this was in fact my first
          introduction ever into using React.JS and I had zero prior knowledge
          on javascript. But by spending time breaking down the large problems
          into smaller ones, I was able to overcome each task given to me.
          <h4>Overcoming a Challenge</h4>
          For example, the countdown clock was to be implemented so students can
          see how long they have until the event. I figured out I needed three
          objects: the current date, the final date, and the time between each
          of these dates. Using the moment.JS package, a library that handles
          dates and times, helped speed the process. By using React states, I
          was able to figure out that I can subtract the two dates and split the
          time elapsed into its Day, Hours, Minutes, and Seconds partitions. I
          then created an <Code>interval</Code> that updates every second and
          saves inside the <Code>ComponentDidMount</Code> lifecycle method until
          it is cleared. A little bit of CSS and SVGs, and we were off the
          races.
          <h3>Workflow and Collaboration</h3>
          With my focus being on frontend, we collaborated with the design team
          through figma as well as helped the backend team connect to the
          frontend interface. I helped design key parts of the website including
          the navigation bar and countdown clock to the event using modern tools
          such as flexbox and grid to ensure a smooth user experience on both
          desktop and mobile and across all the major browsers.
          <Stack isInline mt={4}>
            <Badge colorScheme="green">React</Badge>
            <Badge colorScheme="gray">Git</Badge>
            <Badge colorScheme="blue">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
            <Badge colorScheme="orange">JS</Badge>
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
