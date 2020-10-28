import {
  Box,
  useClipboard,
  Link,
  Heading,
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
          <Box>
            <Heading as="h3">Useful Links</Heading>
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
            <Box mt={4}>
              <Link href="https://github.com/r-jo/portfolio" isExternal>
                /Source code
              </Link>
              <br />
              <Link href="https://nextjs.org" isExternal>
                /Next.js
              </Link>
            </Box>
          </Box>
          <Box>
            <Heading as="h3">Don't be a Stranger</Heading>
            <Text color="gray.500">
              I don't bite anything except really good food. I'm always up for
              making new friends. Learn more and always feel free to contact me.
            </Text>
            <Text color="gray.500" fontSize="sm">
              {new Date().getFullYear()} &#169; Rajbir Johar
            </Text>

            <svg viewBox="0 0 100 20">
              <defs>
                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stop-color="#718096"></stop>
                  <stop offset="95%" stop-color="#718096"></stop>
                </linearGradient>
                <pattern
                  id="wave"
                  x="0"
                  y="0"
                  width="120"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    id="wavePath"
                    d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                    mask="url(#mask)"
                    fill="url(#gradient)"
                  >
                    <animateTransform
                      attributeName="transform"
                      begin="0s"
                      dur="2.5s"
                      type="translate"
                      from="0,0"
                      to="40,0"
                      repeatCount="indefinite"
                    ></animateTransform>
                  </path>
                </pattern>
              </defs>
              <text
                font-weight="bold"
                font-size="0.4em"
                x="0"
                y="11"
                fill="url(#wave)"
                fill-opacity="1.0"
              >
                Next to the ocean.
              </text>
              <text
                font-weight="bold"
                font-size="0.4em"
                x="0"
                y="11"
                fill="url(#gradient)"
                fill-opacity="0.5"
              >
                Next to the ocean.
              </text>
            </svg>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};
