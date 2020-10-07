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
} from "@chakra-ui/core";

const Section = ({ title, children }) => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Heading textAlign="center" fontWeight="bold" as="h1" my={6}>
        {title}
      </Heading>
      <Text>{children}</Text>
    </Box>
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
      <Box display="flex" justifyContent="center" flexDirection="column">
        <Section title="Hello you. I'm Rajbir.">
          I'm a frontend web developer based in Southern California 😎 studying
          Computer Science at the University of California, Riverside 🐻. I'm
          currently working on{" "}
          <Link href="https://habitle.com" color="#0070f3" isExternal>
            Habitle
          </Link>
          , a new app that generates a heatmap which promotes positive habits ✅.
          <br />
          <br />
          If I'm not coding, you can catch me perfecting the art of the grilled
          cheese 🥪 or building bespoke keyboards ⌨️. Gotta invest in your tool of
          trade, am I right? I'm typing on my Iron165 (my favorite board ever)
          with lubricated cream switches.
        </Section>
        <ButtonGroup mt={4} spacing={4} justifyContent="center">
          <Button colorScheme="green" variant="solid" onClick={onCopy}>
            {hasCopied ? "Copied!" : "Email"}
          </Button>
          <Button colorScheme="green" variant="link">
            Github
          </Button>
        </ButtonGroup>
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
