import {
  Box,
  useClipboard,
  Link,
  useColorMode,
  Text,
  SimpleGrid,
  ButtonGroup,
  IconButton,
  Divider,
  Button,
} from "@chakra-ui/core";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaSpotify } from "react-icons/fa";

export const Footer = () => {
  const { colorMode } = useColorMode();
  const color = {
    light: "gray.600",
    dark: "#8e95a3",
  }
  const [value] = React.useState("rajbirsjohar@gmail.com");
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <>
      <Divider />
      <Box>
        <SimpleGrid
          maxW="50rem"
          p="3rem 2rem 3rem"
          m="0rem auto 0rem"
          columns={3}
          spacingX="50px"
          minChildWidth="250px"
        >
          <Box my={2}>
            <Text fontWeight="bold" mb={4}>Useful Links</Text>
            <ButtonGroup spacing={2}>
              <Button variant="solid" aria-label="Email" onClick={onCopy}>
                {hasCopied ? "Copied!" : "@ Email"}
              </Button>
              <Link href="https://github.com/r-jo" isExternal>
                <IconButton
                  variant="ghost"
                  aria-label="Github"
                  fontSize="25px"
                  icon={<AiFillGithub />}
                />
              </Link>

              <Link href="https://www.linkedin.com/in/rajbirjohar/" isExternal>
                <IconButton
                  variant="ghost"
                  aria-label="Github"
                  fontSize="25px"
                  icon={<AiFillLinkedin />}
                />
              </Link>

              <Link
                href="https://open.spotify.com/user/7btb9b9wefyiocyrfto5ayc83?si=ASEIwohWQuezjR07gRbnIw"
                isExternal
              >
                <IconButton
                  variant="ghost"
                  aria-label="Github"
                  fontSize="25px"
                  icon={<FaSpotify />}
                />
              </Link>
            </ButtonGroup>
          </Box>
          <Box my={2}>
            <Text fontWeight="bold" mb={4}>Don't be a Stranger</Text>
            <Text color={color[colorMode]}>
              I don't bite anything except really good food. I'm always up for
              making new friends. Learn more and always feel free to contact me.
              <br />
              {new Date().getFullYear()} &#169; Rajbir Johar
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};
