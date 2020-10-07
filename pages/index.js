import Head from "next/head";
import Container, { siteTitle } from "../components/Container";
import TopTracks from "../components/TopTracks";
import Timeline from "../components/Timeline";
import {
  Heading,
  Text,
  Button,
  ButtonGroup,
  useClipboard,
  useColorMode,
  Box,
  Link,
  Stack,
} from "@chakra-ui/core";

const Section = ({ title, children }) => {
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
      <Text>{children}</Text>
    </Box>
  );
};

const ProjectCard = ({ title, children, href }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "#fff",
    dark: "#090909",
  };
  const bxShadow = {
    light:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    dark:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(8, 8, 8, 0.4)",
  };
  return (
    <Link href={href} isExternal>
      <Box
        bg={bgColor[colorMode]}
        boxShadow={bxShadow[colorMode]}
        borderRadius="7px"
        px={6}
        py={1}
        transition="all 0.2s ease-in-out"
        
      >
        <Heading fontWeight="bold" as="h3">
          {title}
        </Heading>
        <Text>{children}</Text>
      </Box>
    </Link>
  );
};

export default function Home() {
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
          <Link href="https://habitle.com" color="#0070f3" isExternal>
            Habitle
          </Link>
          , a new app that generates a heatmap which promotes positive habits
          ✅.
          <br />
          <br />
          If I'm not coding, you can catch me perfecting the art of the grilled
          cheese 🥪 or building bespoke keyboards ⌨️. Gotta invest in your tool
          of trade, am I right? I'm typing on my Iron165 (my favorite board
          ever) with lubricated cream switches.
          <br />
          <ButtonGroup mt={4} spacing={4}>
            <Button colorScheme="blue" variant="solid" onClick={onCopy}>
              {hasCopied ? "Copied!" : "@ Email"}
            </Button>
            <Button colorScheme="blue" variant="link">
              Github
            </Button>
          </ButtonGroup>
        </Section>
        <Section title="Featured Projects">
          <Stack spacing={4}>
            <ProjectCard title="Habitle" href="https://habitle.com">
              A minimal and powerful web app that generates a heatmap to visual
              progress to promote a positive and consistent lifestyle.
            </ProjectCard>
            <ProjectCard title="Citrushack" href="https://citrushack.com">
              The website used by hundreds of students to interact and
              participate in the annual Citrushack hackathon. Now, fully online.
            </ProjectCard>
            <ProjectCard title="Biohack" href="https://biohackucr.com">
              The website used by hundreds of students to interact and
              participate in the annual Biohack hackathon. Now, fully online.
            </ProjectCard>
          </Stack>
        </Section>
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
