import {
  Button,
  Box,
  ButtonGroup,
  useClipboard,
  Link,
  useColorMode,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/core";

export const Footer = () => {
  const [value, setValue] = React.useState("rajbirsjohar@gmail.com");
  const { onCopy, hasCopied } = useClipboard(value);
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: "white",
    dark: "gray.800",
  };
  return (
    <>
      <Divider />
      <Box maxW="45rem" p="0 2rem 3rem" m="3rem auto 0rem">
        <Heading as="h3" size="lg" fontWeight="bold" mb={4}>
          Don't be a Stranger.
        </Heading>
        <Text>I don't bite anything except really good food.</Text>
        <ButtonGroup my={4} spacing={4}>
          <Button colorScheme="teal" variant="solid" onClick={onCopy}>
            {hasCopied ? "Copied!" : "Email"}
          </Button>
          <Button colorScheme="teal" variant="link">
            <Link href="https://github.com/r-jo" isExternal>
              Github
            </Link>
          </Button>
          <Button colorScheme="teal" variant="link">
            <Link href="https://www.linkedin.com/in/rajbirjohar/" isExternal>
              Linkedin
            </Link>
          </Button>
        </ButtonGroup>
        <Text color="gray.500" fontSize="sm">
          {new Date().getFullYear()} &#169; Rajbir Johar
        </Text>
      </Box>
    </>
  );
};
