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
} from "@chakra-ui/core";

const Section = ({ title, children }) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <Box>
      <Heading fontWeight="bold" as="h1" my={5}>
        {title}
      </Heading>
      <Text color={color[colorMode]}>{children}</Text>
    </Box>
  );
};

export default function Home() {
  const [value, setValue] = React.useState("rajbirsjohar@gmail.com");
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Box
        minH="90vh"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Section title="Hello you. I'm Rajbir.">
          I like to call myself a creative addict, visual storyteller, and
          keyboard enthusiast.
          <br />
          <br />
          Based in Southern California.
        </Section>
        <ButtonGroup mt={4} spacing={4}>
          <Button colorScheme="teal" variant="solid" onClick={onCopy}>
            {hasCopied ? "Copied!" : "Email"}
          </Button>
          <Button colorScheme="teal" variant="link">
            Github
          </Button>
        </ButtonGroup>
      </Box>
      <Section title="A Bit About Me">
        I am a rising Junior attending the University of California, Riverside
        studying Computer science. I participate in multiple hackathon web
        development teams and love designing interfaces.
        <br />
        <br />
        In my spare time I practice perfecting the art of the grilled cheese and
        experiment with building new bespoke mechanical keyboards. Currently I
        am typing on my Iron165 (my favorite board ever) built with cream
        switches lubricated with Krytox 205g0 along with Durock stabilizers. I
        vibe with cool typography and my favorite font is Inter. I aim to travel
        all over the world.
      </Section>
      <Timeline />
      <Heading fontWeight="bold" as="h1" my={5}>
        My Music Right Now
      </Heading>
      <Text>The top ten songs I've been listening to.</Text>
      <TopTracks />
    </Container>
  );
}
