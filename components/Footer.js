import {
  Button,
  Box,
  ButtonGroup,
  useClipboard,
  Link,
  useColorMode,
  Heading,
  Text,
} from "@chakra-ui/core";

export const Footer = () => {
  const [value] = React.useState("rajbirsjohar@gmail.com");
  const { onCopy, hasCopied } = useClipboard(value);
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "#f6f6f6",
    dark: "#000",
  };
  return (
    <>
      <Box
        bg={bgColor[colorMode]}
        transition="background-color 0.2s ease-in-out"
      >
        <Box maxW="45rem" p="3rem 2rem 3rem" m="0rem auto 0rem">
          <Heading as="h3" size="lg" fontWeight="bold" mb={4}>
            Don't be a Stranger.
          </Heading>
          <Text>I don't bite anything except really good food.</Text>
          <ButtonGroup my={4} spacing={4}>
            <Button colorScheme="blue" variant="solid" onClick={onCopy}>
              {hasCopied ? "Copied!" : "Email"}
            </Button>
            <Button colorScheme="blue" variant="link">
              <Link href="https://github.com/r-jo" isExternal>
                Github
              </Link>
            </Button>
            <Button colorScheme="blue" variant="link">
              <Link href="https://www.linkedin.com/in/rajbirjohar/" isExternal>
                Linkedin
              </Link>
            </Button>
          </ButtonGroup>
          <Text color="gray.500" fontSize="sm">
            {new Date().getFullYear()} &#169; Rajbir Johar
          </Text>
        </Box>
      </Box>
    </>
  );
};
