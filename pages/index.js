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
  useColorMode,
} from "@chakra-ui/core";

const Section = ({ title, children }) => {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "#333",
    dark: "rgba(240,240,244,0.5)",
  };

  return (
    <Box
      minH="50vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Heading fontWeight="bold" as="h1" my={4}>
        {title}
      </Heading>
      <Text color={textColor[colorMode]}>{children}</Text>
    </Box>
  );
};

export default function Home() {
  const { colorMode } = useColorMode();
  const linkColor = {
    light: "#000",
    dark: "#fff",
  };
  const [value] = React.useState("rajbirsjohar@gmail.com");
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box>
        <Section title="Hey, I'm Rajbir.">
          I'm a frontend web developer based in Southern California 😎 studying
          Computer Science at the University of California, Riverside 🐻. I'm
          currently working on{" "}
          <Link
            href="https://habitle.com"
            color={linkColor[colorMode]}
            isExternal
          >
            Habitle
          </Link>
          , a new app that generates a heatmap which promotes positive habits.
          <br />
          <br />
          If I'm not coding, you can catch me perfecting the art of the grilled
          cheese 🥪 or building bespoke keyboards ⌨️. Gotta invest in your tool
          of trade, am I right? I'm typing on my Iron165 (my favorite board
          ever) with lubricated cream switches.
          <br />
          <ButtonGroup mt={4} spacing={1}>
            <Button
              color={linkColor[colorMode]}
              variant="solid"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 4px 8px -1px rgba(0, 0, 0, 0.06)",
              }}
              onClick={onCopy}
            >
              {hasCopied ? "Copied!" : "@ Email"}
            </Button>
            <Link href="https://github.com/r-jo" isExternal>
              <Button variant="ghost">Github</Button>
            </Link>
          </ButtonGroup>
        </Section>

        <Heading fontWeight="bold" as="h1" my={4}>
          Featured Projects
        </Heading>
        <Stack spacing={4}>
          <ProjectCard title="Habitle" href="https://habitle.com">
            A minimal and powerful web app that generates a heatmap to visual
            progress to promote a positive and consistent lifestyle.
            <Stack isInline mt={4}>
              <Badge colorScheme="green">React</Badge>
              <Badge colorScheme="orange">JS</Badge>
              <Badge colorScheme="blue">HTML</Badge>
              <Badge colorScheme="red">CSS</Badge>
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
      </Box>
      <Timeline />
      <Heading fontWeight="bold" as="h1" my={5}>
        My Music Right Now
      </Heading>
      <Text>The top ten songs I've been listening to. Updated Daily.</Text>
      <TopTracks />
    </Container>
  );
}
