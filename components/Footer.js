import {
  Button,
  Box,
  ButtonGroup,
  useClipboard,
  Link,
  useColorMode,
  Heading,
  Text,
  Grid,
  SimpleGrid,
} from "@chakra-ui/core";

export const Footer = () => {
  const [value] = React.useState("rajbirsjohar@gmail.com");
  const { onCopy, hasCopied } = useClipboard(value);
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "#f9f9f9",
    dark: "#000",
  };
  return (
    <>
      <Box
        bg={bgColor[colorMode]}
        transition="background-color 0.2s ease-in-out"
      >
        <SimpleGrid
          maxW="45rem"
          p="3rem 2rem 3rem"
          m="0rem auto 0rem"
          columns={2}
          spacingX="40px"
          minChildWidth="300px"
        >
          <Box>
            <Heading as="h3">Why You're Here.</Heading>
            <Text>
              Doesn't matter! I'm always up for making new friends. Learn more
              and always feel free to contact me.
            </Text>
            <Text color="gray.500" fontSize="sm">
              {new Date().getFullYear()} &#169; Rajbir Johar
            </Text>
          </Box>
          <Box>
            <Heading as="h3">Don't be a Stranger.</Heading>
            <Text>I don't bite anything except really good food.</Text>
            <ButtonGroup my={4} spacing={4}>
              <Button colorScheme="green" variant="solid" onClick={onCopy}>
                {hasCopied ? "Copied!" : "Email"}
              </Button>
              <Button colorScheme="green" variant="link">
                <Link href="https://github.com/r-jo" isExternal>
                  Github
                </Link>
              </Button>
              <Button colorScheme="green" variant="link">
                <Link
                  href="https://www.linkedin.com/in/rajbirjohar/"
                  isExternal
                >
                  Linkedin
                </Link>
              </Button>
            </ButtonGroup>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};
