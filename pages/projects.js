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
  Image,
  List,
  ListItem,
  useColorMode,
} from "@chakra-ui/core";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

// const AccordionSection = ({ title, href, children }) => {
//   return (
//     <AccordionItem>
//       <AccordionButton _expanded={{ color: "#0070f3" }}>
//         <Box flex="1" textAlign="left" fontWeight="bold">
//           <Link href={href} isExternal>
//             <b>{title}</b>
//           </Link>
//           <ExternalLinkIcon mx="4px" mb="5px" />
//         </Box>
//         <AccordionIcon />
//       </AccordionButton>
//       <AccordionPanel pb={4}>
//         <Text>{children}</Text>
//       </AccordionPanel>
//     </AccordionItem>
//   );
// };

const ProjectCard = ({ title, children, href }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "#fff",
    dark: "#111",
  };
  const bxShadow = {
    light:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    dark:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(8, 8, 8, 0.4)",
  };

  return (
    <motion.div
      whileTap={{ scale: 1 }}
      whileHover={{
        position: "relative",
        zIndex: 1,
        background: "transparent",
        scale: [1, 1.035, 1.025],
        transition: {
          duration: 0.2,
        },
      }}
    >
      <Box
        bg={bgColor[colorMode]}
        boxShadow={bxShadow[colorMode]}
        borderRadius="7px"
        px={6}
        py={1}
        transition="all 0.2s ease-in-out"
      >
        <Heading fontWeight="bold" as="h3">
          <Link href={href} isExternal>
            {title} <ExternalLinkIcon mb={1} />
          </Link>
        </Heading>
        <Text>{children}</Text>
      </Box>
    </motion.div>
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
      <Stack spacing={4}>
        <ProjectCard title="Habitle" href="https://habitle.com">
          A minimal and powerful web app that generates a heatmap to visual
          progress to promote a positive and consistent lifestyle.
          <Stack isInline mt={4}>
            <Badge colorScheme="orange">JS</Badge>
            <Badge colorScheme="blue">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
            <Badge colorScheme="gray">Git</Badge>
          </Stack>
        </ProjectCard>
      </Stack>
      {/* <Accordion minH="50vh" defaultIndex={[0]} allowMultiple>
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
          <Link color="#0070f3" href="https://www.devbhatia.me" isExternal>
            Dev Bhatia
          </Link>{" "}
          and I are collaborating on serving a minimal and functional app that
          can be used by everyone. No login required because we don't need your
          data.
          <Stack isInline mt={4}>
            <Badge colorScheme="orange">JS</Badge>
            <Badge colorScheme="blue">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
            <Badge colorScheme="gray">Git</Badge>
          </Stack>
        </AccordionSection> */}

      <Heading size="lg" my={4}>
        Finished Projects:
      </Heading>
      <Stack spacing={4}>
        <ProjectCard title="Rho Shell" href="https://github.com/r-jo/rhoshell">
          A CLI written in C++ able to perform the core functions of a normal
          terminal.
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
            <Badge colorScheme="blue">HTML</Badge>
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
            <Badge colorScheme="blue">HTML</Badge>
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
            <Badge colorScheme="blue">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
            <Badge colorScheme="gray">Git</Badge>
          </Stack>
        </ProjectCard>
      </Stack>

      {/* <AccordionSection
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
          <h4>T-minus Five, Four, Three, Two, One</h4>
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
            <Badge colorScheme="orange">JS</Badge>
            <Badge colorScheme="blue">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
            <Badge colorScheme="gray">Git</Badge>
          </Stack>
        </AccordionSection>

        <AccordionSection title="Cutiehack" href="https://cutiehack.io">
          <h3>Introduction</h3>
          Before Citrushack, I was a member of the smaller but still popular
          Cutiehack hackathon web development team. I had a focus on frontend
          development where I helped design and develop different components of
          the website.
          <h3>Purpose</h3>
          This website served as the main portal for all students that joined
          Cutiehack. Cutiehack is the smaller sibling to Citrushack. In contrast
          to Citrushack, Cutiehack was aimed at newcomers and students zero
          experience in technology and coding. Even if Cutiehack was smaller, I
          had to ensure this website was accessible to the hundreds of students
          that used it to participate.
          <h3>Challenges</h3>
          What posed as the biggest challenge to me in the beginning was my
          complete lack of web development experience. I walked into the first
          meeting and was welcomed with open arms by the team where I was taught
          the fundementals of how to build a website. That first experience is
          what pushes me to continue attending every year to give the same
          welcome to the newcomers that want to be involved in web development.
          <h4>From Zero to Hero</h4>I didn't know the first thing about how to
          render a document on a browser. Nothing. Fortunately, I was part of an
          experienced team who loved to help out and answer questions. While I
          did use Google to solve a lot of the problems that arose during my
          initial development, I always took the opportunity to converse with my
          team about the best way to approach a certain challenge and we would
          bounce off ideas. This helped immensely with my soft skills and
          building positive and impactful relationships with my team.
          <h3>Workflow and Collaboration</h3>
          With my focus being on frontend, we collaborated with the design team
          through figma as well as helped the backend team connect to the
          frontend interface. I helped design key parts of the website including
          the navigation bar and countdown clock to the event using modern tools
          such as flexbox and grid to ensure a smooth user experience on both
          desktop and mobile and across all the major browsers.
          <Stack isInline mt={4}>
            <Badge colorScheme="green">React.JS</Badge>
            <Badge colorScheme="orange">JS</Badge>
            <Badge colorScheme="blue">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
            <Badge colorScheme="gray">Git</Badge>
          </Stack>
        </AccordionSection>

        <AccordionSection title="Biohack" href="https://biohackucr.com">
          <h3>Introduction</h3>
          Biohack is where I really put my skills to the test. After two years
          of studying web development on my own, I joined a small four man team
          in building the website for the Biohack hackathon. I mention skills,
          because this time I took a major role in developing the website which
          including UI and UX. I performed code reviews for my team members and
          made sure to run my code by them as well.
          <h3>Purpose</h3>
          Biohack is a hackathon geared towards life sciences and bioengineering
          vs the traditional engineering disciplines. I brought my two years of
          experience with design and front end development to the team where we
          tackled challenges such as performance, accessibility, and style. I
          completely redesigned the mascot to fix higher resolution screens and
          used modern CSS rules like flexbox to render a great experience on
          both mobile and desktop platforms as well cross browser support.
          <h3>Challenges</h3>
          Some of the biggest challenges I faced when working on Biohack was how
          to delegate and accept tasks. With the added freedom of developing
          without the guidance of a leader, I took it upon myself to solve
          problems based on my strengths and also improving my weaknesses. I
          strived to be team oriented in order to give all of my team members
          the support they needed.
          <h4>Rising from Defeat</h4>
          Unfortunately, 2020 Biohack was hit by COVID and consequently
          cancelled. But I didn't let this turn of events stop me from
          continuing web development. With the skills I acquired from developing
          Biohack, I began to develop some of my own side projects.
          <h3>Workflow and Collaboration</h3>
          With my focus being on frontend, we collaborated with the design team
          through figma as well as helped the backend team connect to the
          frontend interface. I helped design key parts of the website including
          the navigation bar and countdown clock to the event using modern tools
          such as flexbox and grid to ensure a smooth user experience on both
          desktop and mobile and across all the major browsers.
          <Stack isInline mt={4}>
            <Badge colorScheme="green">React.JS</Badge>
            <Badge colorScheme="orange">JS</Badge>
            <Badge colorScheme="blue">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
            <Badge colorScheme="gray">Git</Badge>
          </Stack>
        </AccordionSection>
      </Accordion> */}
    </Container>
  );
}
