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
  useToast,
} from "@chakra-ui/core";

const Section = ({ title, children }) => {
  return (
    <Box
      minH="50vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Heading fontWeight="bold" as="h1" mb={4}>
        {title}
      </Heading>
      <Text>{children}</Text>
    </Box>
  );
};

export default function Home() {
  const toast = useToast();
  const [value] = React.useState("rajbirsjohar@gmail.com");
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box>
        <Section title="Hi there, I'm Rajbir.">
          I'm a frontend web developer based in Southern California 😎 studying
          Computer Science at the University of California, Riverside. I'm
          currently working on{" "}
          <Link
            href="https://habitle.com"
            textDecoration="underline"
            isExternal
          >
            Habitle
          </Link>
          , a new app that generates a heatmap promoting positive habits through
          visualization.
          <br />
          <br />
          If I'm not coding, you can catch me perfecting the art of the grilled
          cheese 🥪 or building bespoke keyboards ⌨️. Gotta invest in your tool
          of trade, am I right? I'm typing on my Iron165 (my favorite board
          ever) with lubricated cream switches.
          <br />
          <ButtonGroup mt={4} spacing={1}>
          <Button variant="solid" aria-label="Email" onClick={onCopy}>
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
        <ProjectCard title="Citrushack" href="https://citrushack.com">
          The website used by hundreds of students to interact and participate
          in the annual Citrushack hackathon. <i>Coming Winter 2021.</i>
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
          in the annual Biohack hackathon. <i>Coming Spring 2021.</i>
          <Stack isInline mt={4}>
            <Badge colorScheme="green">React</Badge>
            <Badge colorScheme="orange">JS</Badge>
            <Badge colorScheme="purple">HTML</Badge>
            <Badge colorScheme="red">CSS</Badge>
            <Badge colorScheme="gray">Git</Badge>
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
