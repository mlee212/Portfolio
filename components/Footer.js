import {
  Box,
  useClipboard,
  Link,
  useColorMode,
  Heading,
  Text,
  SimpleGrid,
  ButtonGroup,
  Button,
} from "@chakra-ui/core";

export const Footer = () => {
  const [value] = React.useState("rajbirsjohar@gmail.com");
  const { onCopy, hasCopied } = useClipboard(value);
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "#f9f9f9",
    dark: "#111",
  };
  return (
    <>
      <Box
        bg={bgColor[colorMode]}
        transition="background-color 0.2s ease-in-out"
      >
        <SimpleGrid
          maxW="50rem"
          p="3rem 2rem 3rem"
          m="0rem auto 0rem"
          columns={3}
          spacingX="50px"
          minChildWidth="250px"
        >
          <Box>
            <Heading as="h3">Don't be a Stranger</Heading>
            <Text>
              I don't bite anything except really good food. I'm always up for
              making new friends. Learn more and always feel free to contact me.
            </Text>
            <Text color="gray.500" fontSize="sm">
              {new Date().getFullYear()} &#169; Rajbir Johar
            </Text>
          </Box>
          <Box>
            <Heading as="h3">Useful Links</Heading>
            <ButtonGroup spacing={3}>
              <Button
                colorScheme="blue"
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
              <Button colorScheme="blue" variant="link">
                <Link href="https://github.com/r-jo" isExternal>
                  Github
                </Link>
              </Button>
              <Button colorScheme="blue" variant="link">
                <Link
                  href="https://www.linkedin.com/in/rajbirjohar/"
                  isExternal
                >
                  Linkedin
                </Link>
              </Button>

              <Button colorScheme="blue" variant="link">
                <Link
                  href="https://open.spotify.com/user/7btb9b9wefyiocyrfto5ayc83?si=ASEIwohWQuezjR07gRbnIw"
                  isExternal
                >
                  Spotify
                </Link>
              </Button>
            </ButtonGroup>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};
